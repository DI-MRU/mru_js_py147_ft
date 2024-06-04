// define your promise
// use it in a function
// a layer over your function

let goodGrades = 83;

let endSemester = new Promise(function (resolve, reject) {
  if (goodGrades > 90) {
    resolve("Computer");
  } else if (goodGrades > 80 && goodGrades <= 89) {
    resolve("Phone");
  } else {
    reject("I won't get the gift");
  }
});

endSemester.then((value) => {
  console.log(value);
});

endSemester.then(function (value) {
  console.log(value);
});

endSemester
  .then((value) => console.log(value))
  .catch((value) => console.log(value))
  .finally(() => console.log("I am done"));

let bankAmount = 1000;
let expense = 500;

let bankPromise = new Promise((resolve, reject) => {
  if (expense < bankAmount) {
    resolve(expense);
  } else {
    reject("Rejected by the Bank");
  }
});

bankPromise.then((value) => {
  console.log(value);
});

bankPromise.then(function (value) {
  console.log(value);
});

bankPromise
  .then((value) => console.log(value))
  .then((value) => console.log(value))
  .then((value) => console.log(value));

// we are just calling this promise multiple times
