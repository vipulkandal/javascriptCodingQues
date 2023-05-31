/*
Find the missing value of array. Array is not sorted.
*/

let randomArray = [1, 2, 3, 5, 6, 7, 9, 11];

const findMissingNumbers = (arr) => {
    let minVal = Math.min(...arr);
    let maxVal = Math.max(...arr);
    let missingNumbers = []

    for (let i = minVal; i < maxVal; i++) {
        if (arr.indexOf(i) < 0) missingNumbers.push(i)

    }
    return missingNumbers;
}

console.log(findMissingNumbers(randomArray))
