/**
 * Formats time into hh:mm:ss format, adding leading zeros if necessary.
 * @param {number} hours - The hour part of the time.
 * @param {number} minutes - The minute part of the time.
 * @param {number} seconds - The second part of the time.
 * @returns {string} - Time formatted as "hh:mm:ss".
 */
function formatTime(hours, minutes, seconds) {
    hours = `${hours}`.padStart(2, "0");
    minutes = `${minutes}`.padStart(2, "0");
    seconds = `${seconds}`.padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}

// Sample usage
console.log(formatTime(5, 7, 9)); // "05:07:09"
console.log(formatTime(12, 34, 56)); // "12:34:56"
console.log(formatTime(0, 0, 0)); // "00:00:00"
console.log(formatTime(23, 59, 59)); // "23:59:59"