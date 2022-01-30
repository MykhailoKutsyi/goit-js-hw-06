function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const textBackgroundRef = document.querySelector('span.color');
const changeColorButtonRef = document.querySelector('button.change-color');

// console.log(textBackgroundRef.textContent);
// console.log(changeColorButtonRef.textContent);

changeColorButtonRef.addEventListener('click', changeColor);

function changeColor() {
  const textHexColor = getRandomHexColor();
  const body = document.querySelector('body');
  body.style.background = textHexColor;
  textBackgroundRef.textContent = textHexColor;
}
