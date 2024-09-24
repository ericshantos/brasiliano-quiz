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
 */
export function pontuacaoRodada(ponto) {
    pontuacao.push(ponto);
    console.log(pontuacao);
}

/**
 * Zera o array `pontuacao`, removendo todos os itens.
 */
export function zerarPontuacao() {
    pontuacao.splice(0, pontuacao.length);
}

/**
 * Calcula a soma total de todas as pontuações armazenadas no array `pontuacao`.
 * Converte os valores de string para número racional usando `parseFloat()`.
 * 
 * @returns {number} - Soma total das pontuações.
 */
export function somarPontuacaoTotal() {
    return pontuacao.reduce((acumulador, valorAtual) => acumulador + parseFloat(valorAtual), 0);
}
