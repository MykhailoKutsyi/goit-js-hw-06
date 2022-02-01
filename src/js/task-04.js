// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


//доступ к блоку с кнопками
const buttonsContainer = document.getElementById("counter");

//доступ к элементу span
const value = document.querySelector('#value');

var total = 0;

//функция по уменьшению значения value.textContent
const handleDecrementClick = () => {
    total -= 1;
    value.textContent = total;
};

//функция по увеличению значения value.textContent

const handleIncrementClick = () => {
    total += 1;
    value.textContent = total;
};


buttonsContainer.firstElementChild.addEventListener("click", handleDecrementClick);
buttonsContainer.lastElementChild.addEventListener("click", handleIncrementClick);