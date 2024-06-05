const student = {
  name: "John Doe",
  age: 16,
  scores: {
    maths: 74,
    english: 63,
    // science: 85
  },
};

// Without Destructuring
function displaySummary(student) {
  console.log("Hello, " + student.name);
  console.log("Your Maths score is " + (student.scores.maths || 0));
  console.log("Your English score is " + (student.scores.english || 0));
  console.log("Your Science score is " + (student.scores.science || 0));
}

// With Destructuring
function displaySummary({
  name,
  scores: { maths = 0, english = 0, science = 0 },
}) {
  console.log("Hello, " + name);
  console.log("Your Maths score is " + maths);
  console.log("Your English score is " + english);
  console.log("Your Science score is " + science);
}

displaySummary(student);

// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);

let myCar = {
  color: "blue",
  details: {
    plateNumber: 123,
    name: "Ford",
  },
};

let myNewCar = { ...myCar };
//
console.log(myCar === myNewCar); // false

console.log("myNewCar : ", myNewCar); //  copy

class Square {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea(value) {
    console.log(`value: ${this.height * this.width + value}`);
  }
}

const calculate = new Square(20, 20);
calculate.calcArea(2);

// const student = {
//   name: "John Doe",
//   age: 16,
//   scores: {
//     maths: 74,
//     english: 63,
//   },
// };

// We define 3 local variables: name, maths, science
// Default value to the variable science, in case the key doesn't exist in the object student
const {
  name,
  scores: { maths, science = 20 },
} = student;

console.log(
  `${name} scored ${maths} in Maths and ${science} in Elementary Science.`
);
// John Doe scored 74 in Maths and 50 in Elementary Science.

console.log([..."abc"]);

let newObj = { ..."abc" };
console.log(newObj);

let newObj12 = { ...["a", "b"] };
console.log(newObj12);

const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };
console.log(admin);

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    return `The ${this.type} rabbit says '${line}'`;
  }
}
let killerRabbit = new Rabbit("killer");
console.log(killerRabbit.speak("hello"));
let blackRabbit = new Rabbit("black");
console.log(blackRabbit.speak("bob"));

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.height * this.width; // 100
  }

  // Setter
  set area(factor) {
    this.width = this.height * factor; // 100 * 2
  }
}

const square = new Rectangle(10, 10);
square.area = 2;
console.log(square.area);

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, noise) {
    super(name); // call the super class constructor and pass in the name parameter
    // Add a new property
    this.noise = noise;
  }

  speak() {
    console.log(`${this.name} barks.It says ${this.noise}`);
  }
}

let d = new Dog("Mitzie", "Wouaf");
console.log(d.name); // Mitzie
d.speak(); // Mitzie barks.It says Wouaf
