function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputElem = document.querySelector('input');

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxesElem = document.querySelector('#boxes');


inputElem.addEventListener('input', (changeInput));
buttonCreate.addEventListener('click', (createBoxes));
  
function changeInput() {
  
console.log(inputElem.value);
 }

const amount = inputElem.value;
 const basicSize = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = basicSize + i * 10;
    div.style.offsetWidth = size + 'px';
  
    div.style.backgroundColor = getRandomHexColor();
    boxesElem.appendChild(div);
    console.log(boxesElem);


  }

}
  
   

