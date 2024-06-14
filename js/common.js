const loader = document.querySelector('.prloader');
const loaderSpinner = document.querySelector('.loader-spinner');
const loaderBtn = document.querySelector('.prloader-button');
const loaderback = document.querySelectorAll('.loader-back')
const musicBack = document.querySelector('.music')
const music = document.getElementById('musicControl')
let current = false;

function playpause(element) {
    const audio = element.querySelector('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

window.addEventListener('load',function(){
    gsap.to(loaderback,{
        rotate: 360,
        duration: 5,
        repeat: -1,
        ease:Linear.easeNone
    })
    gsap.to(loaderback,{
        scale: 1.4,
        opacity: 1,
        duration: 3,
    })
    gsap.to(loaderBtn,{
        opacity: 1
    })
    gsap.to(loaderSpinner,{
        opacity: 0
    })
})