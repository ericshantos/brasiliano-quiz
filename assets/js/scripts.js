/**
 * Adiciona um evento de clique a todos os botões com a classe '.btn-comum'. 
 * Ao clicar em um botão, sua posição é temporariamente ajustada, criando um efeito de leve deslocamento.
 * 
 * O efeito acontece em dois estágios:
 * 1. O botão é redefinido para sua posição original imediatamente após o clique.
 * 2. Após 150 milissegundos, o botão é movido levemente para cima e para a esquerda.
 *
 * @example
 * // Aplicar o efeito em todos os botões com a classe 'btn-comum'
 * let botoes = document.querySelectorAll('.btn-comum');
 * botoes.forEach(botao => {
 *    botao.addEventListener('click', function(event) {
 *       // Lógica da animação
 *    });
 * });
 * 
 * @param {NodeList} botoes - Lista de elementos do DOM com a classe '.btn-comum'.
 * @param {Object} event - Objeto de evento passado pelo listener do clique.
 * @param {HTMLElement} botaoSelecionado - O elemento de botão clicado que sofrerá a animação.
 */
let botoes = document.querySelectorAll('.btn-comum');

const audio = document.getElementById('botao-clicando');

botoes.forEach(botao => {
    botao.addEventListener('click', function(event) {

        let botaoSelecionado = event.target;

        // Volta o botão para a posição original
        botaoSelecionado.style.transform = 'translateX(0px) translateY(0px)';

        audio.play();
        
        // Após 200 milissegundos, move o botão para uma nova posição
        setTimeout(() => {
            botaoSelecionado.style.transform = 'translateX(-5px) translateY(-5px)';
        }, 100);
    });
});
