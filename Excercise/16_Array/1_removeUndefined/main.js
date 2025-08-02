// Hãy viết hàm removeUndefined nhận vào một mảng arr. Hàm này sẽ lọc và trả về một mảng mới chứa tất cả các phần tử không phải là undefined. Sử dụng toán tử void 0 để kiểm tra các phần tử trong mảng.

function removeUndefined(arr) {
    let result = [];

    for(let i = 0 ; i < arr.length ; i++) {
        let n = arr[i];

        if(n !== void 0) {
            result.push(n);
        }
    }
    return result;
}

// Sample usage
console.log(removeUndefined([1, 2, void 0, 4, undefined])); // [1, 2, 4]
console.log(removeUndefined([undefined, void 0, null, 0, '', false])); // [null, 0, '', false]
console.log(removeUndefined([void 0, void 0, void 0])); // []
console.log(removeUndefined([])); // []