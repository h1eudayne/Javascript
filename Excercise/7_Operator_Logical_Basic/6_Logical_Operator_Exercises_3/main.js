/**
 * 1. Determines whether to invest in a project based on risk and expected ROI.
 */
function investmentDecision(riskLevel, expectedROI) {
  return (
    (riskLevel !== "high" && expectedROI > 0.1) ||
    (riskLevel === "high" && expectedROI > 0.2)
  );
}

// Sample usage
// console.log(investmentDecision("medium", 0.12)); // true
// console.log(investmentDecision("high", 0.15));   // false
// console.log(investmentDecision("low", 0.1));     // false

/**
 * 2. Decides on a travel plan based on weather, budget, and personal preferences.
 */
function determineTravelPlan(isWeatherGood, budget, likesAdventure) {
  if (!isWeatherGood) {
    return "Hoãn kế hoạch";
  }
  if (budget >= 5000) {
    return likesAdventure ? "Du lịch núi" : "Du lịch biển";
  }
  return "Khám phá địa phương";
}

// Sample usage
// console.log(determineTravelPlan(true, 6000, true));   // Du lịch núi
// console.log(determineTravelPlan(true, 4000, false));  // Khám phá địa phương
// console.log(determineTravelPlan(false, 7000, true));  // Hoãn kế hoạch

/**
 * 3. Classifies students based on exam scores and class attendance percentage.
 */
function determineStudentCategory(score, attendanceRate) {
  if (attendanceRate < 0.5) {
    return "Cần cải thiện";
  }
  if (score >= 90) {
    return "Xuất sắc";
  }
  if (score >= 75 && attendanceRate >= 0.7) {
    return "Giỏi";
  }
  if (score >= 60 && attendanceRate >= 0.6) {
    return "Khá";
  }
  return "Trung bình";
}

// Sample usage
// console.log(determineStudentCategory(92, 0.85)); // Xuất sắc
// console.log(determineStudentCategory(77, 0.7));  // Giỏi
// console.log(determineStudentCategory(65, 0.6));  // Khá
// console.log(determineStudentCategory(58, 0.6));  // Trung bình
// console.log(determineStudentCategory(70, 0.4));  // Cần cải thiện

/**
 * 4. Checks if an employee has access to the workroom.
 */
function hasAccessToWorkroom(isManager, hasAccessCard, passedSafetyTest) {
  return isManager || (hasAccessCard && passedSafetyTest);
}

// Sample usage
// console.log(hasAccessToWorkroom(false, true, true));  // true
// console.log(hasAccessToWorkroom(true, false, false)); // true
// console.log(hasAccessToWorkroom(false, true, false)); // false
