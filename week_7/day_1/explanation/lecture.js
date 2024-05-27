//  normal function
// function test() {
//   console.log('test')
// }

// arrow function
// const test = () => {
//     console.log('test')
//     }


// param
// function test(param){
//     console.log(param)
// }

// Arugment
// console.log(test('test'))

//global variable 
// let eyeColor = "blue";

// function userMoreInfo (userName, userAge) {
//     console.log("My name is " + userName + ", my age is " + userAge + ", I have " + eyeColor + " eyes");
// }

// userMoreInfo("Sarah", 22); //My name is Sarah, my age is 22, I have blue eyes
// console.log(eyeColor); // blue

// function favoriteColor () {
//     console.log("My favorite color is " + eyeColor);
// }

// favoriteColor(); //My favorite color is blue

// try- catch
const func = () => {
    try {
        console.log("starting the try block")
        //Unexisting variable
        hello
        //not accessed if there is an error with the above code
        console.log("finishing the try block")
    } catch (err) {
        console.log("starting the catch block")
        console.log(err)
    } finally {
        console.log("Function done")
    }
}

func()