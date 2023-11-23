const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=-33.02&lon=27.90&units=metric&APPID=617907d6c031fe35f21cee9e2845fc38";
const urlThreeDay =
  "https://api.openweathermap.org/data/2.5/forecast?lat=-33.02&lon=27.90&units=metric&APPID=617907d6c031fe35f21cee9e2845fc38";

const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#current-humidity");
const wind = document.querySelector("#wind-speed");
const icon = document.querySelector("#weather-icon");
const figcap = document.querySelector("#weather-desc");
const windchill = document.querySelector("#wind-chill");
const forecast = document.querySelector("#forecast");

async function getWeather() {
  try {
    const response = await fetch(urlThreeDay);
    if (response.ok) {
      const weather = await response.json();
      // console.log(weather);
      displayWeather(weather);
      displayForecast(weather);
    } else {
      throw Error(await response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayWeather(data) {
  const day0 = data.list[0];
  temperature.innerHTML = Math.round(day0.main.temp);
  humidity.innerHTML = day0.main.humidity + "%";
  wind.innerHTML = day0.wind.speed;
  icon.src =
    "https://openweathermap.org/img/w/" + day0.weather[0].icon + ".png";
  icon.alt = day0.weather[0].description;
  icon.width = "64";
  icon.height = "64";
  figcap.innerHTML = titleCase(day0.weather[0].description);
  windchill.innerHTML = CalculateWindChill(
    temperature.textContent,
    wind.textContent
  );
}

function displayForecast(data) {
  const threedays = [];
  threedays.push(data.list[8]);
  threedays.push(data.list[16]);
  threedays.push(data.list[24]);

  threedays.forEach((element) => {
    const day = document.createElement("section");
    day.classList.add("day");
    const date = document.createElement("h3");
    date.innerHTML = element.dt_txt.slice(0, 10);
    const icon = document.createElement("img");
    icon.setAttribute(
      "src",
      `https://openweathermap.org/img/w/${element.weather[0].icon}.png`
    );
    icon.setAttribute("alt", element.weather[0].description);
    icon.setAttribute("width", "64");
    icon.setAttribute("height", "64");
    const temp = document.createElement("p");
    temp.innerHTML = Math.round(element.main.temp) + "°C";
    const desc = document.createElement("p");
    desc.innerHTML = titleCase(element.weather[0].description);
    day.appendChild(date);
    day.appendChild(temp);
    day.appendChild(icon);
    day.appendChild(desc);
    forecast.appendChild(day);
  });
}

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

getWeather();
