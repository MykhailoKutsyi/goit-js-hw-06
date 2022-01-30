// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputRef = document.querySelector('input#name-input');
const spanRef = document.querySelector('span#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    spanRef.textContent = event.currentTarget.value;
    if (spanRef.textContent === '') {
        spanRef.textContent = 'Anonymous';
    }
}