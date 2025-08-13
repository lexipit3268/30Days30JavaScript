const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const lapBtn = document.getElementById("lap");
const resetBtn = document.getElementById("reset");
const display = document.getElementById("display");
const laps = document.getElementById("laps");

// let timerId = null;
// let startTime = 0;
// let elapsed = 0;
// let lastLapTotal = 0;

function disableButton(button){
   button.disabled = true;
   button.classList.add("disabled");
}

function enbleButton(button){
   button.disabled = false;
   button.classList.remove("disabled");
}

function initState(){
   disableButton(pauseBtn);
   disableButton(lapBtn);
   enbleButton(startBtn);
   enbleButton(resetBtn);
}

initState();