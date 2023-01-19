const first = [
  { id: 4, name: "Lecturer" },
  { id: 3, title: "devMentor" },
  { id: 5 },
];

const second = { id: 3 };

const func = (first, second) => {
  const indexValue = first.findIndex((item) => item.id === second.id);
  if (indexValue === -1) {
    first.push(second);
  } else {
    first.splice(indexValue, 1, second);
  }
  return first;
};
console.log(func(first, second));
