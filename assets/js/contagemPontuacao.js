/**
 * Função `contagemPontuacao`
 * 
 * Esta função cria um intervalo que decrementa o valor de uma variável em 0.05 a cada segundo
 * e imprime o valor atualizado no console. Quando o valor atinge zero, o intervalo é cancelado
 * e uma mensagem é exibida no console. Além disso, a contagem pode ser interrompida quando 
 * qualquer botão com uma classe específica for clicado.
 * 
 * @function
 * @param {string} botaoClasse - A classe dos botões que, quando clicados, interromperão a contagem.
 * @returns {number} - O identificador do intervalo criado, que pode ser usado para cancelar o intervalo posteriormente.
 * 
 * Exemplo de uso:
 * 
 * // Inicializa a variável global `valor` com um valor inicial
 * let valor = 5;
 * 
 * // Chama a função para iniciar a contagem e associar os botões com a classe "parar-contagem"
 * contagemPontuacao("parar-contagem");
 * 
 * Saída no console:
 * 4.95
 * 4.90
 * 4.85
 * ...
 * "O valor chegou a zero."
 * "A contagem foi interrompida pelo clique no botão."
 */
function contagemPontuacao(botaoClasse) {
    // Define uma variável local para armazenar o valor da contagem
    let valor = 1;

    // Cria um intervalo que decrementa o valor
    let pontuacao = setInterval(() => {
        if (valor >= 0) {
            valor -= 0.05; // Decrementa o valor
            console.log(valor.toFixed(2)); // Exibe o valor no console com 2 casas decimais
        } else {
            clearInterval(pontuacao); // Para o intervalo quando o valor chega a zero
            console.log("O valor chegou a zero."); // Mensagem exibida quando o valor chega a zero
        }
    }, 1000); // Executa a cada 1 segundo (1000 milissegundos)


    // Seleciona todos os botões com a mesma classe
    const botoes = document.querySelectorAll(`.${botaoClasse}`);

    // Adiciona um event listener a cada botão para interromper a contagem
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            clearInterval(pontuacao);
            console.log("A contagem foi interrompida pelo clique em um dos botões.");
        });
    });

    return pontuacao;
}
