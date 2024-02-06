function generateRandom8DigitNumber() {
    // Generate a random number between 10000000 and 99999999
    return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
}

// Example usage
const random8DigitNumber = generateRandom8DigitNumber();
console.log(random8DigitNumber);

function generateRandom4DigitNumber() {
    // Generate a random number between 1000 and 9999
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}

// Example usage
const random4DigitNumber = generateRandom4DigitNumber();
console.log(random4DigitNumber);