// 1. Remove Duplicate enteries from array
let arr = [1, 2, 3, 2, 3];

// Using sets
const arrSetUpdate = new Set([...arr]);
console.log(arrSetUpdate)

// 1.a Using Filter

{
    const arr = [3, 3, 5, 6, 7, 7];

    const arrNew = arr.filter((ele, index) => arr.indexOf(ele) == index)
    console.log(arrNew)
}

// 1.b 
{
    function removeDuplicates(string) {
        let result = "";
        const seen = [];
        for (const char of string) {
            if (!seen.includes(char)) {
                result += char;
                seen.push(char);
            }
        }
        return result;
    }

    const string = "helloworld";
    console.log(removeDuplicates(string));
}

//-------------------------------------------------------------

// 2. Remove Duplicate id in Array Object

let arrObj = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 2 },
    { id: 1 }
]

let uniqueArray = [];
let uniqueIds = [];

for (let i = 0; i < arrObj.length; i++) {
    let currentId = arrObj[i].id;
    console.log(currentId)
    if (!uniqueIds.includes(currentId)) {
        uniqueArray.push(arrObj[i]);
        uniqueIds.push(currentId);
    }
}
console.log(uniqueArray)

// 2.a. Using Filter
let uniqArr = [arrObj[0]]

const uniq = arrObj.filter((ele) => {
    let i = uniqArr.find(uni => uni.id === ele.id)
    !i && uniqArr.push(ele)
})
console.log('uniq: ', uniqArr)

