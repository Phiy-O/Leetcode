// 202. Happy Number - Easy
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const numSet = new Set();
    let curr = n.toString();
    
    while (!(numSet.has(curr))) {
        numSet.add(curr);
        let sum = 0;
        for (let x of curr){
            let num = parseInt(x);
            sum += num ** 2
        }
        if (sum === 1) return true;
        curr = sum.toString();
    }
    
    return false
};
