const variableArray: string[] = ["Hello", "nice", "typeScript"];
const numberArray: number[] = [];

variableArray.forEach((variable) => {
  numberArray.push(variable.length);
});

console.log(numberArray);
