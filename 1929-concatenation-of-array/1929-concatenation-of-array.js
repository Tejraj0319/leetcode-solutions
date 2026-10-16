/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let ans = []
    let n = nums.length
    for (let i = 0; i < 2 * n; i++) {
        ans[i] = 0
    }
    for (let i = 0; i < n; i++) {
        ans[i] = nums[i]
        ans[i + n] = nums[i]
    }
    return ans
};