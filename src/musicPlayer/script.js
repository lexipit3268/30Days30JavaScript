let progress = document.getElementById('progress');
let song = /** @type {HTMLAudioElement} */ (document.getElementById('song'));
let ctrlIcon = document.getElementById('ctrlIcon');
const songImg = document.querySelector('.song-img');
const playBtn = document.getElementById('play-btn');
const backwordBtn = document.getElementById('backward-btn');
const forwardBtn = document.getElementById('forward-btn');
const loopBtn = document.getElementById('loop-btn');

let rotation = 0;
let isRotating = false;

function rotateImage() {
   if (!isRotating) return;
   rotation += 0.05;
   songImg.style.transform = `rotate(${rotation}deg)`;
   requestAnimationFrame(rotateImage);
}

let currentTime = document.getElementById('currentTime');
let durationTime = document.getElementById('durationTime');

function formatTime(time){
   let minute = Math.floor(time / 60);
   let seconds = Math.floor(time % 60);
   if(seconds < 10) seconds = "0" + seconds;
   return `${minute}:${seconds}`;
}

song.onloadedmetadata = function () {
   progress.max = song.duration;
   progress.value = song.currentTime;
   durationTime.innerText = formatTime(song.duration);
   currentTime.innerHTML = formatTime(song.currentTime);
}

playBtn.addEventListener("click", () => {
   playSong();
})

function playSong() {
   if (ctrlIcon.classList.contains('fa-pause')) {
      song.pause();
      setPausedStatus();
   } else {
      song.play();
      setPlayingStatus();
   }
}

function setPlayingStatus() {
   ctrlIcon.classList.remove('fa-play');
   ctrlIcon.classList.add('fa-pause');
   isRotating = true;
   requestAnimationFrame(rotateImage);
}

function setPausedStatus() {
   ctrlIcon.classList.remove('fa-pause');
   ctrlIcon.classList.add('fa-play');
   isRotating = false;
}


if (song.play()) {
   setPlayingStatus();
   requestAnimationFrame(rotateImage);
   setInterval(() => {
      progress.value = song.currentTime;
      currentTime.innerText = formatTime(song.currentTime);
   }, 250);
}

progress.onchange = function () {
   song.play();
   song.currentTime = progress.value;
   setPlayingStatus();
}

function skipTime(secs) {
   let newtime = song.currentTime + secs;
   if (newtime < 0) newtime = 0;
   if (newtime > song.duration) newtime = song.duration;
   song.currentTime = newtime;
   progress.value = newtime;
}

backwordBtn.addEventListener("click", () => {
   skipTime(-5);
})

forwardBtn.addEventListener("click", () => {
   skipTime(5);
})

let isLooping = false;
loopBtn.addEventListener("click",()=>{
   if(!isLooping){
      song.loop = true;
      loopBtn.classList.add('loop-active');
      isLooping = true;
   } else{
      song.loop = false;
      loopBtn.classList.remove('loop-active');
      isLooping = false;
   }
})
