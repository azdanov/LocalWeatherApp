import Promise from 'promise-polyfill';
import 'isomorphic-fetch';
import getWeather from './getWeather';
import updateStats from './updateStats';
import changeUnits from './changeUnits';

const mainWindowElem = document.getElementById('main');
const refreshElem = document.getElementById('refresh');
const unitElem = document.getElementById('unit');
const dateElem = document.getElementById('date');
const infoAuxElem = document.getElementById('info-aux');
const hiddenElems = Array.from(document.querySelectorAll('#info-aux .ui.basic'));

if (!window.Promise) {
  window.Promise = Promise;
}

function initUpdate() {
  mainWindowElem.classList.add('loading');
  hiddenElems.forEach(elem => elem.classList.remove('visible'));
  infoAuxElem.classList.remove('visible');
  dateElem.style.backgroundColor = '#fff';
  navigator.geolocation.getCurrentPosition((position) => {
    const precision = 10000;
    const lat = Math.round(position.coords.latitude * precision) / precision;
    const lon = Math.round(position.coords.longitude * precision) / precision;
    const url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;

    getWeather(url)
      .then((weatherStats) => {
        updateStats(weatherStats);
        mainWindowElem.classList.remove('loading');
        infoAuxElem.classList.add('visible');
        hiddenElems.forEach(elem => elem.classList.add('visible'));
        dateElem.style.backgroundColor = '#e5e5e5';
      });
  });
}

[unitElem, refreshElem]
  .forEach(item => item.addEventListener('click', () => event.currentTarget.blur()));

if ('geolocation' in navigator) {
  refreshElem.addEventListener('click', initUpdate);
  unitElem.addEventListener('click', changeUnits);
  initUpdate();
} else {
  document.getElementById('info-aux').textContent = 'GPS Unavailable';
  document.getElementById('info-aux').style.lineHeight = 0;
}

