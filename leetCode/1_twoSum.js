/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.

    Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]

    Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]
*/

let nums = [2, 4, 3, 11, 15], target = 9;
let twoSum = (nums, target) => {
    {
        // for (let i = 0; i < nums.length - 1; i++) {
        //     for (let j = 1; i < nums.length; j++) {
        //         if (nums[i] + nums[j] == target) {
        //             return [nums[i], nums[j]]
        //         }
        //     }
        // }
        // return "No match found"
    }

    {
        var map = {};
        for (var i = 0; i < nums.length; i++) {
            var n = nums[i];

            if (map[target - n] >= 0) {
                return [map[target - n], i]
            }
            else {
                map[n] = i;   //use map to store the value and index position
            }
        }
    }
}

console.log(twoSum(nums, target))

console.log("object")

