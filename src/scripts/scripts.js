import Promise from 'promise-polyfill';
import 'isomorphic-fetch';
import isoToCountry from './isoCountries';
import { getWeather } from './getWeather';

if (!window.Promise) {
  window.Promise = Promise;
}

getWeather('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139')
  .then((response) => {
    console.log(response);
    console.log(isoToCountry(response.sys.country));
  });
