function calculateSum(n) {
    let sum = 0;
    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    console.log(`The sum of all numbers from 1 to ${n} is ${sum}.`);
}

// Example usage:
calculateSum(5);  // Output: The sum of all numbers from 1 to 5 is 15.
calculateSum(10); // Output: The sum of all numbers from 1 to 10 is 55.
