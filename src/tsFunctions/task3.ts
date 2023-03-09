const removeVowels = function (str: string) {
  return str.replace(/[aeiouAEIOU]/g, "");
};
console.log(removeVowels("Hello world!"));
