const userInput = prompt("Please enter a number:");
const y = Number(userInput);

if (y >= 1000 && y < 3000) {
  let WestYear = y - 543;
  console.log("West Year:", WestYear);
} else {
  console.log("Invalid input. Please enter a number between 1000 and 2999.");
}