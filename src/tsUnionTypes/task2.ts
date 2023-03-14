function countUppercase(argument?: string): number | null {
  if (argument) {
    const letter = argument.split("").filter((char) => char.match(/[A-Z]/));
    return letter.length;
  } else {
    return null;
  }
}

console.log(countUppercase("devMentor"));
