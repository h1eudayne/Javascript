import { getElement } from "./functionGetElement.mjs";

let colors = ["Red", "Green", "Blue"];

getElement(colors, 0, "Empty"); // "Red"
getElement(colors, 1, "Empty"); // "Green"
getElement(colors, 2, "Empty"); // "Blue"

getElement(colors, 3, "Empty"); // "Empty"