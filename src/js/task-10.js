function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount) {
    console.log('amount', amount);

  console.log('cr');
  makeImage(amount);
  // return image;
}

function makeImage(amount) {
  // const image1 = document.createElement("img");
  


  const makeImageMarkup = image => {
  return `
  <div></div> 
  `;
  }
const imageEl = document.querySelector('div#boxes');
  const makeImages = makeImageMarkup;
  imageEl.insertAdjacentHTML('beforeend', makeImageMarkup);
  

console.log(makeImages);

//   for (let i = 0; i < amount; i += 1) {
//     image.src = "https://placeimg.com/640/480/nature";
//     image.alt = "Nature";
//     console.log(image);

//   }
//     console.log('amount', amount);

//     console.log(image);

// // imageEl.insertAdjacentHTML('beforeend', makeImages);

//   return image;
}





function destroyBoxes() {
  console.log('de');


}


const createButton = document.querySelector('button[data-create');
// console.log(createButton);
const destroyButton = document.querySelector('button[data-destroy]');
// console.log(destroyButton);

function aaa() {
  const amount = document.querySelector('input').value;
  // console.log(amount);
  
  if (amount > 0 && amount < 101) {
    console.log(amount);
    createBoxes(amount);

  } else {
  // alert("Enter value from 1 to 100!");
  }
}


createButton.addEventListener("click", aaa);
destroyButton.addEventListener("click", destroyBoxes);

