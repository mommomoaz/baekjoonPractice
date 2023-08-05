const userInput = prompt("Please enter a number:");
const y = Number(userInput);

if(1000>y||3000<=y){//input값이 이상한지 확인 
    console.log("Invalid input. Please enter a number between 1000 and 2999.");
Error();
}
let WestYear = y - 543;
console.log("West Year:", WestYear);


function check(){
    return("Invalid input. Please enter a number between 1000 and 2999.")
}
