/**
 * Oculta todas as perguntas do quiz e exibe o botão de "tentar novamente".
 *
 * Esta função é responsável por encontrar todas as perguntas exibidas no quiz,
 * ocultá-las e em seguida exibir o botão de "tentar novamente" para que o 
 * usuário possa reiniciar o jogo.
 *
 * @function respostaErrada
 * @returns {void} Não retorna nenhum valor.
 */
export default function respostaErrada() {
    // Seleciona todos os elementos com a classe 'pergunta' dentro do elemento com ID 'quiz'
    let perguntas = document.querySelectorAll('#quiz .pergunta');

    // Itera sobre todas as perguntas, ocultando cada uma delas
    perguntas.forEach(function(perguntaErrada) {
        perguntaErrada.style.display = 'none'; 
    });

    // Seleciona o botão de reiniciar o jogo pelo seu ID e remove a classe 'ocultar' para exibi-lo
    let tentarNovamente = document.getElementById('reiniciar-jogo');
    tentarNovamente.classList.remove('ocultar');
};
