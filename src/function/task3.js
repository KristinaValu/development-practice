const first = function (a, b) {
  return function () {
    return a + b;
  };
};

const result = first(1, 9);
console.log(result());
