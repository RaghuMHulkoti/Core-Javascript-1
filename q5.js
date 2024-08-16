function login(username, password) {
    if (username === "admin" && password === "12375") {
        console.log("Login successful");
    } else {
        console.log("Invalid credentials");
    }
}

// Example usage:
login("admin", "12375"); // Output: "Login successful"
login("user", "wrongpassword"); // Output: "Invalid credentials"
