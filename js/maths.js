// JavaScript Maths Learning

/* ==============================
* Math Functions
* Commonly used for mathematical operations.
================================== */

console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

console.log(Math.floor(1.9)); // round down
console.log(Math.ceil(1.1)); // round up

console.log(Math.random()); // random

console.log(Math.pow(2, 3)); // power
console.log(2 ** 3); // power

console.log(Math.sqrt(25)); // square root

console.log(Math.abs(-5)); // absolute

console.log(Math.round(1.4));
console.log(Math.round(1.5));

console.log(Math.trunc(1.4));   
console.log(Math.trunc(1.5));

console.log(Math.sign(-5)); // 1 for positive, -1 for negative
console.log(Math.sign(0)); 
console.log(Math.sign(5));

console.log(Math.cbrt(27)); // cube root

console.log(Math.hypot(3, 4)); // hypotenuse

// Algebraic Functions
console.log(Math.exp(2)); // e^x
console.log(Math.log(2)); // ln(x)
console.log(Math.log10(2)); // ln(x) / ln(10)
console.log(Math.log2(2)); // ln(x) / ln(2)

// Trigonometric Functions
console.log(Math.sin(90));
console.log(Math.cos(0));
console.log(Math.tan(0));

console.log(Math.sin((90 * Math.PI) / 180));

console.log(Math.PI);
console.log(Math.E);

console.log(Math.random());
console.log(Math.random().toFixed(2)); // 0.12
console.log(Math.random().toFixed(2) * 10); // 0 - 9
console.log(Math.random().toFixed(2) * 10 + 1); // 0 - 10
console.log(Math.ceil(Math.random()));

// make a ludo game
let upperValue = 6;
let lowerValue = 1;
let resultValue = Math.ceil(
  Math.random() * (upperValue - lowerValue) + lowerValue
);
console.log(resultValue);

// make a dice game
function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let imageSource = 'img/' + randomNumber + '.png';
    document.getElementById('ludo').src = imageSource;
}
