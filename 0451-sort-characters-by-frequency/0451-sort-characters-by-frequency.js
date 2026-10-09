/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
    let count = {}
    for (let char of s) {
        count[char] = (count[char] || 0) + 1
    }
    let sortedCount = Object.entries(count).sort((a, b) => b[1] - a[1])
    let result = ""
    for (let [char, freq] of sortedCount) {
        for (let i = 0; i < freq; i++) {
            result += char;
        }
    }
    return result;
}