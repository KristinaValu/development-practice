let sum: number = 0;
const sumSquares = function (arr: number[]): number {
  arr.forEach((number) => {
    const value = Math.pow(number, 2);
    sum += value;
  });
  return sum;
};
console.log(sumSquares([4, 3, 5]));
