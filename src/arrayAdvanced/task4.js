const arr = [
  { name: "Tomas", age: 15 },
  { name: "Erika", age: 22 },
  { name: "Tomas", age: 17 },
  { name: "Audrius", age: 34 },
  { name: "Erika", age: 42 },
  { name: "Tomas", age: 19 },
];

function namesMap(arr) {
  const names = arr.reduce((accumulator, value) => {
    accumulator.set(value.name, accumulator.get(value.name) + 1 || 1);
    return accumulator;
  }, new Map());
  return names;
}
console.log(namesMap(arr));
