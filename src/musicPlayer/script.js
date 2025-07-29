let progress = document.getElementById('progress');
let song = /** @type {HTMLAudioElement} */ (document.getElementById('song'));
let ctrlIcon = document.getElementById('ctrlIcon');
const songImg = document.querySelector('.song-img');
const playBtn = document.getElementById('play-btn');
const backwordBtn = document.getElementById('backward-btn');
const forwardBtn = document.getElementById('forward-btn');

let rotation = 0;
let isRotating = false;

function rotateImage(){
   if(!isRotating) return;
   rotation+=0.05;
   songImg.style.transform = `rotate(${rotation}deg)`;
   requestAnimationFrame(rotateImage);
}

song.onloadedmetadata = function () {
   progress.max = song.duration;
   progress.value = song.currentTime;
}

playBtn.addEventListener("click", () => {
   playSong();
})

function playSong() {
   if (ctrlIcon.classList.contains('fa-pause')) {
      song.pause();
      ctrlIcon.classList.remove('fa-pause');
      ctrlIcon.classList.add('fa-play');
      isRotating = false;
   } else {
      song.play();
      ctrlIcon.classList.remove('fa-play');
      ctrlIcon.classList.add('fa-pause');
      isRotating = true;
      requestAnimationFrame(rotateImage);
   }
}

if (song.play()) {
   setInterval(() => {
      progress.value = song.currentTime;
   }, 250);
}

progress.onchange = function () {
   song.play();
   song.currentTime = progress.value;
   ctrlIcon.classList.remove('fa-play');
   ctrlIcon.classList.add('fa-pause');
}

backwordBtn.addEventListener("click",()=>{
   skipTime(-5);
})

forwardBtn.addEventListener("click",()=>{
   skipTime(5);
})

function skipTime(secs){
   let newtime = song.currentTime + secs;
   if(newtime < 0) newtime = 0;
   if(newtime > song.duration) newtime = song.duration;
   song.currentTime = newtime;
   progress.value = newtime;
}