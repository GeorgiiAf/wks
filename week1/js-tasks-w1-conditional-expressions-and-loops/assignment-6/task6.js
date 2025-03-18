const number = parseInt(prompt("Enter a positive integer:"));

if (!isNaN(number) && number > 0 && Number.isInteger(number)) {
    const table = document.createElement("table");

    for (let i = 1; i <= number; i++) {
        const row = document.createElement("tr");

        for (let j = 1; j <= number; j++) {
            const cell = document.createElement("td");
            cell.textContent = i * j;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    document.getElementById("table-container").appendChild(table);
} else {
    document.getElementById("table-container").textContent = "Invalid input. Please enter a positive integer.";
}