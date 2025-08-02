const person = { name: "Nguyen Van A", age: 30 };

// Duyệt qua keys

for (const key in person) {
    console.log(key);
}

console.log('--------------');

// Duyệt qua keys và giá trị

for(const key in person) {
    console.log(`${key}: ${person[key]}`);
}

