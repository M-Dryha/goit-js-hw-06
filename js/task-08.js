const form = document.querySelector('form.login-form');
form.addEventListener('submit', onFormSubmit);
 
function onFormSubmit(event) {
 event.preventDefault();

    const formElem = event.currentTarget.elements;
      
    if (formElem.email.value === '' || formElem.password.value === '') {
        alert('Все поля должны быть заполнены!');
    }
    else {
         const formData = new FormData(event.currentTarget);  
    let newObjectData = Object.fromEntries(formData);
     console.log(newObjectData);

    }
   
   
     form.reset();
   
    
    // другой вариант? =====>
    
//  const formData = new FormData(event.currentTarget);
//     formData.forEach((value, name) => {
//         console.log(name, value);
      
//     })

}




