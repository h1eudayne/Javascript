/**
 * Calculates the time difference between two timestamps.
 * @param {number} time1 - The first timestamp.
 * @param {number} time2 - The second timestamp.
 * @returns {object} - An object with hours, minutes, seconds, milliseconds or "Invalid Timestamp" if inputs are not valid.
 */
function timeDiff(time1, time2) {
    if (typeof time1 !== 'number' || isNaN(time1) || typeof time2 !== 'number' || isNaN(time2)) {
        return "Invalid Timestamp";
    }

    const totalMilliseconds = Math.abs(time2 - time1);

    return {
        hours: Math.floor(totalMilliseconds / 3600000),
        minutes: Math.floor((totalMilliseconds % 3600000) / 60000),
        seconds: Math.floor((totalMilliseconds % 60000) / 1000),
        milliseconds: totalMilliseconds % 1000, 
    }
}

// Sample usage
console.log(timeDiff(1724796645000, 1724799645045));
// { hours: 0, minutes: 50, seconds: 0, milliseconds: 45 }

console.log(timeDiff(1724899845045, 1724796645160));
// { hours: 28, minutes: 39, seconds: 59, milliseconds: 885 }

console.log(timeDiff(1724796645000, "ABC")); // "Invalid Timestamp"
console.log(timeDiff("1724796645000", "1724799645045")); // "Invalid Timestamp"