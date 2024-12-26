// JavaScript Object Learning

/* ==============================
* Objects are used to store data in key-value pairs.
* They are a way to group related data together.
* Objects are created using the object literal syntax.
* Commonly used for storing data in a structured way.
================================== */

const person = {
    name: 'Shakhawat',
    age: 40,
    developer: 'Java Developer',
    location: 'Dhaka',
    aboutMe: function() {
        return (`I am ${this.name}, I am ${this.age} years old and I live in ${this.location} and I am a ${this.developer}`);
    },

    address: 
        {
            permanentAddress: {
                city: 'Narayanganj',
                country: 'Bangladesh'
            },
            presentAddress: {
                city: 'Dhaka',
                country: 'Bangladesh'
            }
        }
};  

console.log(person.aboutMe());

console.log(person.name);
console.log(person.address.presentAddress.city);
console.log(person['address']['permanentAddress']['country']); // same as console.log(person.address.permanentAddress.country);

person.quality = 'Good';
person.age = 41;
console.log(person.quality);
console.log(person.age);

delete person.quality;
console.log(person.quality);

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('quality'));

console.log(Object.keys(person));
console.log(Object.values(person));

/*
 * Object Constractor
 * Singleton
 */

function Programmer(pname, age, major) {
    this.pname = pname;
    this.age = age;
    this.major = major;
}

const programmer1 = new Programmer('Shakhawat', 40, 'Java');
const programmer2 = new Programmer('Tawfiq', 26, 'R');
programmer2.pname = 'Tawfiqul Islam';
programmer2.level = 'Junior';

programmer1.skills = function() {
  return ['Java', 'Python', 'C++'];
};

console.log(programmer1.skills());
console.log(programmer2);

/*
 * Object Destructuring
 */

const { pname, age, major } = programmer1;
console.log(pname, age, major);  

const obj1 = {
    a: 1,
    b: 2,
    c: 3,
  };
  
  const obj2 = {
    p: 1,
    q: 2,
    r: 3,
  };
  
  const obj3 = {
    x: 1,
    y: 2,
    z: 3,
  };

// const objFinal = Object.assign(target, source);
// const objFinal = Object.assign({}, obj1, obj2, obj3);
const objFinal = { ...obj1, ...obj2, ...obj3 };
console.log(objFinal); 
