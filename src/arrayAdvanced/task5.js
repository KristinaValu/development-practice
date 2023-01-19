const arr = ["devMentor", "cool", "academy", "devMentor"];

function unique(arr) {
  return Array.from(new Set(arr));
}
console.log(unique(arr));
