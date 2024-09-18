function mostrarSection(id) {
    let secoes = document.querySelectorAll('.sections');

    secoes.forEach(function(secao){
        secao.classList.remove('mostrar-section');
    });

    console.log('ta funcionando');

    let mostrarSecao = document.getElementById(id);
    mostrarSecao.classList.add('mostrar-section');
}