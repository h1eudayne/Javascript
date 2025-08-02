/**
 * Add a custom findIndex2 method to Array.prototype
 * This method mimics the behavior of Array.prototype.findIndex
 * @param {function} callback - The function to execute for each element in the array.
 * @param {any} [thisArg] - Optional. Value to use as this when executing callback.
 * @returns {number} - The index of the first element that satisfies the condition, or -1 if not found.
 */
Array.prototype.findIndex2 = function (callback, thisArg) {
    const length = this.length;

    for (let i = 0; i < length; i++) {
        if(callback.call(thisArg, this[i] , i , this)) {
            return i;
        }
    }
    return -1;
};

// Sample usage

// Sample 1
const arr = [1, 2, 3, 4, 5];
const index = arr.findIndex2((value, index, array) => {
    return value % 3 === 0;
});

console.log(index); // 2

// Sample 2
const thresholdObj = { threshold: 4 };
const indexWithThisArg = arr.findIndex2(function (value) {
    return value > this.threshold;
}, thresholdObj);

console.log(indexWithThisArg); // 4

// Sample 3
const sparseArr = [1, , 3];
const sparseIndex = sparseArr.findIndex2((value) => value > 2);

console.log(sparseIndex); // 2
