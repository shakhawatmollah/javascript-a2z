// JavaScript Call, Apply, Bind Learning

/* ==============================
* Call, Apply, Bind are used to invoke a function.
* They are used to change the context of a function.
* Call, Apply, Bind are used to invoke a function.
* Commonly used for higher-order functions.
================================== */

// Call

const busTransport = {
    name: 'Green Line Transport',
    busCode: 'GLP',
    tickets: [],
    bookTicket(seatNumber, passengerName) {
        console.log(`${passengerName} has booked a ${seatNumber} seat on ${this.name} ticket ${this.busCode}-${seatNumber}`);
        this.tickets.push({ ticketInfo: `${this.busCode}-${seatNumber}`, passengerName });
    }
};

busTransport.bookTicket('A1', 'Shakhawat');
busTransport.bookTicket('A2', 'Hapy');
console.log(busTransport);

// Call
busTransport.bookTicket.call(busTransport, 'A3', 'Liyana');

// Apply
busTransport.bookTicket.apply(busTransport, ['A4', 'Afra']);

// Bind
const bookTicketBind = busTransport.bookTicket.bind(busTransport);
bookTicketBind('A5', 'Ruma');
console.log(bookTicketBind);

const sohagTransport = {
    name: 'Sohag Transport',
    busCode: 'STP',
    tickets: []  
}

const bookedTicket = busTransport.bookTicket;

bookedTicket.call(sohagTransport, 'A6', 'Iman');
console.log(sohagTransport);

// Apply
bookedTicket.apply(sohagTransport, ['A7', 'Sufia']);
console.log(sohagTransport);

// Bind
const bookTicketBind2 = bookedTicket.bind(sohagTransport, 'EC');
bookTicketBind2('Sumon');
console.log(bookTicketBind2);

const person = {
    name: 'Shakhawat',
    age: 40,
    developer: 'Java Developer',
    location: 'Dhaka',
    aboutProgrammer: function(name = this.name, age = this.age, developer = this.developer, location = this.location) {
        console.log(`My name is ${name}. I am ${age} years old. I am a ${developer}. I live in ${location}.`);
    }
};

person.aboutProgrammer();

const aboutProgrammer = person.aboutProgrammer.bind(person);
aboutProgrammer();  

const aboutProgrammer2 = person.aboutProgrammer.bind(person, 'Tawfiq');
aboutProgrammer2();

const aboutProgrammer3 = person.aboutProgrammer.bind(person, 'Tawfiq', 26, 'Javascript Developer', 'Narayanganj');
aboutProgrammer3();

busTransport.busses = 20;
busTransport.buyBus = function () {
  //console.log(this);
  this.busses++;
  console.log(this.busses);
};

// busTransport.buyBus();

// document.querySelector('.btn').addEventListener('click', busTransport.buyBus);

document.querySelector('.btn').addEventListener('click', busTransport.buyBus.bind(busTransport));

// Partial Application

const calculateTax = (taxRate, amount) => {
    return amount * taxRate;
};

console.log(calculateTax(0.10, 100));

const calculateVat = calculateTax.bind(null, 0.15);
console.log(calculateVat(100)); 
