function getWeatherCondition(temperature) {
    const condition = (temperature > 30) ? "Hot" : "Moderate";
    console.log(`The weather condition is ${condition}.`);
}

// Example usage:
getWeatherCondition(35);  // Output: The weather condition is Hot.
getWeatherCondition(25);  // Output: The weather condition is Moderate.
