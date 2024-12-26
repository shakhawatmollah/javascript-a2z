// JavaScript Number Learning

/* ==============================
* Numbers are used to store numeric values.
* They are a way to represent numerical data.
* Numbers are created using the number literal syntax.
* Commonly used for mathematical operations.
================================== */

const num1 = 5;
const num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(num1 ** num2);

let num3 = 5;

// Increment and Decrement
console.log(num3++);
console.log(num3--);    

console.log(++num3);
console.log(--num3);

// NaN
console.log(5 / 'hello');

// Infinity
console.log(5 / 0);

// Number to String
console.log(num1 + '');

// String to Number
console.log(Number('5'));

// ParseInt
console.log(parseInt('5'));

// ParseFloat
console.log(parseFloat('5.5'));

const num4 = 54582.564245184;

console.log(num4.toFixed(2));
console.log(Math.round(num4));
console.log(num4.toPrecision(3));

console.log(Math.ceil(num4));
console.log(Math.floor(num4));
