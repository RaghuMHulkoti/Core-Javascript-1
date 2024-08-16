function checkNumber(num) {
    const result = num > 0 ? "positive" : (num < 0 ? "negative" : "zero");
    console.log(result);
}

// Example usage:
const number = -5;
checkNumber(number); // Output: "negative"
