function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let divSize = 20;
function createBoxes(amount) {
  // console.log('amount', amount);

  const boxes = document.querySelector('#boxes');
  
    
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    
    divSize += 10;
    box.style.width = `${divSize}px`;
    box.style.height = `${divSize}px`;
    // console.log(box.style.width);
    // console.log(box.style.height);
    // box.textContent = 'divan';

    boxes.append(box);
  }
}

function destroyBoxes() {
  boxes.remove();
  const controls = document.querySelector('#controls');
  const box = document.createElement('div');
  box.id = 'boxes';
  controls.after(box);
  divSize = 20;
}


const createButton = document.querySelector('button[data-create');
const destroyButton = document.querySelector('button[data-destroy]');

function checkAmount() {
  const amount = document.querySelector('input').value;
  
  if (amount > 0 && amount < 101) {
    // console.log(amount);
    createBoxes(amount);

  } else {
    alert("Enter value from 1 to 100!");
  }
}

createButton.addEventListener("click", checkAmount);
destroyButton.addEventListener("click", destroyBoxes);

