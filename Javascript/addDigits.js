// 258. Add Digits - Easy
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num.length === 1) return num;

    const seen = new Set();
    let curr = num.toString();

    while(!(seen.has(curr))){
        seen.add(curr)
        let sum = 0;
        for (let x of curr) {
            let num = parseInt(x);
            sum += num
        }
        if (sum.toString().length === 1) return sum
        curr = sum.toString()
    }
};
