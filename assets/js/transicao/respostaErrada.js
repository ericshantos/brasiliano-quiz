/**
 * Oculta todas as perguntas do quiz e exibe o botão de "tentar novamente".
 *
 * Esta função é responsável por localizar todas as perguntas exibidas no quiz,
 * ocultá-las e, em seguida, exibir o botão de "tentar novamente" para que o 
 * usuário possa reiniciar o jogo.
 *
 * O processo inclui:
 * 1. Seleção de todas as perguntas no quiz (elementos com a classe 'pergunta').
 * 2. Ocultação de cada uma dessas perguntas, ajustando o estilo `display`.
 * 3. Exibição do botão de reinício, removendo a classe 'ocultar' para torná-lo visível.
 *
 * @function respostaErrada
 * @returns {void} Esta função não retorna nenhum valor.
 *
 * @example
 * // Exemplo de uso dentro do fluxo do quiz quando o usuário responde incorretamente:
 * respostaErrada();
 */
export default function respostaErrada() {
    // Seleciona todos os elementos com a classe 'pergunta' dentro do elemento com ID 'quiz'
    let perguntas = document.querySelectorAll('#quiz .pergunta');

    // Itera sobre todas as perguntas, ocultando cada uma delas ajustando o estilo 'display'
    perguntas.forEach(function(perguntaErrada) {
        perguntaErrada.style.display = 'none'; 
    });

    // Seleciona o botão de reiniciar o jogo pelo ID e remove a classe 'ocultar' para exibi-lo
    let tentarNovamente = document.getElementById('reiniciar-jogo');
    tentarNovamente.classList.remove('ocultar');
};