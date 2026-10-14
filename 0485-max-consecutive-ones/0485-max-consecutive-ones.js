/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
    let finalCount = 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++
        }
        else {
            if (count > finalCount) {
                finalCount = count
            }
            count = 0
        }
    }
    if (count > finalCount) {
        finalCount = count
    }
    return finalCount;
}