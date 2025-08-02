/** 
 * Returns a string indicating the time passed since a given ISO 8601 date.
 * Handles cases like minutes, hours, days, weeks, months, and years.
 * If less than 1 minute has passed, returns "Vừa xong".
 * @param {string} isoDate - ISO 8601 formatted date string
 * @returns {string} - a string describing the time elapsed (e.g., "5 minutes ago")
 */
function timeAgo(isoDate) {
    const date = new Date(isoDate);

    if (isNaN(date.getTime())) {
        return "Ngày giờ không hợp lệ";
    }

    const secondsAgo = Math.floor((Date.now() - date) / 1000);

    if (secondsAgo < 60) {
        return "Vừa xong";
    }

    const minutesAgo = Math.floor(secondsAgo / 60);
    if (minutesAgo < 60) {
        return `${minutesAgo} phút trước`;
    }

    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) {
        return `${hoursAgo} giờ trước`;
    }

    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo < 7) {
        return `${daysAgo} ngày trước`;
    }

    const weeksAgo = Math.floor(daysAgo / 7);
    if (daysAgo < 30) {
        return `${weeksAgo} tuần trước`;
    }

    const monthsAgo = Math.floor(daysAgo / 30);
    if (daysAgo < 365) {
        return `${monthsAgo} tháng trước`;
    }

    const yearsAgo = Math.floor(daysAgo / 365);
    return `${yearsAgo} năm trước`;
}

// Sample usage
console.log(timeAgo("2020-09-10T15:20:00Z"));  // "x năm trước"