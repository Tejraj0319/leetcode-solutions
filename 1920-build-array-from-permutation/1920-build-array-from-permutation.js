/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    let ans = []
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        ans[count] = nums[nums[count]]
        count++;
    }
    return ans
};