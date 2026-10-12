/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = ""
    for (let i = 0; i < s.length; i++) {
        if ("aeiouAEIOU".indexOf(s[i]) !== -1) {
            vowels += s[i]
        }
    }
    let j = vowels.length - 1
    let newStr = ""
    for (let i = 0; i < s.length; i++) {
        if ("aeiouAEIOU".indexOf(s[i]) !== -1) {
            newStr += vowels[j]
            j--
        }
        else {
            newStr += s[i]
        }
    }
    return newStr
};
