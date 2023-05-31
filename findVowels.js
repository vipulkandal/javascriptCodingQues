let str = 'abcbehkdgo';
let vowels = ['a', 'e', 'i', 'o', 'u']

// Using for loops
{
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(count)
}

// Using Reduce
{
    const findVowels = () => {
        return str.toLowerCase().split("").reduce((acc, char) => {
            if (vowels.includes(char)) acc++
            return acc
        }, 0)
    }
    console.log(findVowels())
}

// Cleaner Method
{
    const findVowels = () => {
        return str.toLowerCase().split("").reduce((acc, char) => vowels.includes(char) ? acc + 1 : acc, 0)
    }
    console.log(findVowels())
}