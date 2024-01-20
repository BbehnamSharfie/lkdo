age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 200) ? "Too young" : "Oldu eough";
}

const numbers = [45, 2, 9, 16, 2015];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}
