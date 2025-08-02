const inventory = {
  aoThun: 25,
  quanJeans: 30,
  giayTheThao: 15,
};

let totalItems = 0;

for(const item in inventory) {
  totalItems += inventory[item];
}

console.log(`Tổng số sản phẩm: ${totalItems}`);
