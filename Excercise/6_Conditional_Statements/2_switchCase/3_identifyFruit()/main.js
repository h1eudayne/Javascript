const identifyFruit = (color) => {
  switch (color) {
    case "đỏ":
    case "hồng": {
      return "Táo";
    }
    case "vàng": {
      return "Chuối";
    }
    case "tím": {
      return "Nho";
    }
    case "cam":
    case "xanh": {
      return "Cam";
    }
  }
};

// Sample usage
console.log(identifyFruit("hồng")); // Táo
console.log(identifyFruit("cam")); // Cam
