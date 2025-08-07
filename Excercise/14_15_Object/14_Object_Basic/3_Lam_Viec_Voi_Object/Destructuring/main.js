const person = {
    name: 'John',
    age: 30
  };
  const { name, age } = person;
  
  console.log(name); // John
  console.log(age); // 30
  
  const course = {
  title: 'JavaScript Pro',
  info: {
    url: 'https://fullstack.edu.vn',
    description: 'JavaScript Basic, Advanced.',
    keywords: 'js basic, js advanced'
  }
};

const {
  title,
  info: {
    keywords: topics
  }
} = course;

console.log(title); // JavaScript Pro
console.log(topics); // js basic, js advanced
