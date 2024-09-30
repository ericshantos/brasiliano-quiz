import { somarPontuacaoTotal } from "../contagemPontuacao/calcularPontuacao.js";
import { listaPerguntas } from "./perguntasPassadas.js";

export default function exibirPontuacao() {

    let sections = document.querySelectorAll('.sections');

    sections.forEach(function(section) {
        section.style.display = 'none'; 
    });

    let exibirPontuacao = document.getElementById('pontuacao');
    exibirPontuacao.style.display = 'flex';

    let pontuacaoTotal = document.getElementById('pontuacao-total');
    pontuacaoTotal.textContent = somarPontuacaoTotal().toFixed(2);
}