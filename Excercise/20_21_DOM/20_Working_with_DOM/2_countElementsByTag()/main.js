/**
 * Counts the number of elements in the document with a specific tag name.
 * @param {string} tagName - The HTML tag name to count.
 * @returns {number} - The number of elements with the specified tag name.
 */
function countElementsByTag(tagName) {
    if(typeof tagName !== "string") {
        return 0;
    }
    return document.getElementsByTagName(tagName).length;
}

// Sample usage
console.log(countElementsByTag("div")); // 3
console.log(countElementsByTag("p")); // 2
console.log(countElementsByTag("section")); // 1
console.log(countElementsByTag("header")); // 0
console.log(countElementsByTag(123)); // 0