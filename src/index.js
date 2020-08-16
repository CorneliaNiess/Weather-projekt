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

function updatingForecast(response) {
  let tempOne = response.main.data;
  let iconOne = response.main.data;
  let tempTwo = response.main.data;
  let iconTwo = response.main.data;
  let tempThree = response.main.data;
  let iconThree = response.main.data;
  let tempFour = response.main.data;
  let iconFour = response.main.data;
  let tempFive = response.main.data;
  let iconFive = response.main.data;
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&&units=metric`;
  axios.get(geoUrl).then(showGeoData);
  let forecastGeoUrl = `https://api.openweathermap.org/data/2.5/forecast?lat= ${latitude} &lon=${longitude}&appid=${key}&&units=metric`;
  axios.get(forecastGeoUrl).then(updateForecast);
}

// get current data
function getPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

//Option2: get input city
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
let forecastUrl = `api.openweathermap.org / data / 2.5 / forecast ? q = ${city} & appid= ${key}&&units=metric`;

let tempOneElement = document.querySelector("#tempOne");
let iconOneElement = document.querySelector("#iconeOne");

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

// Upcoming Days
let dayNumber = now.getDay();
console.log(dayNumber);

let dayOneElement = document.querySelector("#dayOne");
console.log(dayOneElement);
let dayOne = "Monday";

if (dayNumber + 1 > 7) {
  console.log(dayOneElement);
  dayOne = days[dayNumber + 1 - 7];
  console.log(dayOne);
  dayOneElement.innerHTML = `${dayOne}`;
} else {
  dayOne = days[dayNumber + 1];
  console.log(dayOne);
  dayOneElement.innerHTML = `${dayOne}`;
}

dayOneElement.innerHTML = `${dayOne}`;

// Tag 2
let dayTwoElement = document.querySelector("#dayTwo");
let dayTwo = "Tuesd.";
if (dayNumber + 2 > 7) {
  dayTwo = days[dayNumber + 2 - 7];
} else {
  dayTwo = days[dayNumber + 2];
}
dayTwoElement.innerHTML = `${dayTwo}`;

//Tag 3
let dayThreeElement = document.querySelector("#dayThree");
let dayThree = "Wednes.";
if (dayNumber + 3 > 7) {
  dayFour = days[dayNumber + 3 - 7];
} else {
  dayThree = days[dayNumber + 3];
}
dayThreeElement.innerHTML = `${dayThree}`;
//Tag 4
let dayFourElement = document.querySelector("#dayFour");
let dayFour = "Thur.";
if (dayNumber + 4 > 7) {
  dayFour = days[dayNumber + 4 - 7];
} else {
  dayFour = days[dayNumber + 4];
}
dayFourElement.innerHTML = `${dayFour}`;

//Tag 5
let dayFiveElement = document.querySelector("#dayFive");
let dayFive = "Frid.";
if (dayNumber + 5 > 7) {
  dayTwo = days[dayNumber + 5 - 7];
} else {
  dayFive = days[dayNumber + 5];
}
dayFiveElement.innerHTML = `${dayFive}`;
