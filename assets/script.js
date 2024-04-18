var slide = document.querySelector('.slideshow');
var images = [
    './assets/gojo.webp',
    './assets/subuxa.jpg',
    './assets/toji.jpg',
];
var time = 2000;
var count = 0;

function moveSlideShow() {
    slide.src = images[count];

    if (count < images.length - 1) {
        count++;
    } else {
        count = 0;
    }

    setTimeout(moveSlideShow, time);
}

window.onload = moveSlideShow;
