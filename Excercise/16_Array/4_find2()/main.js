Array.prototype.find2 = function(callback, thisArg) {
    const length = this.length;

    for(let i = 0 ; i < length ; i++) {
        if(callback.call(thisArg, this[i] , i, this)) {
            return this[i];
        }
    }
};

// Sample usage

// Sample 1
const arr = [1, 2, 3, 4, 5];
const result = arr.find2((value, index, array) => {
    return value % 3 === 0;
});

console.log(result); // 3

// Sample 2
const thresholdObj = { threshold: 4 };
const resultWithThisArg = arr.find2(function(value) {
    return value > this.threshold;
}, thresholdObj);

console.log(resultWithThisArg); // 5

// Sample 3
const sparseArr = [1, , 3]; // Có phần tử trống
const sparseResult = sparseArr.find2((value) => value > 2);

console.log(sparseResult); // 3