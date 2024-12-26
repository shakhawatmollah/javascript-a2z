// JavaScript Memories Learning

/* ==============================
* Memories are used to store data in a structured way.
* They are a way to group related data together.
* Memories are created using the memory literal syntax.
* Commonly used for storing data in a structured way.
================================== */

/*
* Call Stack Memory
* Primitive Data Type
* String, Number, Boolean, Undefined, Null, Symb, BigInt
*/

let fullName = 'Shakhawat';
let age = 40;

fullName = 'Tawfiq';

console.log(fullName);
console.log(age);

/*
* Heap Memory
* Non-Primitive Data Type
* Array, Object, Function
*/

let programmer = {
    name: 'Shakhawat',
    age: 40,
    developer: 'Java Developer',
};

let developer = programmer; // Shallow Copy

developer.name = 'Tawfiq'; // Change in developer will change in programmer. (Deep Copy)

console.log(programmer);
console.log(developer);

// Array

let cars = ['BMW', 'Audi', 'Mercedes'];

let newCars = cars; // Shallow Copy
newCars[0] = 'Tesla'; // Change in newCars will change in cars. (Deep Copy)

console.log(cars);
console.log(newCars);

// Memory Leak

let person = {
    name: 'Shakhawat',
    age: 40,
    developer: 'Java Developer',
};

let programmer1 = person; // Shallow Copy

person = null; // Memory Leak

console.log(programmer1);
console.log(person);

