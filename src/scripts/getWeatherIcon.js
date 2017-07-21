const weatherGroups = {
  day: {
    thunderstorm: 'wi-day-thunderstorm',
    drizzle: 'wi-day-sleet',
    rain: 'wi-day-rain',
    snow: 'wi-day-snow',
    clear: 'wi-day-sunny',
    clouds: 'wi-day-cloudy-high',
  },
  night: {
    thunderstorm: 'wi-night-alt-snow-thunderstorm',
    drizzle: 'wi-night-alt-sleet',
    rain: 'wi-night-alt-rain',
    snow: 'wi-night-alt-snow',
    clear: 'wi-night-clear',
    clouds: 'wi-night-alt-cloudy-high',
  },
};

export default function getWeatherIcon(weatherInfo, date) {
  const hour = date.getHours();
  const sunrise = new Date(weatherInfo.sys.sunrise * 1000).getHours();
  const sunset = new Date(weatherInfo.sys.sunset * 1000).getHours();
  const weatherGroup = weatherInfo.weather[0].main.toLowerCase();

  let weatherIcon = '';
  if (hour >= sunrise && sunset >= hour) {
    weatherIcon = weatherGroups.day[weatherGroup];
  } else {
    weatherIcon = weatherGroups.night[weatherGroup];
  }

  return `wi ${weatherIcon} wi-main`;
}
