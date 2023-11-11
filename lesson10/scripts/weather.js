const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDescription = document.querySelector("#weather-description");
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&APPID=617907d6c031fe35f21cee9e2845fc38";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const weather = await response.json();
      // console.log(weather);
      displayResults(weather);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)} &deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = titleCase(data.weather[0].description);
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  weatherDescription.textContent = `${desc}`;
}

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
