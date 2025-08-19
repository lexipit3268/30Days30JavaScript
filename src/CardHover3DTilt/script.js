const loveBtn = document.getElementById("love");
const bookmarkBtn = document.getElementById("bookmark");
const card = document.querySelector(".card");
let maxTilt = 25;

function clickBtn(button) {
   if (button.classList.contains("fa-solid")) {
      button.classList.remove("fa-solid");
      button.classList.add("fa-regular");
   } else {
      button.classList.add("fa-solid");
      button.classList.remove("fa-regular");
   }
}

loveBtn.onclick = () => {
   clickBtn(loveBtn);
};

bookmarkBtn.onclick = () => {
   clickBtn(bookmarkBtn);
};

card.addEventListener('mousemove', (e) => {
   const r = card.getBoundingClientRect();
   const cx = r.left + r.width / 2;
   const cy = r.top + r.height / 2;
   const dx = (e.clientX - cx) / (r.width / 2);   
   const dy = (e.clientY - cy) / (r.height / 2);  

   const ry = dx * maxTilt;
   const rx = -dy * maxTilt;
   card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;

   const ox = -ry * 1.2, oy = rx * 1.2;
   card.style.boxShadow = `${ox}px ${oy}px 30px rgba(0,0,0,0.2)`;
});

card.addEventListener('mouseenter', () => {
  card.classList.add('hover');
});

card.addEventListener('mouseleave', () => {
  card.classList.remove('hover');
  card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
  card.style.boxShadow = '0 10px 20px rgba(0,0,0,.15)';
});