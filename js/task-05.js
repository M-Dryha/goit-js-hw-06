const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', changeInput )

function changeInput(event) {
    if (event.currentTarget.value.length > 0) {
          refs.span.textContent = event.currentTarget.value;
    }
    else {
        refs.span.textContent = 'Anonymous';
  }
}