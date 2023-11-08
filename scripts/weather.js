const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=East%20London,za&APPID=617907d6c031fe35f21cee9e2845fc38";

const temperature = document.querySelector("#current-temp");
const description = document.querySelector("#current-description");
const humidity = document.querySelector("#current-humidity");
const wind = document.querySelector("#current-wind");
const icon = document.querySelector("#weather-icon");

async function getWeather() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const weather = await response.json();
      // console.log(weather);
      temperature.innerHTML = Math.round(weather.main.temp - 273.15) + "°C";
      description.innerHTML = titleCase(weather.weather[0].description);
      humidity.innerHTML = weather.main.humidity + "%";
      wind.innerHTML = weather.wind.speed + "km/h";
      icon.src =
        "https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
      icon.alt = weather.weather[0].description;
    } else {
      throw Error(await response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

getWeather();
