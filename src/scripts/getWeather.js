/**
 * Try to get weather from provided api.
 * @param {String} address is a formated api url
 * @returns {Promise}
 */
export default function getWeather(address) {
  if (!address) {
    throw new Error('No address provided!');
  }

  return fetch(address)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}
