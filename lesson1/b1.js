let myString = prompt("please enter a string", "abcdef");
document.getElementById("initialString").innerHTML = myString;
let newString;
function reverse() {
    // chia string của thằng myString ra thành các mảng array
    const myArr = myString.split('');
    // đảo ngược các mảng array và nối chúng lại thành một string mới
    newString = myArr.reverse().join("");
    document.getElementById("reverseString").innerHTML = newString;
}
reverse();
console.log(myString);
console.log(newString);