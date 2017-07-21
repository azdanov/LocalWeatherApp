import 'babel-polyfill';
import 'isomorphic-fetch';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
import { assert } from 'chai';

import isJson from './helpers';
import isoToCountry from '../src/scripts/isoCountries';
import getWeather from '../src/scripts/getWeather';
import getBeaufort from '../src/scripts/getBeaufort';
import getWeatherIcon from '../src/scripts/getWeatherIcon';

const weatherInfo = {
  coord: {
    lon: 139.12,
    lat: 35.9,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: 'https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F01d.png?1499366022009',
    },
  ],
  base: 'stations',
  main: {
    temp: 32,
    pressure: 1013,
    humidity: 59,
    temp_min: 32,
    temp_max: 32,
  },
  visibility: 16093,
  wind: {
    speed: 7.2,
    deg: 180,
    gust: 9.8,
  },
  clouds: {
    all: 1,
  },
  dt: 1500609480,
  sys: {
    type: 1,
    id: 7622,
    message: 0.0035,
    country: 'JP',
    sunrise: 1500519759,
    sunset: 1500579759,
  },
  id: 1907116,
  name: 'Nakai',
  cod: 200,
};


describe('isoCountries', () => {
  describe('isoToCountry', () => {
    it('should be a country string when given an uppercase ISO code', () => {
      assert.equal('Estonia', isoToCountry('EE'));
    });
    it('should be a country string when given an mixedcase ISO code', () => {
      assert.equal('Estonia', isoToCountry('Ee'));
    });
    it('should be an ISO code when country is not found', () => {
      assert.equal('XZ', isoToCountry('XZ'));
    });
  });
});

describe('getWeather', () => {
  sinonStubPromise(sinon);
  let stubedFetch;
  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
  });
  afterEach(() => {
    (global.fetch).restore();
  });

  it('should be a json object when given an address', () => {
    stubedFetch.returnsPromise().resolves(weatherInfo);
    assert.isTrue(isJson(getWeather('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139')));
  });
});

describe('getBeaufort', () => {
  it('should be a 0 on beaufort scale when given wind speed', () => {
    assert.equal(0, getBeaufort(0.1));
  });
  it('should be a 1 on beaufort scale when given wind speed', () => {
    assert.equal(1, getBeaufort(0.3));
  });
  it('should be a 1 on beaufort scale when given wind speed', () => {
    assert.equal(1, getBeaufort(1.5));
  });
  it('should be a 2 on beaufort scale when given wind speed', () => {
    assert.equal(2, getBeaufort(1.6));
  });
  it('should be a 2 on beaufort scale when given wind speed', () => {
    assert.equal(2, getBeaufort(3.3));
  });
  it('should be a 3 on beaufort scale when given wind speed', () => {
    assert.equal(3, getBeaufort(3.4));
  });
  it('should be a 3 on beaufort scale when given wind speed', () => {
    assert.equal(3, getBeaufort(5.5));
  });
  it('should be a 4 on beaufort scale when given wind speed', () => {
    assert.equal(4, getBeaufort(5.6));
  });
  it('should be a 4 on beaufort scale when given wind speed', () => {
    assert.equal(4, getBeaufort(7.9));
  });
  it('should be a 5 on beaufort scale when given wind speed', () => {
    assert.equal(5, getBeaufort(8.0));
  });
  it('should be a 5 on beaufort scale when given wind speed', () => {
    assert.equal(5, getBeaufort(10.7));
  });
  it('should be a 6 on beaufort scale when given wind speed', () => {
    assert.equal(6, getBeaufort(10.8));
  });
  it('should be a 6 on beaufort scale when given wind speed', () => {
    assert.equal(6, getBeaufort(13.8));
  });
  it('should be a 7 on beaufort scale when given wind speed', () => {
    assert.equal(7, getBeaufort(13.9));
  });
  it('should be a 7 on beaufort scale when given wind speed', () => {
    assert.equal(7, getBeaufort(17.1));
  });
  it('should be a 7 on beaufort scale when given wind speed', () => {
    assert.equal(7, getBeaufort(13.9));
  });
  it('should be a 7 on beaufort scale when given wind speed', () => {
    assert.equal(7, getBeaufort(17.1));
  });
  it('should be a 8 on beaufort scale when given wind speed', () => {
    assert.equal(8, getBeaufort(17.2));
  });
  it('should be a 8 on beaufort scale when given wind speed', () => {
    assert.equal(8, getBeaufort(20.7));
  });
  it('should be a 9 on beaufort scale when given wind speed', () => {
    assert.equal(9, getBeaufort(20.8));
  });
  it('should be a 9 on beaufort scale when given wind speed', () => {
    assert.equal(9, getBeaufort(24.4));
  });
  it('should be a 10 on beaufort scale when given wind speed', () => {
    assert.equal(10, getBeaufort(24.5));
  });
  it('should be a 10 on beaufort scale when given wind speed', () => {
    assert.equal(10, getBeaufort(28.4));
  });
  it('should be a 11 on beaufort scale when given wind speed', () => {
    assert.equal(11, getBeaufort(28.5));
  });
  it('should be a 11 on beaufort scale when given wind speed', () => {
    assert.equal(11, getBeaufort(32.6));
  });
  it('should be a 12 on beaufort scale when given wind speed', () => {
    assert.equal(12, getBeaufort(32.7));
  });
});

describe('getWeatherIcon', () => {
  it('should be a weather icon string a group and a date', () => {
    assert.equal('wi-day-sunny', getWeatherIcon(weatherInfo, new Date(1500609480 * 1000)));
  });
  it('should be a weather icon string a group and a date', () => {
    assert.equal('wi-night-clear', getWeatherIcon(weatherInfo, new Date(1500590010 * 1000)));
  });
});
