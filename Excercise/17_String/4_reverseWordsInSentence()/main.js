/**
 * Reverses each word in a sentence.
 *
 * @param {string} sentence - The sentence to reverse words in
 * @returns {string} A new sentence with each word reversed
 */

// C1: Vong lap
const reverseWordsInSentence = (sentence) => {
    let words = sentence.split(" ");
    for(let i = 0 ; i < words.length ; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    return words.join(" ");

    // - chuyển dùng split cắt sentence thành mảng chứa 2 chuỗi gán 2 chuỗi đó vào mảng words
    // - trong vòng lặp
    // + lấy phần tử thứ i trong words rồi dùng split cắt từng phẩn tử ra đồng thời đưa từ chuỗi thành mảng rồi sau đó dùng reverse() để đảo ngược mảng rồi dùng join để ghép các kí tự trong mảng thành 1 string, rồi gán lại giá trị đó lại ngay phần tử i đó
    // - tới đây vẫn chưa xong 2 phần tử sau khi đảo vẫn là 2 phần tử trong mảng ta phải dùng words.join(" "); để nối 2 phần tử này thành chuỗi rồi return
};

// C2: map
const reverseWordsInSentence2 = (sentence) => {
    let words = sentence.split(" ");
    let reversedSentence = words.map((word) => {
        return word.split("").reverse().join("");
    }).join(" ");
    return reversedSentence;
}
// map dùng để tạo ra 1 array dựa trên array cung cấp (thay đổi giá trị theo điều kiện đưa ra)
// sẽ dùng map đi qua các phần tử trong array, sau đó lấy từng phần tử rồi dùng split đưa thành mảng rồi dùng hàm reverse() sau đó dùng join để array trở thành string, sau tất cả thì ta sẽ nhận lại được 2 phần tử trong mảng đã được đảo ngược, cuối cùng join 1 lần nữa để đưa 2 phần tử trong mảng này về lại string 

// C3: reduce

const reverseWordsInSentence3 = (sentence) => {
    return sentence.split(" ").reduce((reversed, word) => {
        return reversed + word.split("").reverse().join("") + " ";
    } , "").trim();
}

// Sample usage
console.log(reverseWordsInSentence("Hello world")); // "olleH dlrow"

console.log(reverseWordsInSentence2("Hello world")); // "olleH dlrow"

console.log(reverseWordsInSentence3("Hello world")); // "olleH dlrow"


