/**
 * Variável que armazena o identificador do intervalo de tempo criado por `setInterval`.
 * @type {number|undefined}
 */
export let intervalo;

/**
 * Variável que armazena a quantidade de pontos, inicialmente definida como 1.
 * @type {number}
 */
export let pontos = 1; // Inicializa os pontos com 1.

/**
 * Função responsável por diminuir gradualmente o valor de `pontos` em intervalos de 1 segundo.
 * 
 * - Inicializa `pontos` com o valor de 1.
 * - A cada 1 segundo, subtrai 0.05 de `pontos` até que o valor de `pontos` seja menor que 0.
 * - Quando `pontos` atinge um valor menor que 0, o intervalo é limpo com `clearInterval`.
 * - A função exibe o valor de `pontos` com 2 casas decimais no console a cada iteração.
 * 
 * O intervalo é armazenado na variável `intervalo` para que possa ser controlado externamente, se necessário.
 *
 * @function decairPontos
 */
export function decairPontos() {
    // Inicializa a quantidade de pontos
    pontos = 1;

    intervalo = setInterval(function() {
        // Verifica se os pontos ainda são válidos
        if (pontos >= 0) {
            pontos -= 0.05; // Reduz a pontuação
            console.log(pontos.toFixed(2)); // Exibe os pontos com 2 casas decimais no console
        } else {
            clearInterval(intervalo); // Limpa o intervalo quando os pontos ficam negativos
        }
    }, 1000);   
}
