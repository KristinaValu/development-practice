interface Car {
  make: string;
  model: string;
  year: number;
}

let carsArray: Car[] = [
  {
    make: "Volvo",
    model: "XC60",
    year: 2007,
  },
  {
    make: "Audi",
    model: "A6",
    year: 1988,
  },
  {
    make: "Renault",
    model: "Megane",
    year: 2011,
  },
  {
    make: "Lexus",
    model: "RX450",
    year: 2014,
  },
];

function oldestCar(carsArray: Car[]): string {
  const oldestCar = carsArray.reduce((prev, current) => {
    return current.year > prev.year ? prev : current;
  });
  const string1 = `${oldestCar.make} ${oldestCar.model}`;
  return string1;
}

console.log(oldestCar(carsArray));
