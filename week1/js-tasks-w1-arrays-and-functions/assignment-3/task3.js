let numbers = [];
let input;
let evens = [];

do {
    input = prompt("Enter a number (or 'end' to finish) other symbols will be ignored:");

    if (input === "end") break;

    let num = Number(input);

    if (!isNaN(num)) {
        numbers.push(num);
    } else {
        alert("Invalid input. Please enter a valid number.");
    }

} while (true);

for (let num of numbers) {
    if (num % 2 === 0) evens.push(num);
}

let result;
if (evens.length > 0) {
    result = `Even Numbers: ${evens.join(", ")}`;
} else {
    result = "Even Numbers: None";
}

document.getElementById("output").innerText = result;
