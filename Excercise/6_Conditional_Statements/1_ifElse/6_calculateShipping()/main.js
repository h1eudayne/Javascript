/**
 * Calculates shipping cost based on distance.
 */
const calculateShipping = (distance) => {
    if(distance <= 5) {
        return 7000;
    }
    else {
        return 7000 + ((distance - 5) * 2000);
    }
}

// Sample usage
console.log(calculateShipping(3)); // 7000
console.log(calculateShipping(7)); // 11000