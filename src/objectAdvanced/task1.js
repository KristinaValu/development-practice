const object = {
  name: "Kristina",
  surname: "Va",
};

const print = (object) => {
  for (const property in object) {
    console.log(`field title: ${property}, value: ${object[property]}`);
  }
};

print(object);
