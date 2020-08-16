//data of current position
function showGeoData(response) {
  //Updating temp
  temp = response.data.main.temp;
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

  //updating Wind
  let currentWindspeed = response.data.wind.speed;
  let windElement = document.querySelector("#windspeed");
  windElement.innerHTML = `Wind speed: ${currentWindspeed}`;
  //updating Humidity
  let currentHumidity = response.data.main.humidity;
  console.log(currentHumidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `Humidity: ${currentHumidity}`;
  // updating icon
  let icon = response.data.weather[0].icon;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${icon}@2x.png`
  );
}

function updateForecast(response) {
  // updating icon

  //Updating temp
  let arrayLength = response.data.list.length;
  // Tag 1
  tempOne = response.data.list[arrayLength - 1 - 4 * 8].main.temp;
  console.log("tempOne:");
  console.log(tempOne);
  tempOne = Math.round(tempOne);
  // let temperatureOneElement = document.querySelector("#tempOne");
  temperatureOneElement.innerHTML = `${tempOne}`;

  let iconOne = response.data.list[arrayLength - 1 - 4 * 8].weather[0].icon;
  let iconOneElement = document.querySelector("#iconOne");
  iconOneElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconOne}@2x.png`
  );
  //Tag 2
  tempTwo = response.data.list[arrayLength - 1 - 3 * 8].main.temp;
  console.log("tempTwo:");
  console.log(tempTwo);
  tempTwo = Math.round(tempTwo);
  //  let temperatureTwoElement = document.querySelector("#tempTwo");
  temperatureTwoElement.innerHTML = `${tempTwo}`;

  let iconTwo = response.data.list[arrayLength - 1 - 3 * 8].weather[0].icon;
  let iconTwoElement = document.querySelector("#iconTwo");
  iconTwoElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconTwo}@2x.png`
  );
  //Tag 3
  tempThree = response.data.list[arrayLength - 2 * 8 - 1].main.temp;
  console.log("tempThree:");
  console.log(tempThree);
  tempThree = Math.round(tempThree);
  // let temperatureThreeElement = document.querySelector("#tempThree");
  temperatureThreeElement.innerHTML = `${tempThree}`;

  let iconThree = response.data.list[arrayLength - 2 * 8 - 1].weather[0].icon;
  let iconThreeElement = document.querySelector("#iconThree");
  iconThreeElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconThree}@2x.png`
  );
  //Tag 4
  tempFour = response.data.list[arrayLength - 1 - 8].main.temp;
  console.log("tempFour:");
  console.log(tempFour);
  tempFour = Math.round(tempFour);
  // let temperatureFourElement = document.querySelector("#tempFour");
  temperatureFourElement.innerHTML = `${tempFour}`;

  let iconFour = response.data.list[arrayLength - 1 - 8].weather[0].icon;
  let iconFourElement = document.querySelector("#iconFour");
  iconFourElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconFour}@2x.png`
  );
  //Tag 5
  console.log("arrayLength:");
  console.log(arrayLength);
  tempFive = response.data.list[arrayLength - 1].main.temp;
  console.log("tempFive:");
  console.log(tempFive);
  tempFive = Math.round(tempFive);
  // let temperatureFiveElement = document.querySelector("#tempFive");
  temperatureFiveElement.innerHTML = `${tempFive}`;

  let iconFive = response.data.list[arrayLength - 1].weather[0].icon;
  let iconFiveElement = document.querySelector("#iconFive");
  iconFiveElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconFive}@2x.png`
  );
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&&units=metric`;
  axios.get(geoUrl).then(showGeoData);
  let forecastGeoUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}&&units=metric`;
  axios.get(forecastGeoUrl).then(updateForecast);
}

// get current data
function getPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function getCity() {
  let input = document.querySelector("#input-city").value;
  console.log(input);
  if (input.length > 0) {
    city = input;
  } else {
    city = city;
  }
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&&units=metric`;
  axios.get(url).then(showGeoData);
  h1.innerHTML = city;
  forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&&units=metric`;
  axios.get(forecastUrl).then(updateForecast);
}

function selectRome() {
  event.preventDefault;
  city = "Rome";
  getCity();
}
function selectParis() {
  event.preventDefault;
  city = "Paris";
  getCity();
}
function selectHamburg() {
  event.preventDefault;
  city = "Hamburg";
  getCity();
}
function selectLondon() {
  event.preventDefault;
  city = "London";
  getCity();
}

//change temperature unit

function changeToCelsius() {
  temperature.innerHTML = temp;
  temperatureOneElement.innerHTML = tempOne;
  temperatureTwoElement.innerHTML = tempTwo;
  temperatureThreeElement.innerHTML = tempThree;
  temperatureFourElement.innerHTML = tempFour;
  temperatureFiveElement.innerHTML = tempFive;
}
function changeToFahrenheit() {
  temperature.innerHTML = Math.round(temp * 1.8 + 32);
  temperatureOneElement.innerHTML = Math.round(tempOne * 1.8 + 32);
  temperatureTwoElement.innerHTML = Math.round(tempTwo * 1.8 + 32);
  temperatureThreeElement.innerHTML = Math.round(tempThree * 1.8 + 32);
  temperatureFourElement.innerHTML = Math.round(tempFour * 1.8 + 32);
  temperatureFiveElement.innerHTML = Math.round(tempFive * 1.8 + 32);
}

let key = "1a987ebb771192a582d4c3490e38c0df";
let city = null;
let h1 = document.querySelector("h1");
let temp = null;
let searchButton = document.querySelector("#basic-addon2");
searchButton.addEventListener("click", getCity);
let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getPosition);

let latitude = 1;
let longitude = 1;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&&units=metric`;
let geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&&units=metric`;
let forecastUrl = `api.openweathermap.org / data / 2.5 / forecast ? q = ${city} & appid= ${key}&&units=metric`;

let rome = document.querySelector("#rome");
rome.addEventListener("click", selectRome);
let paris = document.querySelector("#paris");
paris.addEventListener("click", selectParis);
let hamburg = document.querySelector("#hamburg");
hamburg.addEventListener("click", selectHamburg);
let london = document.querySelector("#london");
london.addEventListener("click", selectLondon);

let temperatureOneElement = document.querySelector("#tempOne");
let temperatureTwoElement = document.querySelector("#tempTwo");
let temperatureThreeElement = document.querySelector("#tempThree");
let temperatureFourElement = document.querySelector("#tempFour");
let temperatureFiveElement = document.querySelector("#tempFive");

let tempOne = null;
let tempTwo = null;
let tempThree = null;
let tempFour = null;
let tempFive = null;

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", changeToCelsius);
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeToFahrenheit);

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

// API Komplett: https://api.openweathermap.org/data/2.5/weather?q=rome&appid=1a987ebb771192a582d4c3490e38c0df&&units=metric"
