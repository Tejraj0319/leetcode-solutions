/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let newArr = [];
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        newArr[counter] = nums[i] * nums[i];
        counter++;
    }
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j] > newArr[j + 1]) {
                let temp = newArr[j + 1];
                newArr[j + 1] = newArr[j];
                newArr[j] = temp;
            }
        }
    }
    return newArr;
};