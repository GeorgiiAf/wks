function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

let numbers = [5, 3, 8, 1, 2, 7];

console.log("Original Array:", numbers);

let sortedArray = sortArray(numbers);

console.log("Sorted Array:", sortedArray);
