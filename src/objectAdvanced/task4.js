let obj = {};
const fn = (obj, field, value) => {
  const copy = { ...obj };
  for (let property in copy) {
    if (property === field) {
      delete copy[property];
      copy[field] = value;
    } else if (property != field) {
      copy[field] = value;
    }
    return copy;
  }
};

console.log(
  fn({ name: "Kristina", surname: "Va", age: 33 }, "surname", "Hello")
);
console.log(fn({ name: "Kristina", age: 33 }, "surname", "Hello"));
