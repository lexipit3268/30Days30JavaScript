let userInput = document.getElementById("user-input");
const guessBtn = document.getElementById("guess-btn");
const result = document.getElementById("result");
const attemps = document.getElementById("attemps");

let target;
let maxAttemp = 10;
let remainAttemp = maxAttemp;

function initGame() {
   target = Math.floor(Math.random() * 100) + 1;
   console.log(target);
   userInput.value = "";
   remainAttemp = maxAttemp;
   attemps.innerHTML = `Lượt còn lại: ${remainAttemp}`;
}

function resetGame() {
   initGame();
   setTimeout(() => {
      if (result.innerHTML.length != 0) {
         result.innerHTML = "Đã reset trò chơi";
      }
      setTimeout(() => {
         result.innerHTML = "";
      }, 2000);
   }, 2000);
}

resetGame();

guessBtn.addEventListener("click", () => {
   const input = parseInt(userInput.value);

   if (isNaN(input) || input < 1 || input > 100) {
      result.innerHTML = "Vui lòng nhập số từ 1 đến 100!";
      return;
   }

   if (input < target) {
      result.innerHTML = "Nhỏ hơn mục tiêu";
      remainAttemp--;
   } else if (input > target) {
      result.innerHTML = "Lớn hơn mục tiêu";
      remainAttemp--;
   } else if (input === target) {
      result.innerHTML = "Chúc mừng, bạn đã đoán đúng!";
      resetGame();
      return;
   } else {
      result.innerHTML = "Vui lòng nhập số hợp lệ!";
   }

   attemps.innerHTML = `Lượt còn lại: ${remainAttemp}`;

   if (remainAttemp <= 0) {
      result.innerHTML = `Bạn đã thua! Số đúng là ${target}`;
      resetGame();
   }
});