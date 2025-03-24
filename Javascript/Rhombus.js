for (let x = 1; x <= 4; x++) {
    let y = 5;
    console.log(" ".repeat(y-x) + "*".repeat(x) + "*".repeat(x-1))
}
for (let y = 4; y >= 0; y--) {
    let z = 0;
    console.log(" ".repeat(4-y) + "*".repeat(y+1) + "*".repeat(y))
}
