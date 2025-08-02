// Trong js khong có pass by reference, chỉ có pass by value.
const changedValue = (obj) => {
    obj = {
        name: "John"
    };
}

let person = {
    name: "Bob"
};

changedValue(person);

console.log(person); // { name: 'Bob' }

// Li do hay nham lan

const changedValue2 = (y) => {
    y.name = "John";
}

let person2 = {
    name: "Bob"
};

changedValue2(person2);
console.log(person2); // { name: 'John' }