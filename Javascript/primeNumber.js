// 2. Checking prime number

function primeNumber(p) {

    if (p <= 1) {
        return "not a prime number";
    }

    for (var i = 2; i <= (Math.sqrt(p)); i++) {
        if ((p % i) === 0) {
            return "not a prime number";
        }
    }

    return "prime number"
}

console.log(primeNumber(3))
