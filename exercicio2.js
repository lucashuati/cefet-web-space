const controleSlide = function(evt) {
    const controle = evt.currentTarget;
    if(controle.id == 'proximo') {
        atualIndex = (atualIndex + 1) % todasAsImagens.length;
    } else {
        atualIndex = (atualIndex + (todasAsImagens.length - 1)) % todasAsImagens.length;
    }
    img.src = servidorDasImagens + todasAsImagens[atualIndex];
}

let atualIndex = 0;
const img = document.getElementById('slide');
const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
    todasAsImagens = [
        'philae-parts.jpg',
        'philae-rosetta.jpg',
        'philae-separation.jpg',
        'philae-67-picture.jpg',
        'philae-collecting.jpg'
    ];

const controles = document.querySelectorAll(".controle");
controles.forEach(function(botao) {
    botao.addEventListener("click", controleSlide)
});
