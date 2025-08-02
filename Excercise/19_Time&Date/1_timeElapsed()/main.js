/**
 * Calculates the number of seconds elapsed since the given start timestamp
 * @param {number} start - The starting timestamp
 * @return {number} - The number of seconds elapsed
 */
function timeElapsed(start) {
    if (typeof start !== "number" && isNaN(start)) {
        return "Invalid Timestamp";
    }

    const now = Date.now();
    const elapsedMilliseconds = now - start;
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

    return elapsedSeconds;
}

// Sample usage
console.log(timeElapsed("ABC")); // "Invalid Timestamp"

const startTime = Date.now();
setTimeout(() => {
    console.log(timeElapsed(startTime)); // 1
}, 1000);