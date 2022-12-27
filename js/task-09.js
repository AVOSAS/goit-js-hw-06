const body = document.body;
const colorElement = document.querySelector('.color');
const buttonElement = document.querySelector('.change-color');

buttonElement.addEventListener('click', btnClick);

function btnClick(event) {
  const color = getRandomHexColor();

  body.style.background = color;
  colorEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}