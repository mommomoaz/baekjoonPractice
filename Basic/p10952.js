let A = Number(prompt("Please enter a numberA:"));
let B = Number(prompt("Please enter a numberB:"));

while(A!=0&&B!=0){
    if(A>0 && A<10&&B>0&&B<10){
        console.log(A+B)
        A = Number(prompt("Please enter a numberA:"));
        B = Number(prompt("Please enter a numberB:"));
    };
}




