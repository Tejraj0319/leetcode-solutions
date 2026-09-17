/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.trim().toLowerCase();
    let str = ""
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
            str = str + s[i]
        }
    }
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i]
    }
    return str === reverse;
};