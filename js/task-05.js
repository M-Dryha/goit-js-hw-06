const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', changeInput )

function changeInput(event) {
   
    event.currentTarget.value.length > 0 ? refs.span.textContent = event.currentTarget.value
        : refs.span.textContent = 'Anonymous';
  
}