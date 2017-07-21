function isJson(input) {
  let item = typeof input !== 'string' ? JSON.stringify(input) : input;

  try {
    item = JSON.parse(item);
  } catch (e) {
    return false;
  }

  return typeof item === 'object' && item !== null;
}

export default isJson;
