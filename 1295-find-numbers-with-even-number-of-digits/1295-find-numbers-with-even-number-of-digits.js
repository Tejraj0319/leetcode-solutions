/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0
    for(let i of nums){
        let num_to_str = i +  ""
        let num_length = num_to_str.length
        if(num_length % 2 === 0){
            count++
        }
    }
    return count
};