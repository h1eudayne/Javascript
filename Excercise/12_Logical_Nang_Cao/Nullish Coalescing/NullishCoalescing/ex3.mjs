import { getElement } from "./functionGetElement.mjs";

let strings = ["Hello", ""];

getElement(strings, 0, "Empty"); // "Hello"
getElement(strings, 1, "Empty"); // ""
