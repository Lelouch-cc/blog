let handle1 = null;
let handle2 = null;

function showMessage(ele, text, time = 4000, delay = 0) {
  const element = ele;
  clearTimeout(handle1);

  handle1 = setTimeout(() => {
    element.innerHTML = text;
    element.style.opacity = 100;

    clearTimeout(handle2);

    handle2 = setTimeout(() => {
      element.style.opacity = 0;
    }, time);
  }, delay);
}

export default showMessage;
