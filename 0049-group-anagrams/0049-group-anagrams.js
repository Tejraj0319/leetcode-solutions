/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let data = {}
    for (let str of strs) {
        let key = str.split('').sort().join('')
        if (!data[key]) {
            data[key] = []
        }
        data[key].push(str)
    }
    return Object.values(data)
};