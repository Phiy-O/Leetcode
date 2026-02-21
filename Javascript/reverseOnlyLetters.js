// 917. Reverse Only Letters - Easy (O(n))
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let left = 0
    let right = s.length - 1
    let regex = /[a-zA-Z]/
    let leftWord = '';
    let rightWord = '';

    while (left <= right) {
        if (!(regex.test(s[left]) && regex.test(s[right]))) {
            if (regex.test(s[left]) && !(regex.test(s[right]))) {
                rightWord += s[right]
                right--
            } else {
                leftWord += s[left]
                left++
            }
        } else {
            if ((leftWord + rightWord.split('').reverse().join('')).length === s.length - 1) {
                leftWord += s[right]
                break
            } else {
                leftWord += s[right]
                rightWord += s[left]
                left++
                right--
            }
        }
    }

    let result = leftWord + rightWord.split('').reverse().join('');
    
    return result
};
