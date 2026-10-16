/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i]
    }
    let final_length = ans.length * 2
    let count = ans.length
    let prev_pointer = 0
    for (let i = count; i < final_length; i++) {
        if (prev_pointer < count) {
            ans[i] = nums[prev_pointer]
            prev_pointer++
        }
    }
    return ans
};