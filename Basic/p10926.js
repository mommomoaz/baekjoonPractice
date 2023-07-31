let input = prompt("입력");

if (!/^[a-z]+$/.test(input)) {
    console.log("아이디는 알파벳 소문자로만 이루어져야 합니다.");
} else if (input.length > 50) {
    console.log("아이디는 50자를 넘지 않아야 합니다.");
}
if (input === "baekjoon") {
    console.log(input + "??!");
} else {
    console.log("ok");
}


