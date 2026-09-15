/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let string = s.trim().split(" ");
    if(string.length === 0){
        return 0
    }
    else{
        return string[string.length-1].length;
    }
};