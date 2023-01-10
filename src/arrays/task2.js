const array = [];

const string = (text) => {
  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      array.push(text.charAt(i));
    }
  }
  return array;
};

console.log(string("devMentor - path to the developer career"));
