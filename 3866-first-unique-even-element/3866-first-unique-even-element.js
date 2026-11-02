/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }
    }
    for (let [key, value] of map) {
        if (value === 1) {
            return key
        }
    }
    return -1;
};