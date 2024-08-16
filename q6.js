function getProcessingFee(paymentMethod) {
    let fee;
    switch (paymentMethod.toLowerCase()) {
        case 'credit':
            fee = 2;
            break;
        case 'debit':
            fee = 1.5;
            break;
        case 'paypal':
            fee = 3;
            break;
        default:
            fee = 0;
            console.log('Invalid payment method');
    }
    if (fee > 0) {
        console.log(`The processing fee for ${paymentMethod} is ${fee}%.`);
    }
}

// Example usage:
getProcessingFee('credit');  // Output: The processing fee for credit is 2%.
getProcessingFee('debit');   // Output: The processing fee for debit is 1.5%.
getProcessingFee('paypal');  // Output: The processing fee for paypal is 3%.
getProcessingFee('cash');    // Output: Invalid payment method
