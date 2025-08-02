/**
 * Calculates the time difference between two timestamps in days, hours, and minutes
 * @param {number} start - The starting timestamp
 * @param {number} end - The ending timestamp
 * @return {Object} - An object with days, hours, and minutes difference
 */
function timeDiff(start, end) {
    if (typeof start !== 'number' || isNaN(start) || typeof end !== 'number' || isNaN(end) || end < start) {
        return "Invalid Timestamp";
    }

    const totalMinutes = Math.floor((end - start) / 60000);

    return {
        days: Math.floor(totalMinutes / 60 / 24),
        hours: Math.floor((totalMinutes / 60) %  24),
        minutes: Math.floor((totalMinutes) % 60)
    }
}

// Sample usage
console.log(timeDiff(1622520000000, 1622610000000));
// { days: 1, hours: 1, minutes: 0 }

console.log(timeDiff(1622520000000, 1622516400000));
// "Invalid Timestamp"

console.log(timeDiff("1622520000000", 1622613600000));
// "Invalid Timestamp"