const fn = () => {
  return function () {
    return "devMentor short function";
  };
};
const fn2 = (p) => p();
console.log(fn2(fn()));
