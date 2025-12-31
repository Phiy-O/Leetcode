// 35. Search Insert Position - Easy [Worst Algorithm]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    if (!(nums.includes(target))) {
        nums.push(target)
    }

    for (let x = 0; x < nums.sort((a, b) => a - b).length;x++) {
        if (nums[x] === target) {
            return x
        }
    }
};
