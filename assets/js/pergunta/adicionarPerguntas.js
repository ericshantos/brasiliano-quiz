import { perguntas } from "./perguntas.js";
import respostaErrada from "../transicao/respostaErrada.js";
import { intervalo, decairPontos, pontos } from "../contagemPontuacao/cronometro.js";
import { pontuacaoRodada, zerarPontuacao } from "../contagemPontuacao/calcularPontuacao.js";
import exibirPontuacao from "../transicao/exibirPontuacao.js";
import { perguntaSorteadas, perguntaRepetida, zerarPerguntas } from "../transicao/perguntasPassadas.js";

/**
 * Este script gerencia a lógica do quiz, incluindo a configuração dos botões
 * de reiniciar e iniciar, o fluxo das perguntas, a lógica de respostas e
 * a pontuação. As perguntas são exibidas de forma aleatória e as respostas
 * são embaralhadas antes de serem apresentadas ao usuário.
 */

// Define o botão de reiniciar o quiz, vinculado à função reiniciarQuiz
document.getElementById('btn-recomecar').addEventListener('click', reiniciarQuiz);

// Define o botão de iniciar o quiz, vinculado à função sequenciadorPerguntas
document.getElementById('btn-iniciar-quiz').addEventListener('click', sequenciadorPerguntas);

let nomeJogador;

// Caputura o nome do usuário
document.addEventListener('DOMContentLoaded', () => {
    nomeJogador = prompt("Qual é o seu nome?");
    document.getElementById('nome-usuario').textContent = nomeJogador;
});

let perguntaAtual = 1; // Controla o índice da pergunta atual

/**
 * Função para reiniciar o quiz.
 * - Reseta o contador de perguntas.
 * - Oculta todas as perguntas e redefine o estilo das alternativas.
 * - Exibe a primeira pergunta e inicia o sequenciamento das perguntas.
 */
function reiniciarQuiz() {
    perguntaAtual = 1; // Reinicia a contagem das perguntas

    // Seleciona todas as perguntas e alternativas para ocultar e resetar o estilo
    let rodadas = document.querySelectorAll('pergunta');
    let alternativas = document.querySelectorAll('.pergunta ul li button');

    setTimeout(() => {
        // Oculta todas as perguntas
        rodadas.forEach(function(rodada) {
            rodada.classList.add('ocultar');
        });

        // Redefine o estilo de fundo das alternativas
        alternativas.forEach(function(alternativa) {
            alternativa.style.backgroundColor = 'white';
        });

        // Oculta a tela de reinício e exibe a primeira pergunta
        document.getElementById('reiniciar-jogo').classList.add('ocultar');
        document.getElementById('pergunta-1').style.display = 'flex';

        // Inicia o sequenciamento das perguntas
        sequenciadorPerguntas();

        zerarPontuacao(); // Reseta a pontuação
        zerarPerguntas(); // Reseta o histórico de perguntas
    }, 1000);
}

/**
 * Função responsável por sortear uma pergunta, embaralhar as alternativas e
 * configurar a lógica de verificação das respostas.
 */
function sequenciadorPerguntas() {
    let perguntaSorteada;
    let idPergunta;

    do {
        // Sorteia uma pergunta aleatória da lista de perguntas
        perguntaSorteada = perguntas[Math.floor(Math.random() * perguntas.length)];
    
        idPergunta = perguntaSorteada.id;
        
        // Verifica se a pergunta já foi sorteada antes de adicioná-la ao histórico
        if (!perguntaRepetida(idPergunta)) {
            perguntaSorteadas(idPergunta); // Adiciona ao histórico apenas se não for repetida
            break;
        }
    
    } while (true); // Continua até encontrar uma pergunta não repetida
    
    // Seleciona os elementos da pergunta atual (enunciado e alternativas)
    let enunciado = document.querySelector(`#pergunta-${perguntaAtual} .titulo-pergunta`);
    let alternativaA = document.querySelector(`#pergunta-${perguntaAtual} .alternativa-a`);
    let alternativaB = document.querySelector(`#pergunta-${perguntaAtual} .alternativa-b`);
    let alternativaC = document.querySelector(`#pergunta-${perguntaAtual} .alternativa-c`);
    let alternativaD = document.querySelector(`#pergunta-${perguntaAtual} .alternativa-d`);

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

    decairPontos(); // Chama uma função externa para manipular os pontos

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
        exibirPontuacao(); // Exibe a pontuação final se todas as perguntas forem respondidas
    }
}
