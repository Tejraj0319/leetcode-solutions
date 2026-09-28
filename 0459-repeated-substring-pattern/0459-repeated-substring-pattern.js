/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let n = s.length
    for(let len = 1; len <= n/2; len++){
        if(n % len === 0){
            let subStr = ""
            for(let i = 0; i < len; i++){
                subStr += s[i]
            }
            let newStr = ""
            for(let i = 0; i < n / len; i++){
                newStr += subStr
            }
            if(newStr === s){
                return true
            }
        }
    }
    return false
};