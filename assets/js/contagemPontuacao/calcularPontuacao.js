/**
 * Array para armazenar a pontuação de cada rodada.
 * @type {Array<number>}
 */
let pontuacao = [];

/**
 * Adiciona a pontuação de uma rodada ao array `pontuacao`.
 * Exibe o array atualizado no console.
 * 
 * @param {number} ponto - Pontuação da rodada a ser adicionada.
 * @example
 * // Adiciona 10 pontos à pontuação da rodada
 * pontuacaoRodada(10);
 */
export function pontuacaoRodada(ponto) {
    pontuacao.push(ponto); // Adiciona o ponto ao array
    console.log(pontuacao); // Exibe o array atualizado no console
}

/**
 * Zera o array `pontuacao`, removendo todos os itens.
 * 
 * @example
 * // Zera a pontuação
 * zerarPontuacao();
 */
export function zerarPontuacao() {
    pontuacao.splice(0, pontuacao.length); // Remove todos os itens do array
}

/**
 * Calcula a soma total de todas as pontuações armazenadas no array `pontuacao`.
 * Converte os valores de string para número racional usando `parseFloat()`.
 * 
 * @returns {number} - Soma total das pontuações.
 * @example
 * // Calcula a soma total das pontuações
 * const total = somarPontuacaoTotal();
 */
export function somarPontuacaoTotal() {
    return pontuacao.reduce((acumulador, valorAtual) => acumulador + parseFloat(valorAtual), 0); // Calcula a soma total
}