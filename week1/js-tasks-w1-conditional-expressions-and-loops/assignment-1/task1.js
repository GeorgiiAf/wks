let celsius = prompt("Enter temperature in Celsius:");

if (isNaN(celsius) || celsius.trim() === "") {
    alert("Please enter a valid number!");
} else {
    celsius = parseFloat(celsius);
    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    document.getElementById("output").innerHTML =
        `Fahrenheit: ${fahrenheit.toFixed(2)}°F <br> Kelvin: ${kelvin.toFixed(2)}K`;
}
