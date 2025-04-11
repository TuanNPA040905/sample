// let cuc = document.querySelector(".header__action--signup");
// Object.assign(cuc.style, {
//   backgroundColor: "red",
// });

// let heading = document.querySelector(".hero__heading");

// Object.assign(heading.style, {
//   color: "yellow",
// });

// let buttons = document.querySelectorAll(".btn");
// duyệt for để lấy các phần tử
// for (let btn of buttons) {
//   if (btn instanceof HTMLElement) {
//     btn.style.backgroundColor = "blue";
//     btn.innerHTML = "Click me";
//     btn.style.fontSize = "2em";
//     btn.style.color = "yellow";
//   }
// }

// 36.11: Truy cập Parent, Child, and Siblings
// Truy cập vào các phần tử cha, con, anh em
// Parent: cha
// Child: Con
// Siblings: anh em ruột
// Ví dụ
// let elm = document.querySelector(".hero__content");
// 1. Truy cập vào phần tử cha (Phần tử cha thì là duy nhất)
// console.log(elm.parentElement);
// đổi màu nền của thẻ cha
// elm.parentElement.style.backgroundColor = "red";

// 2. Truy cập vào phần tử con (phần tử con có thể có nhiều
// console.log(elm.children);
// HTMLCollection(3) [h1.hero__heading, p.hero_desc, div.hero_row]
// console.log(elm.children[0]);
// console.log(elm.children[1]);
// console.log(elm.children[2]);

// 3. nextElementSiblings: chọn phần tử anh em kế tiếp
// console.log(elm.children[1].nextElementSibling);

// 3. previousElementSiblings: chọn phần tử anh em trước đó
// console.log(elm.children[1].previousElementSibling);

// 36.12: append, prepend:
// Phương thức dùng để thêm một hoặc nhiều phần tử con vào trong phần tử cha
// append: Thêm vào cuối
// prepend: Thêm vòa đầu
// Ví dụ 1:
// Bước 1: create element
// Cú pháp: document.createElement('element')     //element: tên thẻ tạo

const newImg = document.createElement("img");

// Kiểm tra toàn bộ thuộc tính và phương thức newIMG
console.log(newImg);

// Bước 2. set attribute
// newImg.setAttribute("src", "./assets/img/newIMG.jpg");

// Cách 2:
newImg.src = "./assets/img/newIMG.jpg";

// Bước 3. append: thêm vào 1 phần tử đã có sẵn
document.body.append(newImg); //Thêm vào cuối phần tử cha(trong trường hợp này là body)
// set chiều rộng 100% viewport width
newImg.style.width = "100vw";

// Ví dụ 2: Thêm thẻ p
const newText = document.createElement("p");

// Bước 2 set attribute
newText.textContent = "Xin chào, em đang học JS";
document.body.append(newText);

// Ví dụ 3: thêm vào 1 phần từ khác
const p = document.querySelector(".hero__desc");
p.append("Sông cầu nước chảy lơ thơ, có đôi trai gái ngồi hơ quần đùi");

// Ví dụ 4: Thêm nhiều phần tử vào cuối phần tử cha
// Tạo các phần tử mới

let elm1 = document.createElement("p");
elm1.textContent = "Đây là đoạn văn mới thêm";

let elm2 = document.createElement("span");
elm2.textContent = "Đây là thẻ span";

// Lấy phần tử cha
let container = document.querySelector(".hero__heading");
// thêm nhiều phần tử mới vào cuối phần tử cha
container.append(elm1, elm2, "Some more text");

// Prepend
// Nếu muốn thêm vào đầu phần tử cha thì dùng prepend
container.prepend("Hi!");
