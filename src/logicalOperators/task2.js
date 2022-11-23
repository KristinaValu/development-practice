const a = "kkkkkkkkkkkkkkk";
const firstLetter = a[0];

if (a.length > 6 && firstLetter.toUpperCase() === firstLetter) {
  console.log("Long uppercase word");
} else if (a.length <= 6 && firstLetter.toLowerCase() === firstLetter) {
  console.log("Short lowercase word");
} else {
  console.log("Short uppercase or long lowercase");
}
