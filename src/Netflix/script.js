const API_URL = "https://jsonfakery.com/movies/paginated";

let movies = [];
let topRated = [];
let trending = [];
const categories = {
   "Top Rated Movies": topRated,
   "Trending Now": trending
};

async function initMovies() {
   try {
      const response = await fetch(API_URL);
      if (!response.ok) {
         throw new Error("Lỗi response");
      }
      const allMovies = await response.json();
      movies = allMovies.data;
      console.log(movies);

      updateCategories();
      renderHeroHeader();
      renderMovies();
   } catch (error) {
      console.log("Lỗi: ", error.message);
   }
}

function renderHeroHeader() {
   const heroHeader = document.getElementById("hero");
   const heroTitle = heroHeader.querySelector("#heroTitle");
   const heroDesc = heroHeader.querySelector("#heroDesc");
   const movieHero = movies[Math.floor(Math.random() * movies.length)]

   heroHeader.style.backgroundImage = `url(${movieHero.backdrop_path})`;
   heroTitle.innerText = movieHero.original_title;
   heroDesc.innerText = movieHero.overview;
}

function updateCategories() {
   movies.forEach(movie => {
      if (movie.vote_average >= 7.0) {
         topRated.push(movie);
      } else {
         trending.push(movie);
      }
   })
}

function renderMovies() {
   const mainContainer = document.getElementById("mainContainer");
   mainContainer.innerHTML = "";
   const categoriesArr = Object.entries(categories);

   const fragment = document.createDocumentFragment();
   categoriesArr.forEach(category => {
      const section = document.createElement("div");
      section.classList.add("category-section");

      const categoryTitle = document.createElement("h3");
      categoryTitle.classList.add("category-title");
      categoryTitle.innerText = category[0];

      const row = document.createElement("div");
      row.classList.add("movie-row");
      category[1].forEach(movie => {
         const card = document.createElement("div");
         card.classList.add("movie-card");
         card.addEventListener("click", () => openModal(movie));
         const img = document.createElement("img");
         img.src = movie.poster_path;
         img.alt = movie.original_title;
         card.append(img);
         row.append(card)
      })

      section.append(categoryTitle, row);
      fragment.append(section);
   })
   mainContainer.append(fragment);
}

function openModal(movie) {
   document.body.style.overflow = "hidden";
   const modal = document.getElementById("modal");
   modal.classList.add("active");

   const mBanner = modal.querySelector("#mBanner");
   const mTitle = modal.querySelector("#mTitle");
   const mRating = modal.querySelector("#mRating");
   const mDesc = modal.querySelector("#mDesc");
   const mCastList = modal.querySelector("#mCastList");
   const closeBtn = modal.querySelector(".close-btn");

   mBanner.src = movie.backdrop_path;
   mTitle.innerText = movie.original_title;
   mRating.innerText = movie.vote_average
   mDesc.innerText = movie.overview;

   mCastList.innerHTML="";
   const castListFrag = document.createDocumentFragment();
   movie.casts.forEach(actor => {
      const div = document.createElement("div")
      const img = document.createElement("img");
      img.classList.add("cast-img");
      img.src = actor.profile_path;
      const span = document.createElement("span");
      span.classList.add("cast-item");
      span.innerText = actor.name;
      div.append(img,span);
      castListFrag.append(div);
   })
   mCastList.append(castListFrag);

   closeBtn.addEventListener("click", function(e){
      closeModal(e.target.closest("#modal"));
   })
}

function closeModal(modal){
   if(modal.className.includes("active")){
      modal.classList.remove("active");
   }
   document.body.style.overflow = "auto";
}

initMovies();