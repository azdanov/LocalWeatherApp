export default function getBeaufort(ms) {
  const msLimits = [0.2, 1.5, 3.3, 5.5, 7.9, 10.7, 13.8, 17.1, 20.7, 24.4, 28.4, 32.6];

  return msLimits
    .reduce((previousValue, currentValue) => previousValue + (ms > currentValue ? 1 : 0), 0);
}
