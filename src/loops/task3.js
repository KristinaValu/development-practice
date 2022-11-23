const course = "Fundamentals";
let count = 0;
for (let i = 0; i <= course.length; i++) {
  if (course.charAt(i) === "a") {
    count++;
  }
}
console.log(`a letters: ${count}`);
