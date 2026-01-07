// 1295. Find Numbers with Even Number of Digits - Easy
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let counter = 0

    for (let x of nums) {
        if (x.toString().length % 2 === 0) {
            counter++;
        }
    }
    return counter
};
