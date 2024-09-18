import {perguntas} from "./questions.js";

document.addEventListener('DOMContentLoaded', sequenciadorPerguntas);



function sequenciadorPerguntas() {
    let objPergunta = document.getElementById(`pergunta-1`);

    if (!objPergunta) {
        console.error(`Elemento com o ID pergunta-1 não encontrado`);
        return;
    }

    let enunciado = document.querySelector('#pergunta-1 .titulo-pergunta');
    let alternativaA = document.querySelector(`#pergunta-1 .alternativa-a`);
    let alternativaB = document.querySelector(`#pergunta-1 .alternativa-b`);
    let alternativaC = document.querySelector(`#pergunta-1 .alternativa-c`);
    let alternativaD = document.querySelector(`#pergunta-1 .alternativa-d`);

    // Pega o elemento aleatório
    let perguntaSorteada = perguntas[Math.floor(Math.random() * perguntas.length)];

    let [respostaA, [respostaB, respostaC, respostaD]] = perguntaSorteada.resposta;

    // Array com as respostas
    let respostas = [respostaA, respostaB, respostaC, respostaD];

    // Função para embaralhar o array de respostas (algoritmo de Fisher-Yates)
    function embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
        }
    }

    // Embaralha o array de respostas
    embaralharArray(respostas);


    // Atribui as respostas embaralhadas aos botões
    alternativaA.textContent = respostas[0];
    alternativaB.textContent = respostas[1];
    alternativaC.textContent = respostas[2];
    alternativaD.textContent = respostas[3];

    enunciado.textContent = perguntaSorteada.enunciado;
}