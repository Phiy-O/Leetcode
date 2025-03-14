// normal Triangle
for (let i = 1; i < 5; i++) {
    console.log("*".repeat(i))
}

// equilateral triangle
for (let x = 1; x <= 4; x++) {
    let y = 5;
    console.log(" ".repeat(y-x) + "*".repeat(x) + "*".repeat(x-1))
}

// left side 
for (let i = 1; i < 5; i++) {
    let j = 4;
    console.log(" ".repeat(j-i) + "*".repeat(i))
}
