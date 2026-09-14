/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (m === 0) {
        for (let i = 0; i < nums2.length; i++) {
            nums1[i] = nums2[i];
        }
        return nums1;
    }

    if (n === 0) {
        return nums1;
    }
    let k = m
    for (let i = 0; i < nums2.length; i++) {
        nums1[k] = nums2[i]
        k++;
    }
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums1.length; j++) {
            if (nums1[j] > nums1[j + 1]) {
                let temp = nums1[j]
                nums1[j] = nums1[j + 1]
                nums1[j + 1] = temp;
            }
        }
    }
    return nums1
};