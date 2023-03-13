function countUppercase(argument?: string): number | null {
  let letArray: string[] = [];
  if (typeof argument === "string") {
    const strToArr = argument.split("");
    strToArr.forEach((letter) => {
      if (letter === letter.toLocaleUpperCase()) {
        letArray.push(letter);
      }
    });
    return letArray.length;
  } else {
    return null;
  }
}

console.log(countUppercase("devMentor"));
