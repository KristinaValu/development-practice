const fn = (obj, field, value) => ({ ...obj, [field]: value });

console.log(
  fn({ name: "Kristina", surname: "Va", age: 33 }, "surname", "Hello")
);
console.log(fn({ name: "Kristina", age: 33 }, "surname", "Hello"));
