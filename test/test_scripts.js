import 'babel-polyfill';
import 'isomorphic-fetch';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
import { assert } from 'chai';

import isoToCountry from '../src/scripts/isoCountries';
import { getWeather } from '../src/scripts/getWeather';
import { isJson } from './helpers';


describe('isoCountries', () => {
  describe('isoToCountry', () => {
    it('should be a country string when given an uppercase ISO code', () => {
      assert.equal('Estonia', isoToCountry('EE'));
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

  it('return false when url is not passed', () => {
    assert.isFalse(getWeather(''));
    assert.isFalse(getWeather());
    assert.isFalse(getWeather(null));
  });

  it('should be a json object when given an address', () => {
    stubedFetch.returnsPromise().resolves({
      coord: { lon: 139, lat: 35 },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: 'https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F04n.png?1499366020983',
      }],
      base: 'stations',
      main: { temp: 26, pressure: 1013, humidity: 88, temp_min: 26, temp_max: 26 },
      visibility: 16093,
      wind: { speed: 3.6, deg: 160 },
      clouds: { all: 75 },
      dt: 1500552180,
      sys: {
        type: 1,
        id: 7618,
        message: 0.0043,
        country: 'JP',
        sunrise: 1500493491,
        sunset: 1500544533,
      },
      id: 1851632,
      name: 'Shuzenji',
      cod: 200,
    });
    assert.isTrue(isJson(getWeather('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139')));
  });
});
