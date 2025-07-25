const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-btn");
const tweetBtn = document.getElementById("tweet-btn");
async function getQuote(url) {
   const response = await fetch(url);
   var data = await response.json();
   quote.innerHTML = data.content;
   author.innerHTML = data.author;
} 

newQuoteBtn.addEventListener("click", ()=>{
   getQuote(api_url);
})

tweetBtn.addEventListener("click", function(){
   window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ----by " + author.innerHTML, "Tweet Windows", "width=700, height=350");
})

getQuote(api_url);