const urlForecast =
  "https://api.openweathermap.org/data/2.5/forecast?lat=-20.51&lon=-86.95&units=imperial&APPID=617907d6c031fe35f21cee9e2845fc38";

const temperature = document.querySelector("#currentTemp");
const humidity = document.querySelector("#currentHumidity");
const desc = document.querySelector("#currentDesc");
const icon = document.querySelector("#currentIcon");
const forecast = document.querySelector("#forecast");

async function getWeather() {
  try {
    const response = await fetch(urlForecast);
    if (response.ok) {
      const weather = await response.json();
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
  temperature.innerHTML = `Temperature: ${Math.round(day0.main.temp)} °F`;
  humidity.innerHTML = `Humidity: ${day0.main.humidity}%`;
  icon.src =
    "https://openweathermap.org/img/w/" + day0.weather[0].icon + ".png";
  icon.alt = `Image for ${day0.weather[0].description}`;
  icon.width = "64";
  icon.height = "64";
  desc.innerHTML = titleCase(day0.weather[0].description);
}

function displayForecast(data) {
  const forecastArray = [];
  forecastArray.push(data.list[8]);

  forecastArray.forEach((element) => {
    const day = document.createElement("section");
    day.classList.add("day");
    const date = document.createElement("h3");
    const temp = document.createElement("p");
    const humidity = document.createElement("p");
    const desc = document.createElement("p");

    humidity.innerHTML = `Humidity: ${element.main.humidity}%`;
    date.innerHTML = `Forecast: ${element.dt_txt.slice(0, 10)}`;
    const icon = document.createElement("img");
    icon.setAttribute(
      "src",
      `https://openweathermap.org/img/w/${element.weather[0].icon}.png`
    );
    icon.setAttribute("alt", `Image of ${element.weather[0].description}`);
    icon.setAttribute("width", "64");
    icon.setAttribute("height", "64");
    temp.innerHTML = `Temperature: ${Math.round(element.main.temp)}°F`;
    desc.innerHTML = titleCase(element.weather[0].description);
    
    
    day.appendChild(date);
    day.appendChild(temp);
    day.appendChild(humidity);
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
