/**
 * Formats a duration given in seconds into "mm:ss" or "hh:mm:ss" format.
 * @param {number} duration - the duration in seconds
 * @returns {string} - formatted duration (e.g., "01:10" or "01:00:00")
 */
function formatDuration(duration) {
    if (typeof duration !== 'number' || isNaN(duration) || duration < 0) {
        return "Invalid duration";
    }

    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const pad = (num) => String(num).padStart(2, "00");

    if(hours > 0) {
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    }

    return `${pad(minutes)}:${pad(seconds)}`

}

// Sample usage
console.log(formatDuration(70)); // "01:10"
console.log(formatDuration(3600)); // "01:00:00"
console.log(formatDuration(3661)); // "01:01:01"
console.log(formatDuration(59)); // "00:59"
console.log(formatDuration(0)); // "00:00"
console.log(formatDuration(-5)); // "Invalid duration"