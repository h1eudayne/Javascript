const property = 'lastName';
const person = {
  firstName: 'John',
  [property]: 'Smith'
};

console.log(person.lastName); // Smith
