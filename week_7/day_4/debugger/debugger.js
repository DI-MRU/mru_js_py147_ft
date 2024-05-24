function sumNumbers() {
    let numbers = [1, 2, 3, 4, 5];
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        debugger; 
        sum += numbers[i];
    }

    return sum;
}

console.log(sumNumbers());

// var , let ,const

const value = 10;
// value = 20; // error

// let value2 = 10;
value2 = 20; // no error

let value2 = 30; // error

var value3 = 10;
value3 = 20;

