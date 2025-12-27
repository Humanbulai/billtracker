// JavaScript extracted from the HTML file
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("calculate-button");
    button.addEventListener("click", function() {
        const amountInput = document.getElementById("amount");
        const amount = parseFloat(amountInput.value);
        const result = amount * 1.2; // Example calculation
        document.getElementById("output").textContent = `Calculated Result: ${result.toFixed(2)}`;
    });
});