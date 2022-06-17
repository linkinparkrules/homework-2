let newArr = [1, 2, 3, 5, 4, 2, 6, 4];
function removeSameNum() {
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] === newArr[j]) {
                newArr.splice(j,1);
            }
            
        }
    }

   
}
removeSameNum();
console.log(newArr);