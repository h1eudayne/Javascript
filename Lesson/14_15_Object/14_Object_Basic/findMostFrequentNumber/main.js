// Viết hàm findMostFrequentNumber nhận vào một mảng số và trả về số xuất hiện nhiều nhất trong mảng đó. Nếu có nhiều số xuất hiện với cùng số lần, trả về số đầu tiên tìm thấy.

const findMostFrequentNumber = (arr) => {
    let tanSuat = {};
    let maxCount = 0;
    let maxNumber = arr[0];

    for(let i = 0 ; i < arr.length; i++) {
        let number = arr[i];
        if(tanSuat[number]) {
            tanSuat[number]++;
        }
        else {
            tanSuat[number] = 1;
        }

        if(tanSuat[number] > maxCount) {
            maxCount = tanSuat[number];
            maxNumber = number;
        }
    }
    return maxNumber;
}

console.log(findMostFrequentNumber([1, 2, 3, 4, 2, 2, 3, 2])); // Expected output: 2