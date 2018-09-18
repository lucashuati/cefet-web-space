const hasClass = function (dom, className) {
    const classList = dom.className.split(' ');
    return classList.find(function(element) { return element === className });
}
const expandeButton = function (evt) {
    const botao = evt.currentTarget;
    const paragrafo = botao.parentNode;
    if(hasClass(paragrafo, 'expandido')) {
        paragrafo.className = '';
        botao.innerHTML = '+';
    } else {
        paragrafo.className = 'expandido';
        botao.innerHTML = '-';
    }
}

const botoes = document.querySelectorAll(".botao-expandir-retrair");
botoes.forEach(function(botao) {
    botao.addEventListener("click", expandeButton)
});
