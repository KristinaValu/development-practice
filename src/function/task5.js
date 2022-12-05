const fn = function (a) {
  let b = arguments[0];
  const second = function () {
    return b;
  };
  return second;
};

const fnResult = fn(5);
console.log(fnResult());
