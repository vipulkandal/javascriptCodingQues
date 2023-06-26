function removeDuplicates(string) {
    const charCount = []
    let result = "";
    for (const char of string) {
        console.log(charCount)
        charCount[char]++;
    }
    for (const char of string) {
        if (charCount[char] === 1) {
            result += char;
            console.log(result)
        }
    }
    return result;
}

const string = "abdaabbbacd";
console.log(removeDuplicates(string));