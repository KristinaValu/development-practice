function string(text) {
  let word = "";
  for (let i = 0; i <= text.length; i++) {
    if (i % 2 === 0) {
      upperCase = text.charAt(i).toUpperCase();
      word += upperCase;
    } else if (i % 2 !== 0) {
      lowerCase = text.charAt(i).toLowerCase();
      word += lowerCase;
    }
  }
  return word;
}
console.log(string("devMentor"));
