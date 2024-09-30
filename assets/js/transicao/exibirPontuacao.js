import { somarPontuacaoTotal } from "../contagemPontuacao/calcularPontuacao.js";

/**
 * Exibe a seção de pontuação e oculta as demais seções.
 *
 * Esta função é responsável por ocultar todas as seções com a classe 'sections' 
 * e exibir a seção correspondente à pontuação. Além disso, ela calcula e exibe
 * a pontuação total formatada com duas casas decimais.
 *
 * O fluxo de execução é o seguinte:
 * 1. Todas as seções com a classe 'sections' são ocultadas ajustando o estilo `display` para 'none'.
 * 2. A seção de pontuação é exibida ajustando o estilo `display` para 'flex'.
 * 3. A pontuação total é calculada usando a função `somarPontuacaoTotal` e exibida no elemento com ID 'pontuacao-total'.
 *
 * @function exibirPontuacao
 * @returns {void} Esta função não retorna nenhum valor.
 *
 * @example
 * // Para exibir a pontuação ao final do jogo:
 * exibirPontuacao();
 */
export default function exibirPontuacao() {
    // Seleciona todas as seções com a classe 'sections'
    let sections = document.querySelectorAll('.sections');

    // Oculta todas as seções
    sections.forEach(function(section) {
        section.style.display = 'none'; 
    });

    // Seleciona a seção de pontuação e a exibe
    let exibirPontuacao = document.getElementById('pontuacao');
    exibirPontuacao.style.display = 'flex';

    // Seleciona o elemento de pontuação total e exibe o valor calculado
    let pontuacaoTotal = document.getElementById('pontuacao-total');
    pontuacaoTotal.textContent = somarPontuacaoTotal().toFixed(2);
}
