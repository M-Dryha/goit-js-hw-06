function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputElem = document.querySelector('input');

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxesElem = document.querySelector('#boxes');


 inputElem.addEventListener('input', (changeInput));
// buttonCreate.addEventListener('click', (createBoxes));

 function changeInput() {
  
 console.log(Number(inputElem.value));
  
 }
 const basicSize = 30;


// const amount = inputElem.value;

 

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i++) {
//     const div = document.createElement('div');
//     const size = basicSize + i * 10;
//     div.style.offsetWidth = size + 'px';
  
//     div.style.backgroundColor = getRandomHexColor();
//     boxesElem.appendChild(div);
//     console.log(boxesElem);


//   }

// }
  
   

// const input = document.querySelector("#controls input");
// console.log(input);
// console.log(input.value);

// const createboxBtn = document.querySelector('[data-create]');
// console.log(createboxBtn);

// const deleteboxBtn = document.querySelector('[data-destroy]');
// console.log(deleteboxBtn);

// const boxes = document.querySelector("#boxes");
// console.log(boxes);

// const inputChange = (e) => {
//   input.setAttribute("count", Number(e.currentTarget.value));
//   console.log(Number(e.currentTarget.value));
// };
// input.addEventListener("input", inputChange);

// let baseboxSize = 30;

// function random_bg_color() {
//   let x = Math.floor(Math.random() * 256);
//   let y = Math.floor(Math.random() * 256);
//   let z = Math.floor(Math.random() * 256);
//   let bgColor = "rgb(" + x + "," + y + "," + z + ")";
//   return bgColor;
// }
// random_bg_color();




const createbox = () => {
  let countBox = Number(input.getAttribute("count"));
  console.log(countBox);
  for (let i = 0; i < countBox; i++) {
    baseboxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = random_bg_color();
     newBox.style.height = baseboxSize + "px";
    newBox.style.width = baseboxSize + "px";
     newBox.style.margin = "10px";
    newBox.classList.add("new-box");
    boxes.append(newBox);
  }
};

createboxBtn.addEventListener("click", createbox);

const deletebox = () => {
  const allNewBoxes = document.querySelectorAll(".new-box");
  // console.log(allNewBoxes);
  for (let allNewBoxe of allNewBoxes) {
    boxes.removeChild(allNewBoxe);
  }
  baseboxSize = 30;
  // console.log(baseboxSize);
};

deleteboxBtn.addEventListener("click", deletebox);