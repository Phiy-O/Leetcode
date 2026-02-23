// 28. Find the Index of the First Occurrence in a String - Time Complexity (O(n * m)) & Space Complexity (O(1))
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i = 0;
    let j = 0;

    if (needle.length === 0) {
        return 0
    }
    
    while (i < haystack.length) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i
        }
        
        if (!(haystack[i] === needle[j])) {
            j = 0
        } else {
            if (i < needle.length - 1) {
                j++
            }
        }
        i++
    }
    return -1
};
