const todos = fetch("https://jsonplaceholder.typicode.com/users");

// do something else here

// then response.json()
todos.then((response) => response.json()).then((data) => console.log(data));
