const side1 = parseFloat(prompt("Enter the length of the first side:"));
const side2 = parseFloat(prompt("Enter the length of the second side:"));
const side3 = parseFloat(prompt("Enter the length of the third side:"));
let triangleType;

if (side1 === side2 && side2 === side3) {
    triangleType = "Equilateral";
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
    triangleType = "Isosceles";
} else {
    triangleType = "Scalene";
}

document.getElementById("result").textContent = `The triangle is ${triangleType}.`;