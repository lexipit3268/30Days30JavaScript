items = [
    "Laptop Gaming",
    "Bàn phím cơ RGB",
    "Chuột không dây Logitech",
    "Màn hình cong 27 inch",
    "Ổ cứng SSD 1TB",
    "Tai nghe chống ồn Sony",
    "Điện thoại iPhone 15 Pro Max",
    "Đồng hồ thông minh Apple Watch",
    "Máy ảnh Canon EOS",
    "Balo du lịch chống nước",
    "Sách trinh thám",
    "Giày thể thao Nike",
    "Áo phông nam Cotton",
    "Váy maxi họa tiết hoa",
    "Kính râm Ray-Ban",
    "Nước hoa Chanel No.5",
    "Sữa rửa mặt Cetaphil",
    "Kem chống nắng La Roche-Posay",
    "Bình giữ nhiệt Lock&Lock",
    "Máy xay sinh tố Philips",
    "Nồi chiên không dầu điện tử",
    "Bộ drap giường cotton",
    "Đèn ngủ để bàn",
    "Thảm yoga TPE",
    "Tạ tay 5kg",
    "Xe đạp địa hình MTB",
    "Thức ăn cho mèo Royal Canin",
    "Đàn guitar acoustic",
    "Bộ cọ trang điểm",
    "Pin sạc dự phòng Anker"
];

const list = document.getElementById("list");
const input = document.getElementById("search");

function renderItems(items){
   items.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<i class="fa-solid fa-angle-right"></i>${item}`
      list.appendChild(li);
   });
}

renderItems(items);