/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let candidate = 0
    let count = 0
    for (let i of nums) {
        if (count === 0) {
            candidate = i
        }
        count += (i === candidate) ? 1 : -1
    }
    return candidate;
};