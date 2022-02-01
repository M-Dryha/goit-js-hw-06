const inputElem = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputElem.addEventListener('input', () => {

    spanText.style.fontSize = inputElem.value + 'px';
})
