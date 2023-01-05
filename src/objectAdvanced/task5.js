const person = {
  name: "Santa",
  surname: "Claus",
  age: 333,
  birthDate: new Date("1900-12-30"),
};

const func = (person) => {
  const { name, surname, age } = person;
  const transformedPerson = {
    fullName: `${person.name} ${person.surname}`,
    nickname: `${person.surname}${age}`,
  };
  return transformedPerson;
};
console.log(func(person));
