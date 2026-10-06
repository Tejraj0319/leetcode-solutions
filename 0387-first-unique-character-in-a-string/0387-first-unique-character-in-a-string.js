/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let data = {}
    for (let i of s) {
        data[i] = (data[i] || 0) + 1
    }
    for (let i = 0; i < s.length; i++) {
        if (data[s[i]] === 1) {
            return i
        }
    }
    return -1;
};