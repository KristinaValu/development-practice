function fn1() {
  console.log("Function declaration");
}
(function () {
  console.log("Anonymous function expression");
});
const fn2 = function () {
  console.log("Anonymous function expression");
};

let print = () => console.log("Arrow based function");
const fn3 = print;
fn1();
fn2();
fn3();
