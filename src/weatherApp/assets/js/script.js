const apiKey = "0d976d0a8a17b871f1645a7aa7dfbbaa";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

   if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
   } else {
      var data = await response.json();

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if (data.weather[0].main == "Clouds") {
         weatherIcon.src = "assets/images/clouds.png";
      }
      else if (data.weather[0].main == "Clear") {
         weatherIcon.src = "assets/images/clear.png";
      }
      else if (data.weather[0].main == "Clear") {
         weatherIcon.src = "assets/images/clear.png";
      }
      else if (data.weather[0].main == "Rain") {
         weatherIcon.src = "assets/images/rain.png";
      }
      else if (data.weather[0].main == "Drizzle") {
         weatherIcon.src = "assets/images/drizzle.png";
      }
      else if (data.weather[0].main == "Mist") {
         weatherIcon.src = "assets/images/mist.png";
      }
      document.querySelector(".error").style.display = "none";
      document.querySelector(".weather").style.display = "block";
   }

}

searchBtn.addEventListener("click", () => {
   checkWeather(searchBox.value);
})

