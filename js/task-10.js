function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputElem = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxesElem = document.querySelector('#boxes');


buttonCreate.addEventListener('click', changeInput);
 buttonDestroy.addEventListener('click', destroyBoxes);
 let basicSize = 30;


function changeInput() {

  const amount = Number(inputElem.value);
  
  createBoxes(amount);
  
}
 
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
   
    basicSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.height = basicSize + "px";
    newBox.style.width = basicSize + "px";
     newBox.style.margin = "15px";
    newBox.classList.add("new-box");
    boxesElem.append(newBox);
    console.log(newBox);
  }
}
  

function destroyBoxes() {
  const newBoxes = document.querySelectorAll(".new-box");
  inputElem.value = '';
  
  newBoxes.forEach(box => {
      boxesElem.remove(box);
  });
  
  }





