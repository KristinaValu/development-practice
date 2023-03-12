const sumSquares = function (arr: number[]): number {
  let sum: number = 0;
  arr.forEach((number) => {
    const value = Math.pow(number, 2);
    sum += value;
  });
  return sum;
};
console.log(sumSquares([4, 3, 5]));
