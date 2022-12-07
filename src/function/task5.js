const fn = function (a) {
  const second = function () {
    return a;
  };
  return second;
};

const fnResult = fn(5);
console.log(fnResult());
