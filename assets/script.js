var slide = document.querySelector('.slideshow');
var images = [
    './assets/gojo.webp',
    './assets/subuxa.jpg',
    './assets/toji.jpg'
];
var time = 2000; // 2 segundos
var count = 0;

function moveSlideShow() {
    slide.src = images[count];

    if (count < images.length - 1) {
        count++;
    } else {
        count = 0;
    }

    setTimeout(moveSlideShow, time); // Corrigido para chamar a função correta
}

window.onload = moveSlideShow; // Inicia o slideshow quando a página carrega
