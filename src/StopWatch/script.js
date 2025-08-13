const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const lapBtn = document.getElementById("lap");
const resetBtn = document.getElementById("reset");
const display = document.getElementById("display");
const laps = document.getElementById("laps");

let timerId = null;
let startTime = 0;
let elapsed = 0;
let lapCount = 0;

function disableButton(button) {
   button.disabled = true;
   button.classList.add("disabled");
}

function enableButton(button) {
   button.disabled = false;
   button.classList.remove("disabled");
}

function formatMs(totalMs) {
   let minutes = String(Math.floor(totalMs / 60000)).padStart(2, '0');
   let seconds = String(Math.floor((totalMs % 60000) / 1000)).padStart(2, '0');
   let centi = String(Math.floor((totalMs % 1000) / 10)).padStart(2, '0');

   return `${minutes}:${seconds}.${centi}`;
}

function renderDisplay() {
   display.textContent = formatMs(elapsed);
}

function initState() {
   disableButton(pauseBtn);
   disableButton(lapBtn);
   enableButton(startBtn);
   enableButton(resetBtn);
   renderDisplay();
}

function update() {
   const totalMs = (Date.now() - startTime);
   display.textContent = formatMs(totalMs);
}

initState();

startBtn.addEventListener("click", () => {
   if (timerId !== null) {
      return;
   }
   disableButton(startBtn);
   enableButton(pauseBtn);
   enableButton(lapBtn);
   startTime = Date.now() - elapsed;
   timerId = setInterval(() => {
      update();
   }, 50);
})

pauseBtn.addEventListener("click", () => {
   elapsed = Date.now() - startTime;
   if (timerId !== null) {
      clearInterval(timerId);
      renderDisplay();
      timerId = null;
      enableButton(startBtn);
      disableButton(lapBtn);
      disableButton(pauseBtn);
   }
})

resetBtn.addEventListener("click", () => {
   if (timerId !== null) {
      clearInterval(timerId);
      timerId = null;
   }
   elapsed = 0;
   startTime = 0;
   lapCount = 0;
   laps.innerHTML = "";
   initState();
   renderDisplay();
})

lapBtn.addEventListener("click", () => {
   if (timerId === null) return;
   const totalNow = Date.now() - startTime;
   const li = document.createElement("li");
   lapCount++;
   li.textContent = `Lap ${lapCount}: ${formatMs(totalNow)}`;
   laps.appendChild(li);

   if (lapCount > 10) {
      alert("Đã đạt  giới hạn tối đa!");
      resetBtn.click();
   }
})

