/**
 * Function createUser creates a user object
 * with name and age from input parameters
 */

const createUser = (name, age) => {
  return {
      name: name,
      age: age,
  }

}

// Sample usage
const user1 = createUser("Nguyễn Văn A", 30);
console.log(user1); // {name: "Nguyễn Văn A", age: 30}