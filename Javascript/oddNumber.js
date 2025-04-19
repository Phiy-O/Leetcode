// 1. odd Number
function oddNumber(n){

    let output = [];

    for (var i = 1; i <= n; i+=2) {
        if ((n % 2) !== 0){
            output.push(i);
        }
    }
    
    return output;
}

console.log(oddNumber(7))
