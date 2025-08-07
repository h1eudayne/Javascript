const books = [
  {
    title: "Sách lập trình JavaScript",
    author: "Nguyễn Văn A",
    year: 2023
  },
  {
    title: "Học thiết kế web",
    author: "Trần Thị B",
    year: 2022
  },
  {
    title: "Kỹ năng quản lý thời gian",
    author: "Lê Văn C",
    year: 2024
  },
];

const searchTitle = "Học thiết kế web";

for (const book of books) {
  if (book.title === searchTitle) {
    console.log(`Tìm thấy sách: ${book.title} - Tác giả: ${book.author} - Năm: ${book.year}`);
    break;
  }
}

