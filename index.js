let nums = [2, 7, 11, 15], target = 9;
let twoSum = (nums, target) => {
    let output = []
    let set = new Set(nums);

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; i < nums.length; j++) {
            // if (nums[i] + nums[j] == target) {
            //     output[nums[i], nums[j]]
            // }
        }
    }
    return output.length > 0 ? output : "No match found"
}

console.log(twoSum(nums, target))