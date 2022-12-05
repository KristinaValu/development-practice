const first = function (a, b) {
  const second = function () {
    return a + b;
  };
  return second;
};
const result = first(1, 9);
console.log(result());
