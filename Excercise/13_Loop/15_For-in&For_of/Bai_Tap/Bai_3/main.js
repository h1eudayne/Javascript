const products = [
  {
    name: "Điện thoại thông minh",
    price: 15000000,
    description: "Điện thoại mới nhất 2024"
  },
  {
    name: "Máy tính bảng",
    price: 12000000,
    description: "Thiết kế mỏng, nhẹ"
  },
  {
    name: "Laptop",
    price: 25000000,
    description: "Hiệu suất cao, cho dân thiết kế"
  },
];

console.log("Danh sách sản phẩm:");

for(const product of products) {
    console.log(`${product.name} - ${product.price} - ${product.description}`);
}