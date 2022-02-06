const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const addListElem = document.querySelector("#ingredients");
console.log(addListElem);

const addCreateElem = ingredients.map(ingredient => {

  const createElem = document.createElement("li");
    
  createElem.textContent = ingredient;
  return createElem;
});

addListElem.append(...addCreateElem);





// const addListElem = document.querySelector('#ingredients');

// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

// addListElem.innerHTML = list;