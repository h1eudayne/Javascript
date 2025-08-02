// * Date.prototype.toLocaleString

// - Cú pháp:
// date.toLocaleString(locale, options);

// * Locale

// - Locale là tham số đầu tiên của toLocaleString(). Đây có thể là một chuỗi hoặc một mảng chuỗi chỉ định ngôn ngữ và vùng miền mà bạn muốn định dạng.

// + Kiểu dữ liệu: Chuỗi (string) hoặc Mảng chuỗi (Array of strings).

// + Định dạng: “language-region” (ISO language tag), ví dụ:
// "en-US": Tiếng Anh của Mỹ.
// "vi-VN": Tiếng Việt của Việt Nam.
// "fr-FR": Tiếng Pháp của Pháp.

// - Ví dụ:

const date = new Date();

// English (United States)
console.log(date.toLocaleString('en-US'));

// French or Vietnamese, fallback if one fails
console.log(date.toLocaleString(['fr', 'vi']));

// * Options

// - Options là tham số thứ hai dưới dạng đối tượng (object) để cấu hình chi tiết cách hiển thị thời gian và ngày tháng. Các thuộc tính trong options bao gồm:

// - Thuộc tính về ngày tháng:

// + year: Chọn cách hiển thị năm.
// "numeric": Hiển thị năm đầy đủ (e.g., 2024).
// "2-digit": Hiển thị 2 chữ số cuối của năm (e.g., 24).

// + month: Chọn cách hiển thị tháng.
// "numeric": Hiển thị số tháng (e.g., 9).
// "2-digit": Hiển thị số tháng có 2 chữ số (e.g., 09).
// "long": Hiển thị tên tháng đầy đủ (e.g., September).
// "short": Hiển thị tên tháng ngắn gọn (e.g., Sep).
// "narrow": Hiển thị ký tự đầu của tháng (e.g., S).

// + day: Chọn cách hiển thị ngày.
// "numeric": Hiển thị số ngày (e.g., 5).
// "2-digit": Hiển thị số ngày có 2 chữ số (e.g., 05).

// + weekday: Chọn cách hiển thị ngày trong tuần.
// "long": Hiển thị đầy đủ (e.g., Monday).
// "short": Hiển thị ngắn gọn (e.g., Mon).
// "narrow": Hiển thị một ký tự (e.g., M).

// - Thuộc tính về thời gian:

// + hour: Chọn cách hiển thị giờ.
// "numeric": Hiển thị số giờ (e.g., 9 hoặc 17).
// "2-digit": Hiển thị số giờ có 2 chữ số (e.g., 09 hoặc 17).

// + minute: Chọn cách hiển thị phút.
// "numeric": Hiển thị số phút (e.g., 5).
// "2-digit": Hiển thị số phút có 2 chữ số (e.g., 05).

// + second: Chọn cách hiển thị giây.
// "numeric": Hiển thị số giây (e.g., 9).
// "2-digit": Hiển thị số giây có 2 chữ số (e.g., 09).

// - Thuộc tính khác:

// + hour12: Boolean xác định việc sử dụng định dạng 12 giờ (true) hay 24 giờ (false).
// true: Sử dụng định dạng 12 giờ (AM/PM).
// false: Sử dụng định dạng 24 giờ.

// + timeZone: Chuỗi chỉ định múi giờ (e.g., "Asia/Ho_Chi_Minh").

// + timeZoneName: Hiển thị tên múi giờ.
// "long": Hiển thị tên múi giờ đầy đủ (e.g., “Pacific Standard Time”).
// "short": Hiển thị tên ngắn gọn (e.g., “PST”).

// - Ví dụ với options:
const date1 = new Date();
const options = {
  weekday: 'long', // Thứ
  year: 'numeric', // Năm đầy đủ
  month: 'long', // Tên tháng đầy đủ
  day: 'numeric', // Ngày
  hour: '2-digit', // Giờ có 2 chữ số
  minute: '2-digit', // Phút có 2 chữ số
  second: '2-digit', // Giây có 2 chữ số
  hour12: true, // Định dạng 12 giờ
  timeZone: 'Asia/Ho_Chi_Minh' // Múi giờ Việt Nam
};
console.log(date1.toLocaleString('vi-VN', options)); // lúc 12:11:21 SA Thứ Sáu, 25 tháng 7, 2025


// * Tóm tắt các tham số trong options:

//|------------------------------------------------------------------------------------------------------|
//|Thuộc tính    |  Giá trị                                         | Ý nghĩa                            |
//|------------------------------------------------------------------------------------------------------|
//| weekday	     |  "long", "short", "narrow"	                    | Hiển thị ngày trong tuần           |
//| year	     |  "numeric", "2-digit"	                        | Hiển thị năm                       |
//| month	     |  "numeric", "2-digit", "long", "short", "narrow"	| Hiển thị tháng                     |
//| day	         |  "numeric", "2-digit"	                        | Hiển thị ngày                      | 
//| hour	     |  "numeric", "2-digit"	                        | Hiển thị giờ                       |     
//| minute	     |  "numeric", "2-digit"	                        | Hiển thị phút                      |
//| second	     |  "numeric", "2-digit"	                        | Hiển thị giây                      |
//| hour12	     |  true, false	                                    | 12 giờ hay 24 giờ                  |
//| timeZone	 |  Chuỗi (string)	                                | Múi giờ (e.g., "Asia/Ho_Chi_Minh") |
//| timeZoneName |  "long", "short"	                                | Hiển thị tên múi giờ               |
//|------------------------------------------------------------------------------------------------------|

