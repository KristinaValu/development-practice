const human = {
  firstName: "Santa",
  lastName: "Claus",
  age: 303,
  isDeveloper: false,
};

const func = (human) => {
  if (!human.isDeveloper) {
    return `${human.firstName} ${human.lastName} (${human.age}) is not a developer.`;
  } else {
    return `${human.firstName} ${human.lastName} (${human.age}) is a developer.`;
  }
};

func(human);
