const inputRef = document.querySelector('input#font-size-control');
const spanRef = document.querySelector('span#text');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    spanRef.style.fontSize = `${Number(event.currentTarget.value)}px`;
}
