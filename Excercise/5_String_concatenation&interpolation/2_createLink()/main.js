/**
 * Creates an HTML hyperlink with the given URL and display name.
 */
const createLink = (link, name) => `<a href="${link}">${name}</a>`;

// Sample usage
const link1 = createLink("https://google.com", "Search");
console.log(link1); // <a href="https://google.com">Search</a>

const link2 = createLink("https://www.facebook.com/", "FB");
console.log(link2); // <a href="https://www.facebook.com/">FB</a>
