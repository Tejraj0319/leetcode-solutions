/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    let map = {}
    for (let i of s) {
        map[i] = (map[i] || 0) + 1
    }
    for (let i of t) {
        if (map[i] === undefined) {
            return false;
        }
        map[i]--;
    };
    for (let i in map) {
        if (map[i] !== 0) {
            return false;
        }
    }
    return true;
}