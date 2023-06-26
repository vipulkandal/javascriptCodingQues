// result in array, len is upto which number we want febo series
let febo = (result, len) => {

    let num1 = result[0],
        num2 = result[1],
        next,
        count = 2;

    while (count < len) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        result.push(next)
        count++;
    }
    return result;

}

let feboReccursion = (result, len) => {
    if (result.length >= len) {
        return result;
    }

    result.push(result[result.length - 2] + result[result.length - 1])
    return feboReccursion(result, len)
}

console.log(feboReccursion([0, 1], 15))