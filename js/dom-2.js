// Add text inside tags

let headTitle = document.querySelector('h1');
// headTitle.innerText = 'Hello DOM';
headTitle.innerText = headTitle.innerText + ' DOM';

// Change text
let boxes = document.querySelectorAll('.box');
// boxes[0].innerText = 'New text';
// boxes[1].innerText = 'New text';

let newNum = 1;
for (box of boxes) {
  box.innerText = `Box No. ${newNum}`;
  newNum++;
}

// Create Element
let learnBtn = document.createElement('button');
learnBtn.innerText = 'Learn More';

let heroArea = document.querySelector('.hero');
heroArea.append(learnBtn); // Last
// heroArea.prepend(learnBtn); // Fast
// heroArea.before(learnBtn); // Before
// heroArea.after(learnBtn); // After

// Add Element
// function addFruit(nameFruits) {
//   const li = document.createElement('li');
//   li.innerHTML = `${nameFruits}`;

//   document.querySelector('ul').appendChild(li);
// }
// addFruit('Orange');
// addFruit('Apple');

// Optimized
function addFruitsOP(nameFruits) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(nameFruits));

  document.querySelector('ul').appendChild(li);
}
addFruitsOP('Orange');
addFruitsOP('Graps');

// Edit
const editFruits = document.querySelector('li:first-child');
// console.log(editFruits);
// editFruits.innerText = 'blueberry';
editFruits.textContent = 'blueberrys';

const newFruits = document.createElement('li');
newFruits.textContent = 'Strawberry';
editFruits.replaceWith(newFruits);

// Edit with Tag
const editTag = document.querySelector('li:last-child');
// editTag.outerHTML = '<p>Lemon</p>';

// Remove
editTag.remove();

// Clear
//document.querySelector('ul').remove();

// Replace
const replaceFruits = document.querySelector('li:nth-child(2)');
const newFruits2 = document.createElement('li');
newFruits2.textContent = 'Watermelon';
replaceFruits.replaceWith(newFruits2);

// Remove All
// document.querySelector('ul').innerHTML = '';

// Remove All
// document.querySelector('ul').textContent = '';

// Remove All
// document.querySelector('ul').innerText = '';
