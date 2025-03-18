const number = parseInt(prompt("Enter a positive integer:"));

if (!isNaN(number) && number > 0 && Number.isInteger(number)) {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    document.getElementById("result").textContent = `The sum of natural numbers up to ${number} is ${sum}.`;
} else {
    document.getElementById("result").textContent = "Invalid input. Please enter a positive integer.";
}