/**
 * Show a message in the console if it's not an empty string.
 * @param {string} message - The message to be shown.
 */
const showMessage = (message) => {
  message && console.log(message);
}

// Sample usage
showMessage(""); // Không in gì cả
showMessage("Hello World!"); // In ra "Hello World!"