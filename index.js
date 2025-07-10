function searchCity(event) {
  function changeTemperature(response) {
    console.log(response);
    let currentTemperature = document.querySelector(
      ".current-temperature-value"
    );
    currentTemperature.innerHTML = Math.round(
      response.data.temperature.current
    );
  }

  event.preventDefault();
  let searchInput = document.querySelector("#city-text-input");
  let city = document.querySelector("#current-city");
  city.innerHTML = `${searchInput.value}`;

  let currentTime = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentTime.getDay()];
  let hour = currentTime.getHours();
  let formattedHour = String(hour).padStart(2, "0");
  let minutes = currentTime.getMinutes();
  let formattedMinutes = String(minutes).padStart(2, "0");

  let time = document.querySelector("#current-time");
  time.innerHTML = `${day} ${formattedHour}:${formattedMinutes}`;

  let apiKey = "beac6ctb368bo560b6dfbc1164f16438";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changeTemperature);
}

let currentTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];
let hour = currentTime.getHours();
let formattedHour = String(hour).padStart(2, "0");
let minutes = currentTime.getMinutes();
let formattedMinutes = String(minutes).padStart(2, "0");

let time = document.querySelector("#current-time");
time.innerHTML = `${day} ${formattedHour}:${formattedMinutes}`;

let formCitySearch = document.querySelector("#city-search-form");
formCitySearch.addEventListener("submit", searchCity);
