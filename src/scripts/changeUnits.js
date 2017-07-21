export default function changeUnits() {
  const elements = Array.from(document.querySelectorAll('[data-type]'));
  const unitElem = document.getElementById('unit');

  elements.forEach((element) => {
    if (element.dataset.type === 'metric') {
      unitElem.textContent = 'Imperial'

      element.dataset.type = 'imperial';

      switch (element.id) {
        case 'temperature-num':
          element.textContent = parseFloat((element.textContent * 1.8 + 32).toFixed(1));
          break;
        case 'temperature-unit':
          element.textContent = 'F';
          break;
        case 'wind-speed':
          element.textContent = parseFloat((element.textContent * 2.236936).toFixed(1));
          break;
        case 'wind-unit':
          element.textContent = 'mph';
          break
        default:
          break;
      }

    } else {
      element.dataset.type = 'metric';
      unitElem.textContent = 'Metric'

      switch (element.id) {
        case 'temperature-num':
          element.textContent = parseFloat(((element.textContent - 32) * 5/9).toFixed(1));
          break;
        case 'temperature-unit':
          element.textContent = 'C';
          break;
        case 'wind-speed':
          element.textContent = parseFloat((element.textContent / 2.236936).toFixed(1));
          break;
        case 'wind-unit':
          element.textContent = 'm/s';
          break
        default:
          break;
      }
    }
  });
}
