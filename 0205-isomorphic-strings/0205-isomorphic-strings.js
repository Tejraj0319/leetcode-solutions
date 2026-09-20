/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false
    let map1 = {}
    let map2 = {}
    for (let i = 0; i < s.length; i++) {
        let sChar = s[i]
        let tChar = t[i]

        if (map1[sChar] && map1[sChar] !== tChar) {
            return false;
        }
        if (map2[tChar] && map2[tChar] !== sChar) {
            return false;
        }
        map1[sChar] = tChar
        map2[tChar] = sChar

    }
    return true;
};