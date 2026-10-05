/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false
    let obj = {}
    for (let i of ransomNote) {
        obj[i] = (obj[i] || 0) + 1
    }
    for (let i of magazine) {
        if (obj[i]) {
            obj[i]--;
        }
    }
    for (let key in obj) {
        if (obj[key] !== 0) {
            return false
        }
    }
    return true
};