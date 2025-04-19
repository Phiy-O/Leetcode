// 4. Balik kata

function balikKata(kata) {

    // return kata.split("").reverse().join("");

    let split = kata.split("");
    let reverse = split.reverse();
    let strJoin = reverse.join("");
    return strJoin;

}

console.log(balikKata("halo"))
