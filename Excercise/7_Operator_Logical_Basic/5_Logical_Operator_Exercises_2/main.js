/**
 * 1. Determines if a music festival can be organized based on the number of bands, sufficient advertising budget, and a rain-free weather forecast.
 */
function canOrganizeMusicFestival(bandCount, hasEnoughBudget, weatherForecast) {
  return bandCount >= 5 && hasEnoughBudget && weatherForecast !== "rainy";
}

// Sample usage
console.log(canOrganizeMusicFestival(6, true, "sunny")); // true
console.log(canOrganizeMusicFestival(4, true, "cloudy")); // false
console.log(canOrganizeMusicFestival(5, false, "sunny")); // false
console.log(canOrganizeMusicFestival(5, true, "rainy")); // false

/**
 * 2. Evaluates the feasibility of opening a new store based on either a good location or a high advertising budget, and at least three experienced staff members.
 */
function canOpenNewStore(isGoodLocation, highAdBudget, experiencedEmployees) {
  return (isGoodLocation || highAdBudget) && experiencedEmployees >= 3;
}

// Sample usage
// console.log(canOpenNewStore(true, false, 4)); // true
// console.log(canOpenNewStore(true, false, 2)); // false
// console.log(canOpenNewStore(false, true, 3)); // true
// console.log(canOpenNewStore(false, false, 5)); // false

/**
 * 3. Assesses whether an individual is a capable project manager, requiring at least 3 years of experience, technological proficiency, and good communication skills.
 */
function isCapableProjectManager(
  experienceYears,
  knowsTech,
  goodCommunication
) {
  return experienceYears >= 3 && knowsTech && goodCommunication;
}

// Sample usage
// console.log(isCapableProjectManager(4, true, true)); // true
// console.log(isCapableProjectManager(2, true, true)); // false
// console.log(isCapableProjectManager(5, false, true)); // false

/**
 * 4. Checks if a student is eligible for an academic exchange program based on having an average score above 8.0 or a teacher's recommendation, and no disciplinary violations.
 */
function canJoinExchangeProgram(
  averageGrade,
  hasTeacherRecommendation,
  noDisciplinaryViolations
) {
  return (
    (averageGrade > 8.0 || hasTeacherRecommendation) && noDisciplinaryViolations
  );
}

// Sample usage
// console.log(canJoinExchangeProgram(8.5, false, true)); // true
// console.log(canJoinExchangeProgram(7.5, true, true));  // true
// console.log(canJoinExchangeProgram(7.5, true, false)); // false
// console.log(canJoinExchangeProgram(9, true, false)); // false

/**
 * 5. Decides on organizing a sports event contingent on having at least 50 participants, a budget under 10000, and not coinciding with a holiday; otherwise, the event is postponed.
 */
function planSportsEvent(participants, budget, isHoliday) {
  return participants >= 50 && budget <= 10000 && !isHoliday;
}

// Sample usage
// console.log(planSportsEvent(60, 8000, false)); // true
// console.log(planSportsEvent(40, 9000, false)); // false
// console.log(planSportsEvent(60, 11000, true)); // false
