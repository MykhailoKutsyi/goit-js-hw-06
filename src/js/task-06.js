const inputRef = document.querySelector('input#validation-input');

inputRef.addEventListener('blur', onBlurChange);

function onBlurChange(event) {
    const inputSymbolsLength = document.querySelector('input[data-length="6"]');
    if (Number(event.currentTarget.value.length) === Number(inputSymbolsLength.dataset.length)) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');

    } 
    
}