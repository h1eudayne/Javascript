import { Character } from "./constructors.js";
import { battle } from "./games.js";

// Tạo 2 nhân vật để tham gia trận chiến
const tom = new Character("Tom", 1000, 50, 5, 30); // tốc độ 30
const jerry = new Character("Jerry", 500, 20, 20, 10); // tốc độ 10

// Bắt đầu trận đấu
battle(tom, jerry);
