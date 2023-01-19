const first = [
  { id: 4, name: "Lecturer" },
  { id: 3, title: "devMentor" },
  { id: 5 },
  { id: 7 },
];
const second = [1, 7, 22, 2, 10, 5];

const func = (first, second) => {
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i].id)) {
      first.splice(i, 1);
      i--;
    }
  }
  return first;
};

console.log(func(first, second));
