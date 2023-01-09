const smallestNumber = (array) => Math.min(...array);

const array = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 1000)
);
console.log(array);
console.log(smallestNumber(array));
