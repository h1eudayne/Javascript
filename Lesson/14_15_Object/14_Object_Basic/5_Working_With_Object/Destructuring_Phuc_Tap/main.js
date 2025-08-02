const course = {
  title: "JavaScript Pro",
  info: {
    url: "https://google.com",
    description: "JavaScript Basic, Advanced.",
    keywords: "js basic, js advanced",
  },
};

const {
  title,
  info: { keywords: topics },
} = course;

console.log(title); // JavaScript Pro
console.log(topics); // js basic, js advanced
