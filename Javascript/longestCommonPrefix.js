// 14. Longest Common Prefix - Easy
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let finalOutput = ""
    let maxLength = 0
    for (let k of strs) {
        if (k.length > maxLength) {
            maxLength = k.length
        }
    }
    
    for (let x = 0; x < maxLength; x++) {
        let c = strs[0][x]
        finalOutput += c
        for (let y = 1; y < strs.length; y++) {
            if (x == strs[y].length || strs[y][x] != c) {
                return strs[0].substring(0, x)
            }
        }
        
    }
    return finalOutput
};
