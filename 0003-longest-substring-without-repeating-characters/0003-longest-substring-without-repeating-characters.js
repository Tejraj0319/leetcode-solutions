/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let maxLength = 0
    let arr = []
    let start = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = start; j < i; j++) {
            if (arr[j] === s[i]) {
                start = j + 1
                break
            }
        }
        arr[i] = s[i]
        let currentLength = i - start + 1
        if (currentLength > maxLength) {
            maxLength = currentLength
        }
    }
    return maxLength;
}