// JavaScript Array Learning

/* ==============================
* Arrays are used to store multiple values in a single variable.
* They are a way to group related data together.
* Arrays are created using the array literal syntax.
* Commonly used for storing data in a structured way.
================================== */

const numbers = [ 3, 4, 5, 8, 11, 25];

console.log(numbers[2]); // access element
console.log(numbers.at(2)); // access element

console.log(numbers.toString());
console.log(numbers.join('* '));

numbers[2] = 10;
console.log(numbers); // update element

numbers.push(30); // add last element
console.log(numbers);

numbers.pop(); // remove last element
console.log(numbers);

numbers.shift(); // remove first element
console.log(numbers);

numbers.unshift(1); // add first element
console.log(numbers);

numbers.splice(2, 1); // remove element at index 2
console.log(numbers);

numbers.splice(2, 0, 10); // add element at index 2
console.log(numbers);

console.log(numbers[numbers.length - 1]); // last element

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

numbers.sort(); // sort array
console.log(numbers);

numbers.reverse(); // reverse array
console.log(numbers);

/* ================================
* Array Concatenation
* Combining multiple arrays into a single array.
* Commonly used for merging arrays. 
================================== */

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);

const array4 = [7, 8, 9];
const arrayFinal = array3.concat(array4);
console.log(arrayFinal); 

// Array Flatting
const x = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
];   
const y = x.flat();
console.log(y);    

/* ================================
* Array Slicing
* Extracting a portion of an array into a new array.
* Commonly used for extracting data from an array.
================================== */

const array5 = [1, 2, 3, 4, 5];
const array6 = array5.slice(1, 4);
console.log(array6);

const array7 = [1, 2, 3, 4, 5];
const array8 = array7.slice(1);
console.log(array8);    

/* ================================
* Array Splicing
* Removing elements from an array.
* Commonly used for modifying data in an array.
================================== */

const array9 = [1, 2, 3, 4, 5];
const array10 = array9.splice(1, 3);
console.log(array9);
console.log(array10);
