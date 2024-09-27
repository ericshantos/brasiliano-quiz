import {perguntas} from "./perguntas.js";
import respostaErrada from "../transicao/respostaErrada.js";
import { intervalo, decairPontos, pontos } from "../contagemPontuacao/cronometro.js";
import { pontuacaoRodada, zerarPontuacao, somarPontuacaoTotal } from "../contagemPontuacao/calcularPontuacao.js";

/**
 * Esta função configura os botões de reiniciar e iniciar o quiz, além de gerenciar o
 * fluxo das perguntas e a lógica de respostas corretas e incorretas. Ela embaralha
 * as respostas e exibe as perguntas de forma aleatória.
 */

// Define o botão de reiniciar o quiz, vinculado à função reiniciarQuiz
document.getElementById('btn-recomecar').addEventListener('click', reiniciarQuiz);

// Define o botão de iniciar o quiz, vinculado à função sequenciadorPerguntas
document.getElementById('btn-iniciar-quiz').addEventListener('click', sequenciadorPerguntas);

let perguntaAtual = 1; // Controla o índice da pergunta atual

/**
 * Função para reiniciar o quiz.
 * - Reseta o contador de perguntas.
 * - Oculta todas as perguntas e redefine o estilo das alternativas.
 * - Exibe a primeira pergunta e chama a função sequenciadorPerguntas.
 */
function reiniciarQuiz() {
    perguntaAtual = 1; // Reinicia a contagem das perguntas

    // Seleciona todas as perguntas e alternativas para ocultar e resetar o estilo
    let rodadas = document.querySelectorAll('pergunta');
    let alternativas = document.querySelectorAll('.pergunta ul li button');

    // Oculta todas as perguntas
    rodadas.forEach(function(rodada) {
        rodada.classList.add('ocultar');
    });

    // Redefine o estilo de fundo das alternativas
    alternativas.forEach(function(alternativa) {
        alternativa.style.backgroundColor = '#FFE2BB';
        
    });

    alternativas.forEach(function(alternativa) {
        alternativa.addEventListener(
            'mouseover',
            function(event) {
                event.target.style.backgroundColor = '#D5ED9F';
                setTimeout(function() {
                    event.target.style.backgroundColor = '';
                }, 500);
            },
            false,
        );
    });
    // Oculta a tela de reinício e exibe a primeira pergunta
    document.getElementById('reiniciar-jogo').classList.add('ocultar');
    document.getElementById('pergunta-1').style.display = 'flex';

    // Inicia o sequenciamento das perguntas
    sequenciadorPerguntas();

    zerarPontuacao();
}

/**
 * Função responsável por sortear uma pergunta, embaralhar as alternativas e
 * configurar a lógica de verificação das respostas.
 */
function sequenciadorPerguntas() {

    decairPontos(); // Chama uma função externa para manipular os pontos (não definida aqui)

    let objPergunta = document.getElementById(`pergunta-${perguntaAtual}`);

    // Verifica se a pergunta existe, caso contrário, exibe erro
    if (!objPergunta) {
        console.error(`Elemento com o ID pergunta-${perguntaAtual} não encontrado`);
        return;
    }

    // Seleciona os elementos da pergunta atual (enunciado e alternativas)
    let enunciado = document.querySelector(`#pergunta-${perguntaAtual} .titulo-pergunta`);
    let alternativaA = document.querySelector(`#pergunta-${perguntaAtual} .alternativa-a`);
    let alternativaB = document.querySelector(`#pergunta-${perguntaAtual} .alternativa-b`);
    let alternativaC = document.querySelector(`#pergunta-${perguntaAtual} .alternativa-c`);
    let alternativaD = document.querySelector(`#pergunta-${perguntaAtual} .alternativa-d`);

    // Sorteia uma pergunta aleatória da lista de perguntas
    let perguntaSorteada = perguntas[Math.floor(Math.random() * perguntas.length)];

    // Desestrutura a resposta correta e as alternativas incorretas da pergunta sorteada
    let [respostaCorreta, [respostaB, respostaC, respostaD]] = perguntaSorteada.resposta;

    // Cria um array com todas as respostas (correta e incorretas)
    let respostas = [respostaCorreta, respostaB, respostaC, respostaD];

    /**
     * Função que embaralha o array de respostas utilizando o algoritmo Fisher-Yates.
     * @param {Array} array - O array de respostas a ser embaralhado.
     */
    function embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
        }
    }

    // Embaralha as respostas antes de atribuí-las aos botões
    embaralharArray(respostas);

    // Atribui as respostas embaralhadas aos botões de alternativas
    alternativaA.textContent = respostas[0];
    alternativaB.textContent = respostas[1];
    alternativaC.textContent = respostas[2];
    alternativaD.textContent = respostas[3];

    // Define o texto do enunciado da pergunta
    enunciado.textContent = perguntaSorteada.enunciado;

    /**
     * Função que verifica se a alternativa clicada é a correta.
     * @param {Event} event - O evento de clique no botão da alternativa.
     */
    function verificarResposta(event) {
        const botaoClicado = event.target;

        clearInterval(intervalo); // Para o temporizador de contagem de pontos

        // Verifica se o texto da alternativa clicada corresponde à resposta correta
        if (botaoClicado.textContent === respostaCorreta) {
            botaoClicado.style.backgroundColor = 'green'; // Muda a cor para verde se correta
            pontuacaoRodada(pontos.toFixed(2)); // Atualiza a pontuação da rodada

            // Passa para a próxima pergunta após 1 segundo
            setTimeout(() => {
                passarPergunta();
            }, 1000);
        } else {
            botaoClicado.style.backgroundColor = 'red'; // Alternativa errada fica vermelha

            // Chama a função de resposta errada após 1 segundo
            setTimeout(() => {
                respostaErrada();
            }, 1000);
        }
    }

    // Adiciona eventos de clique para verificar as respostas das alternativas
    alternativaA.addEventListener('click', verificarResposta);
    alternativaB.addEventListener('click', verificarResposta);
    alternativaC.addEventListener('click', verificarResposta);
    alternativaD.addEventListener('click', verificarResposta);
}

/**
 * Função que avança para a próxima pergunta ou reinicia o quiz se todas as perguntas forem respondidas.
 */
function passarPergunta() {

    // Oculta a pergunta atual
    document.getElementById('reiniciar-jogo').classList.add('ocultar');
    document.getElementById(`pergunta-${perguntaAtual}`).classList.add('ocultar');
    document.getElementById(`pergunta-${perguntaAtual}`).style.display = 'none';

    // Avança para a próxima pergunta
    perguntaAtual++;

    if (perguntaAtual <= 10) {
        // Exibe a próxima pergunta e continua o sequenciamento
        document.getElementById(`pergunta-${perguntaAtual}`).style.display = 'flex';
        sequenciadorPerguntas();
    } else {
        // Exibe uma mensagem de finalização e reinicia o quiz
        let pontuacaoTotal = somarPontuacaoTotal();
        console.log('pontuação total: ', pontuacaoTotal.toFixed(2));
        alert('Fim do quiz! Clique para reiniciar.');
        reiniciarQuiz();
        zerarPontuacao();
    }
}