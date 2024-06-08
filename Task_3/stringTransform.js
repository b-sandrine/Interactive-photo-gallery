
function transformString(input) {
    let result = '';

    // Check if the length of the string is divisible by 3
    if(input.length % 3 === 0) {
        result = input.split('').reverse().join('');
    }

    // Check if the length of the string is divisible by 5
    if(input.length % 5 === 0) {
        if(result !== '') {
            result = result.split('').map(char => char.charCodeAt(0)).join(' ');
        }
        else {
            // If the string was not reversed, apply ASCII transformation to the original string
            result = input.split('').map(char => char.charCodeAt(0)).join(' ');
        }
    }

    // If the length of the string is divisible by both 3 and 5, perform both operations in the order specified
    if (input.length % 15 === 0) {
        // Reverse the entire string
        result = input.split('').reverse().join('');
        // Apply ASCII transformation to the reversed string
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    // If none of the above conditions are met, return the original string
    if (result === '') {
        result = input;
    }

    return result;
}

// Test cases
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"