  
   
const decrementElem = document.querySelector("[data-action='decrement']");
const incrementElem = document.querySelector("[data-action='increment']");

const valueElem = document.querySelector('#value');
 let counterValue = 0;

decrementElem.addEventListener('click', () => {
 
 counterValue -= 1;
    valueElem.textContent = counterValue;
  
});

incrementElem.addEventListener('click', () => {
 
 counterValue += 1;
    valueElem.textContent = counterValue;
  
});



