const body = document.getElementById('body');
const button = document.querySelectorAll('li');

// Static Approach
// const redColor = document.querySelector('.red');
// redColor.addEventListener('click', function () {
//   body.style.backgroundColor = '#ff7675';
// });

// Static Approach
// const greenColor = document.querySelector('.green');
// greenColor.addEventListener('click', function () {
//   body.style.backgroundColor = '#55efc4';
// });

// Dynamic Approach
// button.forEach(function (value) {
//   value.addEventListener('click', function () {
//     let className = this.classList.value;
//     body.style.backgroundColor = className;
//     console.log(className);
//   });
// });

// Dynamic Approach
button.forEach(function (value) {
    value.addEventListener('click', function () {
    //   let className = this.classList[0];
      let className = this.classList.value;
      let color = '';
      if (className === 'red') {
        color = '#ff7675';
      }
      if (className === 'green') {
        color = '#55efc4';
      }
      if (className === 'blue') {
        color = '#74b9ff';
      }
      if (className === 'pink') {
        color = '#fd79a8';
      }
      if (className === 'purple') {
        color = '#a29bfe';
      }
      body.style.backgroundColor = color;
      // console.log(className);
      // console.log(color);
    });
  });
