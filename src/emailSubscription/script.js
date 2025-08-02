const scriptURL = 'https://script.google.com/macros/s/AKfycbzqgG6Uy96nsRJonEo75NeIrtHOSSfx3fjWiGIKxQ7ofWPF_xDJr8w4cVRX8wP240G1/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');
const sheetView = document.getElementById('sheet-view');
const sheetUrl = 'https://docs.google.com/spreadsheets/d/1K3DNSM69yZuxUxCQetJea8eIlnAO5QXVk9iTiBMN4rc/edit?usp=sharing';
const button = form.querySelector('button');

form.addEventListener('submit', e => {
   e.preventDefault();
   msg.innerHTML = 'Sending...';
   sheetView.innerHTML = '';
   button.disabled = true;

   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
         msg.innerHTML = 'Thank you for Subscribing!';
         sheetView.innerHTML = `Xem dữ liệu tại <a href="${sheetUrl}" target="_blank" style="color: #fff; text-decoration: underline;">Google Sheet</a>`;
         setTimeout(() => {
            msg.innerHTML = '';
         }, 5000);
         form.reset();
         button.disabled = false;
      })
      .catch(error => {
         console.error('Error!', error.message);
         msg.innerHTML = 'Something went wrong!';
         sheetView.innerHTML = '';
         button.disabled = false;
      });
});

