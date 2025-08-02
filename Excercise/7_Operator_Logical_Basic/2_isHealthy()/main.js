/**
 * Checks if heart rate and body temperature fall within healthy ranges.
 */
const isHealthy = (heartRate, temperature) => {
  if (
    heartRate >= 60 &&
    heartRate <= 100 &&
    temperature >= 36.5 &&
    temperature <= 37.5
  ) {
    return true;
  } else {
    return false;
  }
};

// Sample usage
console.log(isHealthy(70, 37)); // true
console.log(isHealthy(55, 37)); // false
