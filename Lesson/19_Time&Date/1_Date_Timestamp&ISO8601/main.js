// 1. Tổng quan về đối tượng Date

// - Trong JavaScript, đối tượng Date là một công cụ mạnh mẽ để làm việc với ngày tháng và thời gian. Đối tượng này cho phép bạn tạo, định dạng và thao tác với ngày tháng trong chương trình của mình. Có hai cách chính để sử dụng Date trong JavaScript:

// - Date() trả về chuỗi
// + Khi bạn gọi hàm Date() mà không sử dụng từ khóa new, nó sẽ trả về một chuỗi đại diện cho ngày và giờ hiện tại.

// + Ví dụ:

console.log(Date()); // Thu Jul 24 2025 19:31:36 GMT+0700 (Giờ Đông Dương)
// String

// + Đây chỉ là một chuỗi văn bản thông thường chứa thông tin về ngày và giờ hiện tại, nhưng không phải là một đối tượng Date thực sự. Điều này có nghĩa là bạn không thể sử dụng các phương thức và thuộc tính của đối tượng Date trên chuỗi này. Nó đơn giản chỉ là một biểu diễn ngắn gọn của thời điểm hiện tại.

// - new Date() trả về object
// + Để tạo ra một đối tượng Date thực sự, bạn cần sử dụng từ khóa new với Date(). Khi đó, kết quả sẽ là một đối tượng Date có đầy đủ các phương thức và thuộc tính để bạn có thể làm việc với ngày tháng một cách linh hoạt hơn.

const now = new Date();
console.log(now); // Date {}
// Object

// + Đối tượng này cho phép bạn sử dụng các phương thức như getFullYear(), getMonth(), getDate(), và nhiều phương thức khác để lấy thông tin cụ thể về năm, tháng, ngày, giờ, phút, giây, v.v. Bạn cũng có thể thay đổi các giá trị này bằng cách sử dụng các phương thức như setFullYear(), setMonth(), setDate(), v.v.

// 2. Khái niệm timestamp và các phương thức liên quan

// - Timestamp là gì?
// + Timestamp là một cách biểu diễn thời gian dưới dạng số nguyên, thường là số mili giây kể từ ngày 1 tháng 1 năm 1970, 00:00:00 UTC, còn được gọi là Epoch Time. Timestamp rất hữu ích trong việc so sánh thời gian, đo thời gian trôi qua, và thực hiện các phép tính liên quan đến thời gian.

// - Date.now()
// + Phương thức Date.now() trả về timestamp của thời điểm hiện tại. Đây là số mili giây kể từ Epoch Time cho đến thời điểm hiện tại.

console.log(Date.now()); // 1753360296292


// +  Số này có thể được sử dụng để đo thời gian trôi qua giữa hai thời điểm bằng cách lấy hiệu số giữa hai timestamp.

// - Date.parse()

console.log(Date.parse("Sat Aug 31 2024 15:30:45 GMT+0700 (Giờ Đông Dương)")); // 1725118245000

// + Nhưng đây không phải là định dạng thể hiện thời gian tiêu chuẩn, nó có thể khác nhau giữa các trình duyệt khác nhau, hoặc giữa các môi trường thực thi js khác nhau, như là giữa trình duyệt và Node.js

// + Phương thức Date.parse() chuyển đổi một chuỗi ngày tháng (theo định dạng chuẩn, ví dụ ISO 8601) thành timestamp. Điều này cho phép bạn dễ dàng chuyển đổi từ chuỗi ngày tháng thành số mili giây kể từ Epoch Time.

console.log(Date.parse("2024-08-31T15:30:45Z")); // 1725118245000


// + Điều này rất hữu ích khi bạn nhận ngày tháng dưới dạng chuỗi và muốn thực hiện các phép tính thời gian trên chúng.



// - Date.UTC()
// + Phương thức Date.UTC() trả về timestamp cho một ngày cụ thể theo giờ UTC. Bạn có thể cung cấp các tham số như năm, tháng, ngày, giờ, phút, giây, và mili giây để xác định thời điểm cụ thể.

// + Ví dụ:

console.log(Date.UTC(2024, 7, 31, 15, 30, 45)); // 1725118245000


// * Lưu ý rằng trong JavaScript, tháng được đánh số từ 0 đến 11, tức là tháng 1 là 0 và tháng 12 là 11. Vì vậy, trong ví dụ trên, tháng 8 được biểu diễn bằng số 7.

// 3. Khái niệm ISO 8601
// - ISO 8601 là một tiêu chuẩn quốc tế được sử dụng để biểu diễn ngày tháng và thời gian. Định dạng này rất phổ biến và được hỗ trợ rộng rãi trong nhiều ngôn ngữ lập trình, bao gồm cả JavaScript.

// - Định dạng cơ bản của ISO 8601 là:

// - YYYY-MM-DDTHH:mm:ss.sssZ

// - Trong đó:
// + YYYY: Năm (4 chữ số, ví dụ: 2024)
// + MM: Tháng (2 chữ số, ví dụ: 08 cho tháng 8)
// + DD: Ngày (2 chữ số, ví dụ: 31)
// + T: Ký tự phân tách giữa phần ngày và phần giờ
// + HH: Giờ (2 chữ số, hệ 24 giờ, ví dụ: 15 cho 3 giờ chiều)
// + mm: Phút (2 chữ số, ví dụ: 30)
// + ss: Giây (2 chữ số, ví dụ: 45)
// + sss: Mili giây (3 chữ số, tùy chọn)
// + Z: Chỉ định múi giờ UTC. Bạn cũng có thể thay bằng +HH:mm hoặc -HH:mm để chỉ định các múi giờ khác.

// - Ví dụ:

const isoDate = new Date().toISOString();
console.log(isoDate); // 2025-07-24T12:31:36.303Z


// - JavaScript hỗ trợ tốt định dạng ISO 8601, cho phép bạn dễ dàng chuyển đổi giữa chuỗi ISO 8601 và đối tượng Date. Điều này giúp bạn làm việc với ngày tháng và thời gian một cách chính xác và dễ dàng khi trao đổi dữ liệu giữa các hệ thống khác nhau.

