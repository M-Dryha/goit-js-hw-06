const inputElem = document.querySelector('#validation-input');

inputElem.addEventListener('blur', onInputBlur);

const inputLength = Number(inputElem.dataset.length);

function onInputBlur(event) {

    const textElem = event.currentTarget.value.length;

     if (inputLength === textElem) {
        
         this.classList.add('valid');
         this.classList.remove('invalid');
    }
     else {
         this.classList.add('invalid');
         this.classList.remove('valid');
   }  
}


