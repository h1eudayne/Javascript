/**
 * Checks if a person is eligible to attend a tech seminar based on age, employment in IT, and registration status.
 */
const canAttendTechSeminar = (age, isITEmployee, hasRegistered) => {
  return age > 18 && isITEmployee && hasRegistered;
};

// Sample usage
console.log(canAttendTechSeminar(25, true, true)); // true
console.log(canAttendTechSeminar(20, false, true)); // false
