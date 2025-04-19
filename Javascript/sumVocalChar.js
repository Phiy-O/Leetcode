// 3. Hitung jumlah karakter

function sumChar(word) {
    
    let lowerCaseWord = word.toLowerCase()
    var vocal = ["a", "i", "u", "e", "o"];
    let counter = 0;
    
    let splitWord = lowerCaseWord.split("");
    for (var i = 0; i < (splitWord.length); i++) {
        if (vocal.includes(splitWord[i])) {
            counter += 1;
        }
    }
    
    return counter;
}

console.log(sumChar("andika"))
