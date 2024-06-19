# Introduction

## State

- **State** is a representation of the current state of the application.
- URL is considered the state
- in others, UI is considered the state
- overall data of the application is considered the state

E.g: https://localhost.com/products/1245

Id: 1245 is the state of the application

- when the page loads, it routes to the appropriate page / component, takes the id and load the data / state

## React State

1. Double binding vs Single binding

## Function definition vs Invoke

```jsx

class App extends React.Component {

  sayHello() {
    console.log('Hello World');
  }

  render() {
    return (
      <div>
        <h1 onClick="this.sayHello.bind()">Hello World</h1>
      </div>
    )
  }
}

```

## How we changed state previously?

- we need to get the data from the UI
- update the data
- update the UI

```html
<input type="text" id="name" class="input-type" />

<script>

  const name = document.getElementById('name');
  name.addEventListener('change', function() {
    console.log(name.value);
  });

</script>

```

Imagine if we have dozens of such elements including inputs, forms and others.
3 steps to manage everytime.

React solves this by abstracting the state change.

Then you can just focus on creating your components and let React handle the state management.
