export const getWeather = (address) => {
  if (!address) {
    return false;
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
};

export default getWeather;
