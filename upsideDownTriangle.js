// right triangle
for (let y = 4; y >= 0; y--) {
    console.log("*".repeat(y+1))
}

// equilateral triangle
for (let y = 4; y >= 0; y--) {
    console.log(" ".repeat(4-y) + "*".repeat(y+1) + "*".repeat(y))
}

// left upside down
for (let y = 5; y >= 0; y--) {
    let z = 5;
    console.log(" ".repeat(z-y) + "*".repeat(y))
}
