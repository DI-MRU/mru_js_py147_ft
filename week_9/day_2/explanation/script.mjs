const fs = require("fs");

// will run second because it is asynchronous
fs.readFile("./text.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("1 " + data);
  }
});

// will run first because it is synchronous
const file = fs.readFileSync("./text.txt", "utf8");
console.log("2 " + file);

// export default file mjs(ES6)
export const hello = (word) => {
  console.log(word);
};

// another way to export
// export default hello;
