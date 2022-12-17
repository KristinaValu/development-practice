const complexObject = {};

complexObject.person = {
  name: "Dzon",
  email: "email@email.com",
  birthDate: 1998 - 09 - 09,
};

complexObject["academy"] = {
  title: "LearnAcademy",
  numberOfStudents: 303,
};

const print = (complexObject) => {
  console.log(`${complexObject.person.name} - ${complexObject.academy.title}`);
};
print(complexObject);
