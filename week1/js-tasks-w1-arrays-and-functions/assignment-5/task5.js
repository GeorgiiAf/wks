function sortArray(numbers, order) {
    if (order === "asc") {
        return numbers.slice().sort((a, b) => a - b);
    } else if (order === "desc") {
        return numbers.slice().sort((a, b) => b - a);
    } else {
        console.log("Invalid order. Use 'asc' or 'desc'.");
        return numbers;
    }
}

const numbers = [5, 2, 8, 1, 9];
const numbers1 = [12, -45, 7, -23, 89, 3];
const numbers2 = [-34, 11, -78, 56, 90, -2];

console.log("Original array:", numbers);
console.log("Sorted ascending:", sortArray(numbers, "asc"));
console.log("Sorted descending:", sortArray(numbers, "desc"));

console.log("Original array:", numbers1);
console.log("Sorted ascending:", sortArray(numbers1, "asc"));
console.log("Sorted descending:", sortArray(numbers1, "desc"));

console.log("Original array:", numbers2);
console.log("Sorted ascending:", sortArray(numbers2, "asc"));
console.log("Sorted descending:", sortArray(numbers2, "desc"));
