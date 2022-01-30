// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


//доступ к блоку с кнопками
const buttonsContainer = document.getElementById("counter");

//доступ к элементу span
const value = document.querySelector('#value');

//функция по уменьшению значения value.textContent
const handleDecrementClick = () => {
    value.textContent = Number(value.textContent) - 1;
};

//функция по увеличению значения value.textContent

const handleIncrementClick = () => {
    value.textContent = Number(value.textContent) + 1;
};


buttonsContainer.firstElementChild.addEventListener("click", handleDecrementClick);
buttonsContainer.lastElementChild.addEventListener("click", handleIncrementClick);