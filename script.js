// Dog Object

const dog = {
    name: "Scooby",
    bark() {
        console.log("woof, I'm " + this.name + "!")
    }
}

console.log(dog.name)
dog.bark()
console.log(dog)

// Person Object
const person = {
    firstName: 'John',
    lastName: 'Wick',
    name() {
        return this.firstName + " " + person.lastName
    },
    birthYear: 1968,
    ageThisYear() {
        let currentYear = new Date();
        return currentYear.getFullYear() - this.birthYear
    }
}

// Define a variable called somestring
const someString = 'any string';

console.log(someString.length);

someString.length = 200;

console.log(someString.length);
    // Length will not change

const decimalNumber = 0.13224125123;

console.log(decimalNumber.toFixed(3))

// sum function

const sum = function(num1, num2) {
    return num1 + num2
}

console.log(sum(2,4))

console.log(sum.name)

console.log(sum.toString())


// Arrays

let names = ['david', 'gordon', 'sahil']

console.log(names)

// Add elements to names

names.push("element1", "Another Element")

console.log(names)

console.log(names[names.length - 2])

console.log(document.querySelectorAll("p")[0])

// Change second P
document.querySelectorAll("p")[1].textContent = "JavaSript was here!"





