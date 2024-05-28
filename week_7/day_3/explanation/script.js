// const Checkyear = (year) => {
//     if (year === 2000 ? 'You are in the 21st century' : 'You live in the Middle Age');
// }

// console.log(Checkyear(2000));

const Checkyear = (year) => {
  return year === 2000
    ? "You are in the 21st century"
    : "You live in the Middle Age";
};

console.log(Checkyear(2000));

// var a = 5;
// var b = 10;
// console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

// function numbers() {
//     for (var i = 0; i < 5; i += 1) {
//       console.log(i);
//     }
//       console.log(i);
//   }
//   numbers();

function myFunc(x, y) {
  return x + y;
}

console.log(myFunc(2, 9));

const myFunc1 = (x, y) => {
  return x + y;
};

console.log(myFunc1(6, 7));

const show = (x) => x * 2;

console.log(show(2));

const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(Capitalize("hello"));

const calculate = (num1, num2, operator) => {
  return operator === "+"
    ? num1 + num2
    : operator === "-"
    ? num1 - num2
    : operator === "*"
    ? num1 * num2
    : operator === "/"
    ? num1 / num2
    : "Invalid operator";
};

console.log(calculate(2, 3, "+"));

(function (name) {
    console.log("Hello " + name);
})("Sarah")

function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }

console.log(addSquares(2, 3));

function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  
  let fnInside = outside(3);
  console.log(fnInside) 
  // function inside(y) {
  //    return x + y;
  //  }
  console.dir(fnInside) 
  // Closure (outside) x: 3
  
  let result = fnInside(5); // The same as calling outside(3)(5)
  console.log(result) // returns 8

  let add = (function () {
    let counter = 0;
    function calculus() {
        counter += 1; 
        return counter
    }
    return calculus
  })();
  
  add();
  add();
  add();
  console.log(add()); // returns 4

  const g = n => n + 1;
const f = n => n * 2;

const h = x => f(g(x));

console.log(h(20)); // 42

let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);