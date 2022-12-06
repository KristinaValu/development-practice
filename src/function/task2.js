function string(text) {
  let word = "";
  for (let i = 0; i <= text.length; i++) {
    if (i % 2 === 0) {
      word += text.charAt(i).toUpperCase();
    } else {
      word += text.charAt(i);
    }
  }
  return word;
}
console.log(string("devMentor"));
