const inputElem = document.querySelector('#validation-input');

inputElem.addEventListener('blur', onInputBlur);


function onInputBlur(event) {


     if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
        
         this.classList.add('valid');
         this.classList.remove('invalid');
    }
     else {
         this.classList.add('invalid');
         this.classList.remove('valid');
   }  
}


