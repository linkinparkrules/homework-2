let myArr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
let countMax = 0;
let appearMostNum = 0;
let count = 1;
function findNumAppearMost() {
    for (let i = 0; i < myArr.length; i++) {
        for (let j = i + 1; j < myArr.length; j++) {
            if (myArr[i] == myArr[j]) {
                count++;
            }
        }
        if (countMax < count) {
            countMax = count;
            appearMostNum = myArr[i];
        }
        count = 1;
    }
}
findNumAppearMost();

console.log(`count: ${countMax}`);
console.log(`value: ${appearMostNum}`);