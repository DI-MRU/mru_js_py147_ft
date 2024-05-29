// Code Explanation
const Checkyear = (year) => {
  // Check if the year is 2000
  return year === 2000
    ? "You are in the 21st century" // If the year is 2000, return this message
    : "You live in the Middle Age"; // If the year is not 2000, return this message
};

console.log(Checkyear(2000)); // "You are in the 21st century"


// this is a normal function
function Name(name) {
  console.log(name);
}

Name("tushil");

// this is an arrow function
const LastName = (lastName) => {
  console.log(lastName);
};

LastName("Gunness");

const show = (x, y) => x + y;

console.log(show(1, 2));

let username = "john"; // j          //J         //John
const changeUsername = () =>
  username.charAt(0).toUpperCase() + username.slice(1);
console.log(changeUsername()); // "John"


//Function to calculate the sum of two numbers
const calculator = (num1, num2, operator = "+") => {
  // Check the operator and return the result
  return operator === "+" // if operator is +, return the sum of the two numbers
    ? num1 + num2 
    : operator === "-" // if operator is -, return the difference of the two numbers
    ? num1 - num2
    : operator === "*" // if operator is *, return the product of the two numbers
    ? num1 * num2
    : "Wrong Operator"; // if the operator is not +, -, or *, return this message
};

console.log(calculator(1, 20));

const hummus = function(factor) {
  // Function to calculate the amount of ingredients needed
  const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
          unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  // Call the ingredient function with the amount of each ingredient needed
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
// Call the hummus function with the factor 2
hummus(2)

let add = (function () {
  let counter = 0;
  function calculus() {
    counter += 1;
    return counter;
  }
  return calculus;
})();

add();
add();
console.log(add()); // return 3

// Function to calculate the sum of two numbers
const g = n => n + 1;
const f = n => n * 2;

const h = x => f(g(x));

console.log(h(20)); // 42

// what is the output of the following code? Hey! or Hello? Answer: Hello
// Explanation: The variable c is an object with a property greeting set to "Hey!". The variable d is assigned to c, which means that d is a reference to the object c. When the greeting property of c is changed to "Hello", the value of d.greeting is also changed to "Hello".
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);


//currying
const multiply = (n, m) => n * m;
multiply(3, 4) === 12; // true

const curryedMultiply = (n) => (m) => multiply(n, m);
console.log(curryedMultiply(3)(2));


// is object1 equal to object2? Answer: true 
// is object1 equal to object3? Answer: false because object3 is a new object
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 10;
console.log(object2.value); // 10
console.log(object3.value); // 10

// object1.value and object2.value are equal because object2 is a reference to object1. object3 is a new object with the same value as object1, but it is not the same object. Therefore, object1.value and object3.value are not equal.
console.log(object1.value === object3.value); // true


// Object
let user = {
  name: 'Tushil',
  age: 21
}

// Accessing object properties using dot notation
console.log(user.name)


// Object constructor
let user2 = new Object()
user2.name = 'Tushil_1'
user2.age = 21

// Accessing object properties using bracket notation
console.log(user2['name'])


let users = 'Tushil'
// Check if the string contains the word 
console.log(users.includes('t')) // false
console.log(users.includes('T')) // true
