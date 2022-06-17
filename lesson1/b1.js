let myString = `abcdef`;
document.getElementById("initialString").innerHTML = myString;
// chia string của thằng myString ra thành các mảng array
const myArr = myString.split('');
// đảo ngược các mảng array và nối chúng lại thành một string mới
const newString = myArr.reverse().join("");
document.getElementById("reverseString").innerHTML = newString;
console.log(myString);
console.log(newString);