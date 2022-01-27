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
  createElem.classList.add('item');
  addListElem.append(createElem);
  console.log(createElem);
});


