// JavaScript DOM Learning

/* ==============================
* Document Object Model (DOM)
* The Document Object Model (DOM) is a programming interface for HTML and XML documents.
* It represents the content of the document as an object model.
* The DOM provides a way to access and manipulate the structure and content of the document.
* Commonly used for web development.
================================== */

// console.log(document);
// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.title);
// console.log(document.images);
// console.log(document.links);
// console.log(document.forms);
// console.log(document.scripts);
// console.log(document.querySelectorAll('h1'));
// console.log(document.querySelector('h2'));
// console.log(document.querySelector('.btn').innerText);

document.querySelector('h1').innerText = 'Welcome to DOM';

document.querySelector('h1').innerText;

document.querySelector('h1').textContent;

document.querySelector('h1').innerHTML;


const box = document.querySelector('.box');
box.style.backgroundColor = 'red';
box.style.width = '100px';
box.style.height = '100px';

document.getElementById('box').style.backgroundColor = 'blue';

const menuItem = document.querySelectorAll('a');
// menuItem[2].style.color = 'red';
menuItem.forEach(function (i) {
  i.style.color = 'red';
  i.style.fontSize = '24px';
});

const cusClass = document.getElementsByClassName('nav-link');

const convertedClass = Array.from(cusClass);
// for (let i = 0; i < cusClass.length; i++) {
//   console.log(cusClass[i]);
// }
convertedClass.forEach(function (i) {
  i.style.backgroundColor = '#262626';
  i.style.margin = '0 0 15px';
  i.style.padding = '10px 20px';
});

// document.querySelector('.box').id;
// document.querySelector('.box').className;

document.querySelector('.box').getAttribute('id');
document.querySelector('.cta').setAttribute('class', 'text-white cta');