const variableArray: string[] = ["Hello", "nice", "typeScript"];
const numberArray: number[] = [];

for (let i = 0; i < variableArray.length; i++) {
  const number = variableArray[i].length;
  numberArray.push(number);
}
console.log(numberArray);
