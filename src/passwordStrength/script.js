let password = document.getElementById('password');
let power = document.getElementById('power-point');

password.oninput = function () {
   let point = 0;
   let value = password.value;
   let widthPower = ['1%', '25%', '50%', '75%', '100%'];
   let colorPower = ['#d73f40', '#dc6551', '#f2b84f', '#beb952', '#30cec7']
   if (value.length >= 6) {
      let arrayTest = [
         /[0-9]/,
         /[a-z]/,
         /[A-Z]/,
         /[^0-9a-zA-Z]/
      ];
      arrayTest.forEach(item => {
         if (item.test(value)) {
            point = point + 1;
         }
      })

      // if(/[0-9]/.test(value)){
      //    power = point + 1;
      // }
      // if(/[a-z]/.test(value)){
      //    power = power + 1;
      // }
      // if(/[A-Z]/.test(value)){
      //    power = power + 1;
      // }
      // if(/[^0-9a-zA-Z]/.test(value)){
      //    power = power + 1;
      // }

      power.style.width = widthPower[point];
      power.style.backgroundColor = colorPower[point];
   }
   else {
      power.style.width = widthPower[0];
      power.style.backgroundColor = colorPower[0];
   }

   console.log(point);
}
