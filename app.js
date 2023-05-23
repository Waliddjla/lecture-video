const video = document.querySelector('.video');
const btnplaypause = document.getElementById('play-pause');
const img = document.querySelector('#play-pause img');
const barreOrange = document.querySelector('.barre-orange');
const juice =  document.querySelector('.juice');
const mutebtn = document.getElementById('mute');
const fullescreen =  document.getElementById('fullscreen');
const volumeSlider =  document.getElementById('volume-slider');

btnplaypause.addEventListener('click', togglePlaypause);
video.addEventListener('click', togglePlaypause);

function togglePlaypause(){
    if (video.paused) {
        img.src = "ressources/pause.svg";
        video.play();
        
    } else {
        img.src = "ressources/play.svg";
        video.pause();

    }
}

video.addEventListener('timeupdate', () => {
    let juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 +"%";

    if(video.ended) {
        img.src = "ressources/play.svg";
    }
})
volumeSlider.addEventListener('change', () => {
    video.volume = volumeSlider.value / 100;
})

mutebtn.addEventListener('click', () => {

    if (video.muted) {
        video.muted = false;
        mutebtn.innerText = "Mute";    
    } else {
        video.muted = true;
        mutebtn.innerText = "unmuted";
    }
})

let rect = barreOrange.getBoundingClientRect();
let largeur = rect.width;

barreOrange.addEventListener('click', (e) => {
    let x = e.clientX - rect.left;

    let widthPercent = ((x*100/largeur));
    let durationVideo = video.duration;

    video.currentTime = durationVideo * (widthPercent/100);
})

window.addEventListener('resize', () => {
    let rect = barreOrange.getBoundingClientRect();
    let largeur = rect.width;
})
video.addEventListener('dblclick', () => {
    video.requestFullscreen();
})

fullescreen.addEventListener('click', () => {
    video.requestFullscreen();
})