export const LargestMultiply = () => {
    const Arr = [2, 3, -5, -2, 4, 1000];
    let initialMul = Arr[0] * Arr[1];
    let x = 0;
    for (let i = 0; i < Arr.length - 1 ; i++) {
        let biggestMul = Arr[i] * Arr[i+1];
        if (initialMul > biggestMul) {
            x = initialMul;
        } else {
            x = biggestMul;
            initialMul = biggestMul;
        }
    }
    console.log(Arr);
    console.log("Tích to nhất bằng: " + x);
}

export const TeamWeight = () => {
    const weight = [60, 40, 55, 75, 64];
    const teamWeight = [0, 0]
    for (let i = 0; i < weight.length; i++) {
        if (i % 2 == 0) {
        teamWeight[0] += weight[i];
        } else {
            teamWeight[1] += weight[i];
        }
    }
    console.log("cân nặng của mọi người là: " + weight);
    console.log("cân nặng của team 1 và 2 lần lượt là: " + teamWeight);
}

