const human = {
  firstName: "Santa",
  lastName: "Claus",
  age: 303,
  isDeveloper: false,
};

const func = (human) => {
  if (human.isDeveloper === false) {
    return console.log(
      `${human.firstName} ${human.lastName} (${human.age}) is not a developer.`
    );
  } else {
    return console.log(
      `${human.firstName} ${human.lastName} (${human.age}) is a developer.`
    );
  }
};

func(human);
