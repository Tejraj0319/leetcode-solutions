/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
    let str1 = strs[0]
    let str2 = strs[strs.length-1]
    let prefix = ""
    for(let i = 0; i < str1.length && str2.length; i++){
        if(str1[i] === str2[i]){
            prefix += str1[i]
        }
        else{
            break
        }  
    }
    return prefix;
};