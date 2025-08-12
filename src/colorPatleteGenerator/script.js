const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateBtn.addEventListener("click", generatePalette);
paletteContainer.addEventListener("click", function(e) {
   if(e.target.classList.contains("copy-btn")){
      const hexValue = e.target.previousElementSibling.textContent;
      navigator.clipboard.writeText(hexValue).then(() => showCopySuccess(e.target)).catch((error) => alert(error));
   } else if(e.target.classList.contains("color")){
      const hexValue = e.target.nextElementSibling.querySelector(".hex-value").textContent;
      navigator.clipboard.writeText(hexValue).then(() => showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn"))).catch((error) => alert(error));
   }
})

function showCopySuccess(element){
   element.classList.remove("far", "fa-copy");
   element.classList.add("fas", "fa-check");
   element.style.color = '#48BB78';

   setTimeout(() => {
      element.classList.add("far", "fa-copy");
      element.classList.remove("fas", "fa-check");
      element.style.color = '#64748b';
   }, 1500);
}

function generatePalette(){
   const colors = [];
   for(let i = 0; i < 5; i++){
      colors.push(generateRandomColor());
   }
   updatePaletteDisplay(colors);
}

function generateRandomColor(){
   const letters = "0123456789ABCDEF";
   let color = "#";
   for(let i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}
function updatePaletteDisplay(colors){
   const colorBoxs = document.querySelectorAll(".color-box");
   colorBoxs.forEach((box,index) => {
      const color = colors[index];
      const colorDiv = box.querySelector(".color");
      const hexValue = box.querySelector(".hex-value");
      colorDiv.style.backgroundColor = color;
      hexValue.textContent = color; 
   })
}
generatePalette();