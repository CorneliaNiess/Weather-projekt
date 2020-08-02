//data of current position
function showGeoData(response) {
  //Updating temp
  let temp = response.data.main.temp;
  temp = Math.round(temp);
  console.log(temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temp}`;

  //Updating Location
  let currentLocation = response.data.name;
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = `${currentLocation}`;

  //updating description
  let currentDescription = response.data.weather[0].description;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = `${currentDescription}`;
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&&units=metric`;
  axios.get(geoUrl).then(showGeoData);
}

// get current data
function getPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

//get input city
function showData(response) {
  //update temperature
  let temp = response.data.main.temp;
  temp = Math.round(temp);
  console.log(temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temp}`;

  //update description
  let locationDescription = response.data.weather[0].description;
  console.log(locationDescription);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = `${locationDescription}`;

  //Updating Location
  let currentLocation = response.data.name;
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = `${currentLocation}`;
}

function getCity() {
  city = document.querySelector("#input-city").value;
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&&units=metric`;
  axios.get(url).then(showData);
  h1.innerHTML = city;
}

/*change temperature unit 

function changeToCelsius() {
  temperature.innerHTML = 19;
}
function changeToFahrenheit() {
  temperature.innerHTML = 66;
}
*/

let key = "1a987ebb771192a582d4c3490e38c0df";
let city = "Hamburg";
let h1 = document.querySelector("h1");
let searchButton = document.querySelector("#basic-addon2");
searchButton.addEventListener("click", getCity);
let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getPosition);
let latitude = 1;
let longitude = 1;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&&units=metric`;
let geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&&units=metric`;

/*let temperature = document.querySelector("#temperature");

let celsius = document.querySelector("#celsius");
//celsius.addEventListener("click", changeToCelsius);
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeToFahrenheit);
*/
//Date
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let date = document.querySelector("#date");
if (minutes < 10) {
  minutes = "0" + minutes;
}
date.innerHTML = `${day}, ${hours}:${minutes}`;
