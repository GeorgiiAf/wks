let numbers = [];

for (let i = 1; i <= 5; i++) {
    numbers.push(+prompt(`Enter Number ${i}:`));
}

console.log("Numbers:", numbers);

let searchNum = +prompt("Enter a Number to Search:");

// ? - ternary operator
console.log(`Number ${searchNum} is ${numbers.includes(searchNum) ? "found" : "not found"} in the array.`);

numbers.pop();
console.log("Updated Numbers:", numbers);

numbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", numbers);
