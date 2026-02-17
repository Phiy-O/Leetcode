// 28. Find the Index of the First Occurrence in a String - EASY
var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (i >= m) {
            nums1[i] = nums2[j]
            j++
        }
        i++
    }

    const sortedArray = nums1.sort(function(a, b) {
        return a - b
    })
};
