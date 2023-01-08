const person = {
  name: "Santa",
  surname: "Claus",
  age: 333,
  birthDate: new Date("1900-12-30"),
};

const func = ({ name, surname, age }) =>
  (transformedPerson = {
    fullName: `${person.name} ${person.surname}`,
    nickname: `${person.surname}${age}`,
  });
console.log(func(person));
