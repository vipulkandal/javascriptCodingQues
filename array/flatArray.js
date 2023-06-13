let arr = [1, 2, 3, [2, 4], [6, 8]]

let flattenArray = (arr) => {
    let flatArr = []
    flatArr = arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc = acc.concat(flattenArray(item))
        }
        else {
            // acc.push(item)

            // If interviewr asks not to use push
            acc = [...acc, item]
        }
        return acc;
    }, [])
    return flatArr
}

console.log(flattenArray(arr))