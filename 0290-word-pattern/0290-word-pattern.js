/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let words = s.split(" ")
    let map1 = new Map()
    let map2 = new Map()

    if (words.length === 0 || pattern.length === 0 || pattern.length != words.length) return false
    for (let i = 0; i < words.length && i < pattern.length; i++) {
        let ch = pattern[i]
        let word = words[i]
        if (map1.has(ch) && map1.get(ch) != word) {
            return false
        }
        if (map2.has(word) && map2.get(word) != ch) {
            return false
        }
        map1.set(ch, word)
        map2.set(word, ch)
    }
    return true;
};