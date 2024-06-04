# Functions passing functions

```js

function ReadFile(args1, args2, callback) {
  console.log('A');
  if (args1 === '' && typeof args1 === 'string' && callback) {
    callback();
  }
}

function WhatDoToAfterReadFile() {
  console.log('B');
}


ReadFile('file.txt', 'utf-8', WhatDoToAfterReadFile)

function AnalyseFile(condition1, condition2, callback)
{
  if (condition1 && !condition2)
    {
      callback();
    }
}

AnalyseFile(true, false, function() {
  ReadFile('file.txt', 'utf-8', WhatDoToAfterReadFile)
});

// Async await version


```
## Different types of asynchronous / concurrent programming

- Callbacks
- Promises
- Async/Await

1. Processes
2. Threads
3. Events -> Delegate -> Callbacks
4. Callbacks
5. Concurrent programming
6. Observables - rxjs

Actor model
Actor Supervisor model.

## Migration Example

- Move from database to another
- Multiple entities
- We want to use threads / parallel processing
- We are using objects to connect to the databases
- We are using objects to model the entities

## CPU

- Single core
- Multi core
- Core consists of multiple threads
- Each thread can run a process
- Sub-processes
- Tasks

## Stack Data Structure

- LIFO

## Anonymouse functions vs Arrow functions

- Arrow functions are not hoisted (cannot be used before they are defined)
- Arrow functions do not have their own this
- Arrow functions do not have their own arguments

```js

class MyClass {
  // this ->
  constructor() {
    this.name = 'MyClass';
  }

  myFunction() {
    console.log(this.name);
  }

  myFunction2 = () => {
    console.log(this.name);
  }
}

function() {

  console.log('Hello');
}

() => {
  this.class = 'MyClass'; // this is not defined
  console.log('Hello');
}

```

## Function definition and invocation

1. Function definition
2. Function invocation / calling



## Another way of writing the synchronouse example

```js

const makeBurger = () => {
    const burger = putMeatBetwenBuns(getMeat, getyBuns);
    return burger;
};


```

## Promises

A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

Example:

```js

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Success');
  } else {
    reject('Error');
  }
});

```

Another real world example using multiple fetch requests:

```js

const promise1 = fetch('https://json
placeholder.typicode.com/todos/1'); // pending
const promise2 = fetch('https://json
placeholder.typicode.com/todos/2'); // pending

promise1
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values);
  });

```

No need to use return when using promises.

```js

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Success');
  } else {
    reject('Error');
  }
});

```

## JavaScript prototype

- JavaScript is a prototype-based language

What are prototypes?

- Prototypes are the mechanism by which JavaScript objects inherit features from one another

## Race condition

A race condition is a situation in which two or more threads or processes are reading or writing some shared data, and the final result depends on the timing of how the threads are scheduled.

Example with promises:

```js

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2');
  }, 2000);
});

Promise.race([promise1, promise2])
  .then((values) => {
    console.log(values);
  });

```
## How to use nodemon?

- Install nodemon globally using npm install -g nodemon
- Run nodemon in the terminal

e.g. nodemon index.js
