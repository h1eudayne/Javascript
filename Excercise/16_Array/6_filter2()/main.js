/**
 * Add a custom filter2 method to Array.prototype
 * This method mimics the behavior of Array.prototype.filter
 * @param {function} callback - The function to execute for each element in the array.
 * @param {any} [thisArg] - Optional. Value to use as this when executing callback.
 * @returns {Array} - A new array with all elements that pass the test implemented by the callback.
 */
Array.prototype.filter2 = function (callback, thisArg) {
    let length = this.length;
    let result = [];

    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }

    return result;
};

// Sample usage
const arr = [1, 2, 3, 4, 5];
const result = arr.filter2((value) => {
    return value % 2 !== 0;
});

console.log(result); // [1, 3, 5]
