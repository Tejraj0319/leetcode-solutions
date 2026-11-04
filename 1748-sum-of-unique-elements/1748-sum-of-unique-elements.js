/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = (obj[nums[i]] || 0) + 1
    }
    let sum = 0
    for(let key in obj){
        if(obj[key] === 1){
            sum += Number(key)
        }
    }
    return sum;
};