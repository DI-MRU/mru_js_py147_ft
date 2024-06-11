const slugify = require("slugify");

const words = (word) => {
  console.log(slugify(word));
};

const text = "Hello World";

// another way to export
// module.exports = words;

module.exports = {
  words,
  text,
};
