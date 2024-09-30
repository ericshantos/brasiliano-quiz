/**
 * Exibe uma seção específica e oculta as demais após um atraso de 1 segundo.
 *
 * Esta função percorre todas as seções com a classe 'sections', ocultando-as ao remover a classe 'mostrar',
 * e, após um atraso de 1 segundo (1000 milissegundos), exibe a seção correspondente ao ID passado como argumento,
 * adicionando a classe 'mostrar'.
 *
 * O fluxo de execução é o seguinte:
 * 1. Todas as seções com a classe 'sections' são ocultadas.
 * 2. Após 1 segundo, a seção com o ID fornecido é exibida.
 *
 * @function mostrarSection
 * @param {string} id - O ID da seção que será exibida.
 * @returns {void} Esta função não retorna nenhum valor.
 *
 * @example
 * // Para exibir a seção com ID 'secao1':
 * mostrarSection('secao1');
 */
function mostrarSection(id) {
    // Seleciona todos os elementos com a classe 'sections'
    let secoes = document.querySelectorAll('.sections');

    // Adiciona um atraso de 1 segundo antes de executar a lógica de exibição
    setTimeout(() => {
        // Itera sobre todas as seções, removendo a classe 'mostrar' para ocultá-las
        secoes.forEach(function(secao) {
            secao.classList.remove('mostrar');
        });

        // Seleciona a seção pelo ID e adiciona a classe 'mostrar' para exibi-la
        let mostrarSecao = document.getElementById(id);
        if (mostrarSecao) {
            mostrarSecao.classList.add('mostrar');
        }
    }, 1000);
}
