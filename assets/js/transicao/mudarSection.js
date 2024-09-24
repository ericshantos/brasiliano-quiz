/**
 * Exibe uma seção específica e oculta as demais.
 *
 * Esta função percorre todas as seções com a classe 'sections', oculta-as removendo a classe 'mostrar',
 * e, em seguida, exibe a seção correspondente ao ID passado como argumento, adicionando a classe 'mostrar'.
 *
 * @function mostrarSection
 * @param {string} id - O ID da seção que será exibida.
 * @returns {void} Não retorna nenhum valor.
 */
function mostrarSection(id) {
    // Seleciona todos os elementos com a classe 'sections'
    let secoes = document.querySelectorAll('.sections');

    // Itera sobre todas as seções, removendo a classe 'mostrar' para ocultá-las
    secoes.forEach(function(secao) {
        secao.classList.remove('mostrar');
    });

    // Exibe no console a mensagem de teste para indicar que a função está funcionando
    console.log('ta funcionando');

    // Seleciona a seção pelo ID e adiciona a classe 'mostrar' para exibi-la
    let mostrarSecao = document.getElementById(id);
    mostrarSecao.classList.add('mostrar');
}
