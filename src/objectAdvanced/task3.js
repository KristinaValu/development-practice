const objectA = {
  first: "aa",
  second: "bb",
  third: "cc",
};
const objectB = {
  number1: 11,
  number2: 22,
  number3: 33,
  number4: 44,
};

const func = (objectA, objectB) => ({ ...objectA, ...objectB });
console.log(func(objectA, objectB));
