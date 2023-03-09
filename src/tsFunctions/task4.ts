const findShortest = function (str: string[]) {
  const word = str.sort((a, b) => a.length - b.length);
  return word[0];
};
console.log(findShortest(["devMentor", "TypeScript", "fundamentals"]));
