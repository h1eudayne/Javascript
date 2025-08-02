/**
 * Changes the text content of an HTML element with the specified ID.
 * @param {string} elementId - The ID of the HTML element (must be a string).
 * @param {string} newText - The new text to set as the element's content (must be a string).
 * @returns {boolean|string} - Returns true if the change was successful, otherwise "Element not found".
 */
function changeElementTextById(elementId, newText) {
    if (typeof elementId !== "string" || typeof newText !== "string") {
        return;
    }
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = newText;
        return true;
    } else {
        return "Element not found";
    }
}

// Sample usage
console.log(changeElementTextById("greeting", "Hi there!")); // true (changes the div's content to "Hi there!")
console.log(changeElementTextById("message", "New message!")); // true (changes the paragraph's content to "New message!")
console.log(changeElementTextById("nonexistent", "Test")); // "Element not found"
console.log(changeElementTextById(123, "Test")); // undefined (does not change anything)