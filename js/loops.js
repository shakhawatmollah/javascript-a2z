// JavaScript Loops Learning

/* ==============================
* Loops are used to repeat a block of code multiple times.
* They are a way to automate repetitive tasks.
* Loops are created using different types of loops.
* Commonly used for iterating over data structures.
================================== */

for (let i = 0; i < 10; i++) {
  //  console.log(i);
}


for (let i = 0; i < 10; i++) {
    if (i === 5) {  
        continue;   
    }
   // console.log(i);
}


for (let i = 0; i < 10; i++) {
    if (i === 5) {  
        break;   
    }
  // console.log(i);
}

let cars = ['BMW', 'Mercedes', 'Audi', 'Ferrari', 'Lamborghini'];
for (let i = 0; i < cars.length; i++) {
    //console.log(cars[i]);
}


for (let i = 0; i < cars.length; i++) {
    if (cars[i] === 'Audi') {   
        break;   
    }
   // console.log(cars[i]);
}

// In Loop
let person = {
    name: 'Shakhawat',
    age: 40,
    location: 'Dhaka',
    developer: 'Java Developer',
};

// for in loop
for (let key in person) {
    let capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
   // console.log(capitalizedKey, ': ', person[key]);
}


// for of loop
for (let car of cars) {
   // console.log(car);
}   

// while loop
let i = 0;
while (i < 10) {
   // console.log(i);
    i++;
}


// do while loop
let j = 0;
do {
  // console.log(j);   
    j++;
} while (j < 10);


// forEach loop
cars.forEach((car) => {
  // console.log(car);
});


// map loop
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => 
    console.log(number * number)
);
//console.log(squares);


// filter loop
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);


// reduce loop
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);

// sort loop
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);