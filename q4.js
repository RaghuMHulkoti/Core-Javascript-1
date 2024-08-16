// The comma operator in JavaScript allows you to evaluate multiple expressions in a single statement and returns the value of the last expression. It is often used in situations where multiple operations need to be performed within a single statement, particularly in loops or assignment statements.

// Usage:
// Multiple Expressions: The comma operator is used to separate expressions that need to be evaluated in sequence. All expressions are evaluated from left to right, but only the result of the final expression is returned.
// Condensed Code: It can be useful in contexts like for loops where you might want to update multiple variables simultaneously.
let x = 10;
let y = 20;

let result = (x += 1, y += 2, x + y);

console.log(result);  // Output: 33
console.log(x);       // Output: 11
console.log(y);       // Output: 22
