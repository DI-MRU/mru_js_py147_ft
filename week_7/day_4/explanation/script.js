const myArray = [2, 3, 4, 5, 6];

//1st example with arrow function
myArray.forEach((number, index) => {
  console.log("number: ", number); // logs each element of the array
  console.log("index: ", index); // logs each index of the array
});

// without forEach
for (let i = 0; i < myArray.length; i++) {
  console.log("number: ", myArray[i]);
  console.log("index: ", i);
}

//2nd example with arrow function
myArray.forEach((number, i, arr) => {
  arr[i] = arr[i] * 2;
});

console.log(myArray);
//output : [ 4, 6, 8, 10, 12 ]

//2nd example with function expression
myArray.forEach(function (number, i, arr) {
  arr[i] = number * 2;
});

console.log(myArray); // output : [ 8, 12, 16, 20, 24 ]

const numbers = [10, 11, 12, 15, 20];
// return even numbers
numbers.forEach((number) => {
  if (number % 2 === 0) {
    console.log(number); // 10, 12, 20
  }
});

// const words = ["wow","hey","bye"];

// Check if at least one element of the array starts with the letter 'h'
// const result = words.some((word) => {
//     return word.startsWith("h")
// })

// console.log(result) // true

// const words = ["hello","hey","hola"];

// // Check if all the elements of the array start with the letter 'h'

// const result = words.every((word) => {
//     return word.includes("h")
// })

// console.log(result) // true

// function map(array, transform) { //pass an array as an argument, and the way of transforming the array
//     let mapped = []; //creates a new array
//     for (let element of array) {
//         mapped.push(transform(element)); //push the transformed element of the initial array into the new array
//     }
//     return mapped;//return the new array
// }

let myArray1 = [1, 2, 3, 4, 5]; //initial array
let myArray2 = myArray1.map((x, index, arr) => x * 2); //create a new array with the elements of the initial array multiplied by 2
console.log(myArray2); //output: [ 2, 4, 6, 8, 10 ]

const firstArr = [1, 4, 9, 16];

const secondArr = firstArr.map((value, index, arr) => {
  console.log(value); // each element
  console.log(index); // each index
  console.log(arr); // the firstArr (logged 4 times)
  return value * index;
});

console.log(secondArr);
//expected output : [ 0, 4, 18, 48 ]

// what is the output of the following code? Answer: [ { value: 10, index: 0 }, { value: 20, index: 1 }, { value: 30, index: 2 }, { value: 40, index: 3 } ]
let myArr = [10, 20, 30, 40];

let newArr = myArr.map((val, i, arr) => {
  return {
    value: val,
    index: i,
  };
});

console.log(newArr); // [ { value: 10, index: 0 }, { value: 20, index: 1 }, { value: 30, index: 2 }, { value: 40, index: 3 } ]

// function filter(array, test) { //pass an array as an argument, and the test (ie. the condition)
//     let passed = []; //creates a new array
//     for (let element of array) {
//         if (test(element)) {
//             passed.push(element); //push the elements inside the new array if the condition is true
//         }
//     }
//     return passed; //return the new array
// }

const myArray3 = [1, 2, 3, 4, 5]; //initial array
const myArray4 = myArray3.filter((x) => x % 2 === 0); //create a new array with the elements of the initial array that are even
console.log(myArray4); //output: [ 2, 4 ]

// function reduce(array, combine, start) { //pass the array, pass the way of combining each element of the array with the current value
//     let current = start;
//     for (let element of array) {
//         current = combine(current, element);
//     }
//     return current; // return the value
// }

const arr = [1, 4, 9, 16];

let sum = arr.reduce((acc, val) => {
  console.log(`acc: ${acc}`); // 1, 5, 14, 30
  console.log(`val: ${val}`); // 4, 9, 16, 25
  console.log(`acc + val: ${acc + val}`); // 5, 14, 30, 55
  return acc + val;
}, 0); // 0 is the initial value of the accumulator

console.log(sum); // 30

let party = [
  {
    desert: "Chocolate Mousse",
    calories: 30,
  },
  {
    desert: "Apple Pie",
    calories: 15,
  },
  {
    desert: "Croissant",
    calories: 50,
  },
  {
    desert: "Strawberry Icecream",
    calories: 5,
  },
];

let totalCalories = party.reduce((acc, val) => {
  // if the desert is not Apple Pie, add the calories to the accumulator
  if (val.desert !== "Apple Pie") {
    return acc + val.calories;
  }
  return acc;
}, 0);

console.log(totalCalories); // 85

let prices = [12, 20, 18];
let newPriceArray = [...prices];
console.log(newPriceArray); // [ 12, 20, 18 ]

let alphabets = ["A", ..."BCD", "E"];
console.log(alphabets); // [ 'A', 'B', 'C', 'D', 'E' ]

let word = "Hello";
console.log(word.includes("e")); // true
console.log(word.startsWith("H")); // true

let bottle = "bottle";
console.log(bottle.replace(/[t]/g, "z")); // 'bozzle'


// new way of writing functions
function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "invalid";
  }
}

console.log(calculate(2, 3, "+")); // 5


// arrow function
const calculate1 = (num1, num2, operator) => {
  return operator === "+"
    ? num1 + num2
    : operator === "-"
    ? num1 - num2
    : operator === "*"
    ? num1 * num2
    : operator === "/"
    ? num1 / num2
    : "invalid";
};

console.log(calculate1(4, 2, "-")); // 2
