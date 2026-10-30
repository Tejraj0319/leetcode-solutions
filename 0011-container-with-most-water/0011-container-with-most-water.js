/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0
    while (left < right) {
        let width = right - left;
        let minHeight = 0;
        if (height[left] < height[right]) {
            minHeight = height[left];
        }
        else {
            minHeight = height[right];
        }
        let area = width * minHeight;
        if (maxWater < area) {
            maxWater = area;
        }
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxWater;
};