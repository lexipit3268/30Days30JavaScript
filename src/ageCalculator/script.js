let result = document.getElementById("result");
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
   let birthDay = new Date(userInput.value);

   let d1 = birthDay.getDate();
   let m1 = birthDay.getMonth() + 1;
   let y1 = birthDay.getFullYear();

   let today = new Date();

   let d2 = today.getDate();
   let m2 = today.getMonth() + 1;
   let y2 = today.getFullYear();

   let d3, m3, y3;

   y3 = y2 - y1;
   if (m2 >= m1) {
      m3 = m2 - m1;
   } else {
      y3--;
      m3 = 12 + m2 - m1;
   }

   if (d2 >= d1) {
      d3 = d2 - d1;
   } else {
      m3--;
      d3 = getDayInMonth(y1, m1) + d2 - d1;
   }

   if (m3 < 0) {
      m3 = 11;
      y3--;
   }
   console.log(y3);
   if (isNaN(y3) || isNaN(m3) || isNaN(d3)) {
      result.innerHTML = "Invalid date! Please enter a valid birth date.";
   } else {
      result.innerHTML = `<h3>Congratulation!</h3><br>You have been lived <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days on Earth`;
   }

}

function getDayInMonth(year, month) {
   return new Date(year, month, 0).getDate();
}