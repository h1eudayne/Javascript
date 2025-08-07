import { Character } from './constructors.js';

// Sample usage
const tom = new Character("Tom", 1000, 50, 5);
const jerry = new Character("Jerry", 500, 20, 20);

tom.attack(jerry); // Tom tấn công Jerry, gây ra 30 sát thương. Jerry còn lại 470 máu.
jerry.attack(tom); // Jerry tấn công Tom, gây ra 15 sát thương. Tom còn lại 985 máu.
