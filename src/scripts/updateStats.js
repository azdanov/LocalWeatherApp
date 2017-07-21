import isoToCountry from './isoCountries';
import getMonth from './getMonth';
import getBeaufort from './getBeaufort';
import getWeatherIcon from './getWeatherIcon';

const weatherIconElem = document.getElementById('weather-icon');
const weatherDescElem = document.getElementById('weather-description');
const tempNumElem = document.getElementById('temperature-num');
const monthElem = document.getElementById('month');
const dayElem = document.getElementById('day-num');
const cityElem = document.getElementById('city');
const countryElem = document.getElementById('country');
const windIconElem = document.getElementById('wind-icon');
const windSpeedElem = document.getElementById('wind-speed');
const humidityElem = document.getElementById('humidity');
const cloudinessElem = document.getElementById('cloudiness');

export default function updateStats(weatherStats) {
  const dateObj = new Date();
  const country = isoToCountry(weatherStats.sys.country);
  const beauNum = getBeaufort(weatherStats.wind.speed);

  weatherIconElem.className = getWeatherIcon(weatherStats, dateObj);
  weatherDescElem.textContent = weatherStats.weather[0].description[0].toUpperCase() +
    weatherStats.weather[0].description.slice(1);
  tempNumElem.textContent = weatherStats.main.temp;
  monthElem.textContent = getMonth(dateObj);
  dayElem.textContent = dateObj.getDate();
  cityElem.textContent = weatherStats.name;
  countryElem.textContent = country;
  windIconElem.className = `wi wi-wind-beaufort-${beauNum}`;
  windIconElem.title = `Beaufort Scale ${beauNum}`;
  windSpeedElem.textContent = weatherStats.wind.speed;
  humidityElem.textContent = weatherStats.main.humidity;
  cloudinessElem.textContent = weatherStats.clouds.all;
}
