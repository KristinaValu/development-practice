enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}
const todayIs = (day: Day): string => `Today is ${day}`;

console.log(todayIs(Day.Thursday));
