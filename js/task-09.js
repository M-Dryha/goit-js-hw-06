function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonElem = document.querySelector('.change-color');
const bodyElem = document.querySelector('body');
const spanColor = document.querySelector('.color');


buttonElem.addEventListener('click', () => {
  
  bodyElem.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();

})

