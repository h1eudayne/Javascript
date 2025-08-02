const product = {
    id: 1,
    name: "Điện thoại thông minh",
    price: 15000000,
  };
  
  const requiredProps = ["id", "name", "price"];
  
  console.log("Kiểm tra thuộc tính sản phẩm:");
  
  for (property of requiredProps) {
    if (property in product) {
      console.log(`Sản phẩm có ${property}.`);
    } else {
      console.log(`Sản phẩm thiếu ${property}.`);
    }
  }
  