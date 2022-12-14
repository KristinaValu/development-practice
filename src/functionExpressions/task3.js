const fn = () => stringValue();

let stringValue = () => console.log("devMentor short function");

const fn2 = (p) => p;
let p = () => {};
fn2(fn());
