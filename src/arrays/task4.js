const average = (arr) => {
  const total = arr.reduce((currentTotal, item) => {
    return item + currentTotal;
  }, 0);
  const average1 = total / arr.length;
  return average1;
};

const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
console.log(arr);
console.log(average(arr));
