const items = [
   "Laptop Gaming Asus ROG",
   "Laptop Gaming Dell Alienware",
   "Laptop Gaming Acer Predator",
   "Bàn phím cơ RGB DareU",
   "Bàn phím cơ RGB Akko",
   "Chuột không dây Logitech G Pro",
   "Chuột không dây Logitech MX Master",
   "Màn hình cong 27 inch Samsung",
   "Màn hình cong 27 inch LG",
   "Ổ cứng SSD 1TB Kingston",
   "Ổ cứng SSD 1TB Samsung",
   "Tai nghe chống ồn Sony WH-1000XM5",
   "Tai nghe chống ồn Bose QuietComfort",
   "Điện thoại iPhone 15 Pro Max",
   "Điện thoại Samsung Galaxy S24 Ultra",
   "Đồng hồ thông minh Apple Watch Series 9",
   "Đồng hồ thông minh Garmin Venu",
   "Máy ảnh Canon EOS R6",
   "Máy ảnh Sony Alpha A7 III",
   "Balo du lịch chống nước The North Face",
   "Balo du lịch chống nước Deuter",
   "Sách trinh thám Conan",
   "Sách trinh thám Sherlock Holmes",
   "Giày thể thao Nike Air Force 1",
   "Giày thể thao Adidas Ultraboost",
   "Áo phông nam Cotton Uniqlo",
   "Áo phông nam Cotton Yody",
   "Váy maxi họa tiết hoa xanh",
   "Váy maxi họa tiết hoa đỏ",
   "Kính râm Ray-Ban Aviator",
   "Kính râm Ray-Ban Wayfarer",
   "Nước hoa Chanel No.5 EDP",
   "Nước hoa Chanel No.5 EDT",
   "Sữa rửa mặt Cetaphil Gentle Skin Cleanser",
   "Sữa rửa mặt Cetaphil Oily Skin Cleanser",
   "Kem chống nắng La Roche-Posay Anthelios",
   "Kem chống nắng Anessa Perfect UV Sunscreen",
   "Bình giữ nhiệt Lock&Lock 500ml",
   "Bình giữ nhiệt Lock&Lock 700ml",
   "Máy xay sinh tố Philips HR2225",
   "Máy xay sinh tố Sunhouse SHD5322",
   "Nồi chiên không dầu điện tử Philips",
   "Nồi chiên không dầu điện tử Tefal",
   "Bộ drap giường cotton trắng",
   "Bộ drap giường cotton xám",
   "Đèn ngủ để bàn trắng",
   "Đèn ngủ để bàn gỗ",
   "Thảm yoga TPE xanh dương",
   "Thảm yoga TPE hồng",
   "Tạ tay 5kg nhựa",
   "Tạ tay 5kg gang",
   "Xe đạp địa hình MTB Giant",
   "Xe đạp địa hình MTB Merida",
   "Thức ăn cho mèo Royal Canin Fit",
   "Thức ăn cho mèo Royal Canin Kitten",
   "Đàn guitar acoustic Yamaha",
   "Đàn guitar acoustic Fender",
   "Bộ cọ trang điểm BH Cosmetics",
   "Bộ cọ trang điểm Real Techniques",
   "Pin sạc dự phòng Anker PowerCore",
   "Pin sạc dự phòng Anker PowerIQ",
   "Pin sạc dự phòng Xiaomi 10000mAh",
   "Pin sạc dự phòng Remax 20000mAh"
];

const list = document.getElementById("list");
const input = document.getElementById("search");

function highlight(text, keyword) {
   if (!keyword) {
      return text;
   };
   const regex = new RegExp(`(${keyword})`, "gi");
   return text.replace(regex, `<span class="highlight">$1</span>`);
}

function renderItems(items) {
   list.innerHTML = "";
   if (items.length == 0) {
      const li = document.createElement("li");
      li.innerHTML = `Không tìm thấy!`;
      list.appendChild(li);
   } else {
      items.forEach(item => {
         const li = document.createElement("li");
         let highlightedItem = highlight(item, input.value.trim());
         li.innerHTML = `<i class="fa-solid fa-angle-right"></i>${highlightedItem}`
         list.appendChild(li);
      });
   }
}

renderItems(items);

input.addEventListener("input", () => {
   let valueSearch = String(input.value);
   let keyword = valueSearch.trim().toLocaleLowerCase();

   let listFiltered = items.filter(item => item.toLowerCase().includes(keyword));
   renderItems(listFiltered);
})