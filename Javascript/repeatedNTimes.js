// 961. N-Repeated Element in Size 2N Array - Easy
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let tempArray = []
    for (let n = 0;n < nums.length;n++) {
        if (!(tempArray.includes(nums[n]))){
            tempArray.push(nums[n])
        } else {
            return nums[n]
        }
    }
};
