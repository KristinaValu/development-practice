let firstString = "Hello";
let firstNumber = 987;
let firstUndefind;
let firstBoolean = true;
let firstBigInt = 123n;
let firstSymbol = Symbol("X");

console.log(
  `Initial value: ${firstString}, variable type ${typeof firstString}. `
);
console.log(
  `Initial value: ${firstNumber}, variable type ${typeof firstNumber}. `
);
console.log(
  `Initial value: ${firstUndefind}, variable type ${typeof firstUndefind}. `
);
console.log(
  `Initial value: ${firstBoolean}, variable type ${typeof firstBoolean}. `
);
console.log(
  `Initial value: ${firstBigInt}, variable type ${typeof firstBigInt}. `
);
console.log(
  `Initial value: ${
    firstSymbol.description
  }, variable type ${typeof firstSymbol}. `
);
