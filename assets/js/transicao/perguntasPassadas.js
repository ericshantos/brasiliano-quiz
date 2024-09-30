// Array que armazena as perguntas já sorteadas
let perguntasPassadas = [];

/**
 * Adiciona o ID de uma pergunta ao array de perguntas passadas.
 * 
 * Esta função registra uma pergunta como já sorteada, armazenando seu ID no array `perguntasPassadas`.
 *
 * @function perguntaSorteadas
 * @param {string|number} idPergunta - O ID da pergunta a ser armazenada.
 * @returns {void} Não retorna nenhum valor.
 *
 * @example
 * perguntaSorteadas(3); // Armazena o ID 3 como pergunta sorteada
 */
export function perguntaSorteadas(idPergunta) {
    perguntasPassadas.push(idPergunta);
}

/**
 * Retorna a lista de IDs de perguntas já sorteadas.
 * 
 * Esta função retorna o array `perguntasPassadas`, que contém os IDs das perguntas sorteadas até o momento.
 *
 * @function listaPerguntas
 * @returns {Array} Um array contendo os IDs das perguntas já sorteadas.
 *
 * @example
 * let perguntas = listaPerguntas(); // Retorna todas as perguntas sorteadas
 */
export function listaPerguntas() {
    return perguntasPassadas;
}

/**
 * Verifica se uma pergunta já foi sorteada.
 * 
 * Esta função verifica se o ID de uma pergunta já está presente no array `perguntasPassadas`, indicando se ela foi sorteada anteriormente.
 *
 * @function perguntaRepetida
 * @param {string|number} idPergunta - O ID da pergunta a ser verificada.
 * @returns {boolean} Retorna `true` se a pergunta já foi sorteada, `false` caso contrário.
 *
 * @example
 * let repetida = perguntaRepetida(3); // Retorna true se a pergunta com ID 3 já foi sorteada
 */
export function perguntaRepetida(idPergunta) {
    return perguntasPassadas.includes(idPergunta);
}

/**
 * Reseta a lista de perguntas sorteadas.
 * 
 * Esta função limpa o array `perguntasPassadas`, removendo todos os IDs de perguntas armazenados, permitindo que o sorteio recomece do zero.
 *
 * @function zerarPerguntas
 * @returns {void} Não retorna nenhum valor.
 *
 * @example
 * zerarPerguntas(); // Zera a lista de perguntas sorteadas
 */
export function zerarPerguntas() {
    perguntasPassadas.splice(0, perguntasPassadas.length);
}
