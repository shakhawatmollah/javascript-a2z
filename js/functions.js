// JavaScript Function Learning

/* ==============================
* Code-Driven Invocation:
* Functioned is invoked (called)
* Called directly from other parts of the JavaScript code.
* Used for tasks like calculations, data manipulation, and logic execution.
================================ */

function aboutMe(name, age, developer, location = 'Dhaka') {
    console.log(`I am ${name}, I am ${age} years old and I live in ${location} and I am a ${developer}`);
}

aboutMe('Shakhawat', 40, 'Java Developer', 'Dhaka');
aboutMe('Tawfiq', 26, 'R Developer');

/* =============================
* Event-Driven Invocation
? Function When an event occurs
* Triggered by user interactions or system events.
* Common events: button clicks, form submissions, page loads, etc.
=============================== */

function doSubscribe(){
    console.log('Subscribed');
}

document.getElementById('btn').addEventListener('click', doSubscribe);

/* ================================
? Self-Executing Anonymous Function
* Executes immediately after being defined.
* Commonly used with Immediately Invoked Function Expressions (IIFEs).
================================== */

(function(name) {
    console.log(`Good Morning ${name}`);
}) ('Shakhawat');

(function(a, b) {
    console.log(a + b);
}) (4, 5);

/* ================================
* Function Expression
* Functions are stored in variables.
* Commonly used for higher-order functions.
================================== */

let manipulation = function(a, b) {
    return a * b;
}

console.log(manipulation(4, 5));
console.log(manipulation(6, 7));

/* ===================
? Anonymous Function
===================== */

let numbers = [ 3, 4, 5, 8, 11, 25];

numbers.forEach(function(number) {
    console.log(number);
});

let squares = numbers.map(function(number) {
    return number * number;
});
console.log(squares);

let divisibleBy5 = numbers.filter(function(number) {
    return number % 5 === 0;
});
console.log(divisibleBy5);

/* ================================
* Arrow Function
* Concise syntax for creating functions.
* Commonly used with Event Listeners.
================================== */

const aboutProgrammer = (name, age, developer, location = 'Dhaka') => {
    console.log(`I am ${name}, I am ${age} years old and I live in ${location} and I am a ${developer}`);
}

aboutProgrammer('Shakhawat', 40, 'Java Developer', 'Dhaka');

let summation = (a, b) => a + b;
console.log(summation(4, 5));

/* ================================
* Nested Functions
* Functions within functions.
* Commonly used for higher-order functions.
================================== */

function greeting(name) {
    function getGreeting(greeting) {
        return `${greeting} ${name}`;
    }
    return getGreeting('Hello');
}

console.log(greeting('Shakhawat')); 
