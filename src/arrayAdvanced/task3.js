const array = [
  { name: "Tomas", age: 15 },
  { name: "Erika", age: 22 },
  { name: "Saulius", age: 17 },
  { name: "Audrius", age: 34 },
];

const functionAdult = (array) => {
  let newArray = array.filter((item) => item.age >= 18);
  return newArray.map((item) => item.name);
};
console.log(functionAdult(array));
