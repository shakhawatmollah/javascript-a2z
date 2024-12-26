// JavaScript Asynchronous Learning

/* ==============================
* Asynchronous JavaScript (async/await)
* Asynchronous JavaScript is a way to write code that can run in parallel with other code.
* It is a way to write code that can run in parallel with other code.
*/

/*
* Synchoronous 
* Single Threaded 
*/
function a() {
  console.log('Ant');
}
//console.log('End');
// a(); // Method invoke

const another = function () {
  console.log('Function Working');
  let aTime = new Date().getTime();
  while (aTime + 5000 >= new Date().getTime());
  console.log('Competed');
};
// console.log('First Line');
// another();
// console.log('Last Line');

/*
* Asynchronous 
* Multi Threaded 
 * setTimeout
 * setInterval
 * promises
 * fetch
 * axios
 * XMLHttpRecquest
 */

// setTimeout(callback, time_in_ms);
// console.log('Hello1');
// console.log('Hello2');
// setTimeout(function () {
//   console.log('Hello3');
// }, 5000); // 5 seconds
// console.log('Hello4');
// console.log('Hello5');

// setTimeout(() => {
//   console.log('Working');
// }, 5000);   

// setInterval(() => {
//   console.log('Working');   
// });


/*
* Callbacks 
* Callbacks are used to pass a function as an argument to another function.
* Callbacks are used to pass a function as an argument to another function.
*/

// function getTickets(callback) {
//     setTimeout(() => {
//         callback(10);
//     }, 5000);
// }

// function buyTicket() {
//     getTickets((tickets) => {
//         console.log(tickets);
//     });
// }

// buyTicket();


/*
* Promises 
* Promises are used to handle asynchronous operations.
* Promises are used to handle asynchronous operations.
*/

/*
let coffee = new Promise((res, rej) => {
  if (true) {
    return res(); // Resolved
  } else {
    return rej(); // Rejected
  }
});
coffee.then(function () {
    console.log('Resolved');
  })
  .catch(function () {
    console.log('Rejected');
  });
*/

/*
let mathAns = new Promise((res, rej) => {
  let n = Math.floor(Math.random() * 10);
  console.log(n);
  if (n < 5) {
    return res();
  } else {
    return rej();
  }
});
mathAns
  .then(function () {
    console.log('Bellow');
  })
  .catch(function () {
    console.log('Above');
  });
*/

const step1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('Step One Done');
  }, 5000);
});

const step2 = new Promise((res, rej) => {
  setTimeout(() => {
    res('Step Two Done');
  }, 3000);
});

// step1.then(function (res) {
//   console.log(res);
// });

// step2.then(function (res) {
//   console.log(res);
// });

//Promise.all([step1, step2]).then(res => console.log(res)); // Slowest & allow to run in parallel

//Promise.race([step1, step2]).then(res => console.log(res)); // Fastest

// let promise1 = new Promise((res, rej) => {
//   return res('Step One Done');
// });

// let promise2 = promise1.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res('Step Two Done');
//   });
// });
// promise2.then(function (data) {
//   console.log(data);
// });

// Fetch
function getTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    }); 
}

// getTodos();

/*
* Async/Await
* Async/Await is used to handle asynchronous operations.      
*/  

// const getTickets = async () => {
//     return 10;
// }   

// const buyTicket = async () => {
//     const tickets = await getTickets();
//     console.log(tickets);
// }

// buyTicket();

async function randomUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();
  console.log(data);
  console.log(data.name);
  console.log(data.email);
  console.log(data.address.street);
  console.log(data.address.suite);
  console.log(data.address.city);
  console.log(data.address.zipcode);
  console.log(data.address.geo.lat);
  console.log(data.address.geo.lng);
  console.log(data.phone);
  console.log(data.website);
  console.log(data.company.name);
  console.log(data.company.catchPhrase);
  console.log(data.company.bs);
}

randomUser();