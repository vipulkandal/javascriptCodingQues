// let str = "hi my name is Vipul Kandal"

// const reverseString = (str) => {
//     return str.split(" ").reverse().join(" ")
// }

// const splitWords = (str) => {
//     return str.split(" ")
// }

let str = "hi my name is Vipul Kandal"
const reverseEachWords = (str) => {
    let individualWord = str.split(" ");
    let result = []
    for (let i = 0; i < individualWord.length; i++) {
        result.push(individualWord[i].split("").reverse().join(""));
    }
    return result;
}
console.log(reverseEachWords(str)) // Output: [ 'ih', 'ym', 'eman', 'si', 'lupiV', 'ladnaK' ]

{
    // Optimised code
    const reverseEachWords = (str) => {
        return str.split(" ").map(word => word.split("").reverse().join(""));
    };

    const str = "hi my name is Vipul Kandal";
    console.log(reverseEachWords(str));

}