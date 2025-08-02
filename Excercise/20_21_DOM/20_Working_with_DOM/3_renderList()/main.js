/**
 * Renders an unordered list (ul) of items into the specified element.
 * @param {string[]} items - Array of strings to render as list items.
 * @param {string} elementId - The ID of the HTML element to append the list.
 */
function renderList(items, elementId) {
    if (!Array.isArray(items) || typeof elementId !== "string") {
        console.error("Invalid input: items must be an array and elementId must be a string.");
        return ;
    }

    const targetElement = document.getElementById(elementId);

    if (!targetElement) {
        console.error(`Element with ID '${elementId}' not found.`);
        return ;
    }

    targetElement.innerHTML = `<ul>${items.map(item =>`<li>${item}</li>`).join("")}</ul>`;
}

// Sample usage

// Case 1: Render list into valid element
renderList(["Apple", "Banana", "Cherry"], "list-container");
// Expected: <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>

// Case 2: Invalid items input
renderList("Not an array", "test-container");
// Expected console.error: "Invalid input: items must be an array and elementId must be a string."

// Case 3: Invalid elementId input
renderList(["Apple", "Banana"], 123);
// Expected console.error: "Invalid input: items must be an array and elementId must be a string."

// Case 4: Non-existent elementId
renderList(["One", "Two"], "non-existent-container");
// Expected console.error: "Element with ID 'non-existent-container' not found."