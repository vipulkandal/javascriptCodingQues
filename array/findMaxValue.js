const randomArray = [1, 4, 98, 2, 5]

{ // Most effective
    const maxValue = arr => Math.max(...arr);
    console.log(maxValue(randomArray));
}

{// Wrong but effective method
    const maxValue = (arr) => arr.sort()[arr.length - 1]
    console.log(maxValue(randomArray))
}
{// Long method
    const maxValue = (arr) => {
        let maxNum = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxNum) {
                maxNum = arr[i];
            }
        }
        return maxNum;
    }

    console.log(maxValue(randomArray));
}