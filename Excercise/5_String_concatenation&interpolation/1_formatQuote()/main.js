/**
 * Formats a given quote with the author's name.
 */
function formatQuote(quote, author) {
  return `"${quote}" - ${author}`;
}

// Sample usage
const quote1 = formatQuote("Simplicity is genius.", "Albert Einstein");
console.log(quote1); // "Simplicity is genius." - Albert Einstein

const quote2 = formatQuote("Knowledge is power.", "Confucius");
console.log(quote2); // "Knowledge is power." - Confucius
