// 1. Viết hàm createRange nhận vào hai số nguyên start và end, sau đó tạo và trả về một mảng chứa tất cả các số nguyên từ start đến end.

function createRange(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

console.log(createRange(1, 5)); // [1, 2, 3, 4, 5]
// 2. Viết hàm removeDuplicates nhận vào một mảng và trả về một mảng mới mà không có bất kỳ phần tử trùng lặp nào từ mảng ban đầu.
const removeDuplicates = (arr) => {
    let result = [];
    for(let i = 0 ; i < arr.length ; i++) {
        let n = arr[i];
        if(result.indexOf(n) === -1) {
            result.push(n);
        }
    }
    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// 3. Viết hàm findPairsWithSum nhận vào một mảng số nguyên arr và một số nguyên sum. Hàm trả về một mảng của các cặp số từ arr sao cho tổng của mỗi cặp bằng sum.

const findPairsWithSum = (arr, sum) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let m = arr[j];
            if (n + m === sum) {
                result.push([n, m]);
            }
        }
    }
    return result;
}

console.log(findPairsWithSum([1, 2, 3, 4, 5], 5)); // [[1, 4], [2, 3]]