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