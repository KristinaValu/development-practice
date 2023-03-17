enum Color {
  Red = "#FF0000",
  Green = "#00FF00",
  Blue = "#0000FF",
}

function hexCode(color: Color): string {
  return color;
}
console.log(hexCode(Color.Red));
