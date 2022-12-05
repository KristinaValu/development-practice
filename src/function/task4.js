const binaryFn = function (a, b) {
  return a * b;
};

let c = binaryFn;
function fn(a, b, c) {
  let result = c(a, b);
  return result;
}

console.log(fn(3, 8, binaryFn));
