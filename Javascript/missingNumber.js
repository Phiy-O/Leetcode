// 268. Missing Number - Easy
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length
    const totalSum = n * (n + 1) / 2;
    const totalArray = nums.reduce((acc, cur) => acc = acc + cur);

    return totalSum - totalArray; 
};
