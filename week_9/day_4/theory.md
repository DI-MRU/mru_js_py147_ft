# Day 4

## API

URL Params:

- http://localhost:3000/api/v1/123455

Search Params:

- http://localhost:3000/api/v1/123455?search=hello

Body Params:

- http://localhost:3000/api/v1/123455
  - Body: { "name": "John Doe" }

In your codes, you can access these parameters using the following methods:

- URL Params: `req.params`
- Search Params: `req.query`
- Body Params: `req.body`

We used req parameter from ExpressJS.

Request, Response are naming in a library called Next.


## Templating

EJS is a templating engine that lets you generate HTML markup with plain JavaScript.

```html

<% if (user) { %>
  <h2><%= user.name %></h2>

  <ul>
    <% user.pets.forEach(function(pet) { %>
      <li><%= pet.name %></li>
    <% }); %>

    </ul>

    <% } %>

    ```

### Moustache

```html
{{#user}}
  <h2>{{name}}</h2>

  <ul>
    {{#pets}}
      <li>{{name}}</li>
    {{/pets}}
  </ul>
{{/user}}
```

## Nullable

Nullable is a type that represents a variable that can be assigned a value or null.

```typescript
let x: number | null = 10;
```

This prevents null pointer exceptions.

It's a good practice to check the length or value of a variable before using it.

```typescript
if (x) {
  console.log(x);
}
```
For an array, it would be like this:

```typescript
if (arr.length > 0) {
  console.log(arr[0]);
}
```

## Try Catch

Try Catch is a block of code that catches errors and handles them gracefully.

```typescript
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}
```

## DRY

DRY stands for Don't Repeat Yourself.

It's a principle in software development that encourages you to avoid duplicating code.

Instead, you should create reusable functions or classes that can be used in multiple places.

> Too much DRY though, makes the codes more complex.

Any type of config, try to keep it in a single place e.g. constants, environment variables, etc.

You can use .env file as environment variables. You can also for instance have a config file e.g. appsettings.json, used in dotnet.

## WET - Write Everything Twice

WET stands for Write Everything Twice.

It's an anti-pattern that encourages you to duplicate code instead of reusing it.

1. Write your codes normally
2. If you see a duplication, for the first one, leave it as it is
3. If you see a second duplication, then refactor it to use a single function / view / class / etc.

```jsx

<button className="px-1 bg:primary colour:secondary list-users-button" onClick=handleListUsers() >List Users</button>

<button className="px-1 bg:primary colour:secondary" onClick=handlePets() >List Pets</button>

// create a reusable component that we just pass the text

<Button text="List Users" />

```
