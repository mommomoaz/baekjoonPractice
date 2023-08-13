let N = Number(prompt("Please enter a number:"));
if(N>1&&N<10){
    for (let M=1; M<10;M++) {
        console.log(N+'*'+M+'='+M*N)
    }    
}

//N이 1보다 크고 10보다 작다, M은 10보다 작다 라는 두 조건을 써야 할때 한 줄에 두 조건을 우겨넣으려고 하기보다는
//두 줄에 놔눠서 구분지을것.
//스트링이랑 변수를 같이 붙일때는 +로 할것. 