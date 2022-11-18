let variable;

if (typeof variable === "boolean") {
  console.log(`Variable is boolen: ${variable}`);
} else if (typeof variable === "number") {
  console.log(`Variable is a number. It's square is: ${(variable **= 2)}`);
} else if (typeof variable === "string") {
  console.log(`Variable is string: ${variable}`);
} else {
  console.log(`Variable type is: ${typeof variable}`);
}
