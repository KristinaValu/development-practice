let fn = (...args) => {
  let total = 0;
  for (const arg of args) {
    if (arg.includes(" ")) {
      total++;
    }
  }
  return total;
};

fn("dev Mentor", "devMentor", " ");

fn("a", "b", "c", "d", "e", "f");
