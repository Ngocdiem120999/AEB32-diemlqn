// hosting trong jS thực chất là hai câu lệnh
// let num
// num = 1
// kiểu nguyên thủy
let num = 1; //số
let str = "hello123"; //chuỗi
let boo = "false"; //true/false
let unde = undefined;
let nu = null;

console.log("number", num);
console.log("string", str);
console.log("boolean", boo);
console.log("underfined", unde);
console.log("null", nu);

// kiểu phức tạp
const objUser = { name: "Diem", age: 16 };
console.log("object", objUser);
console.log("object", objUser.name);
console.log("object", objUser?.address); // không có sẽ hiện null

let ar = [1, 2, 3, 4];
let ar1 = ["a", "b", "c"]; // -> Array<string>

console.log("array", ar); //index:0 lenghth 0--->4 Array<number>
console.log("null", ar[0]);

let user = { name: "Diem", age: 16 };
// tên function có động từ trong tên
function getName() {
let user = { name: "Diem", age: 16 };
console.log(user);
return user;
}
// sẽ chạy khi không có param
let res = getName;
console.log(res);

function getUserParam(_user) {
console.log(_user);
}
getUserParam(user); //nhận giá trị khi gọi vào

// hiện hộp thoại thông báo
alert (num)
alert ('Con số mấy là con số ' + num)


// hiện hộp thoại có điền thông tin
prompt ('Enter your email at here')

// sử dụng confirm
function confirmDelete() {
var name = confirm ('Are you want delete this item?');
alert ('You select: '+ name)
}

// get elm by ID
// tạo func rồi kiểm tra bằng console.log(' ')
// --> handle event: set thuộc tính event --> thẻ mở của elm html5 --> truyển tên function
// viết các câu lệnh trong func
// change text
// get elm: document.getElementById('#ID")
//  console.log(elm)
// elm.style.color
// elm.innerHTML

function handleSend() {
    let elm = document.getElementById('btn-send')
    elm.style.color = 'red'
    elm.textContent = 'Sent' //thay đổi nội dung trong chữ
    // elm.style.display = 'none' //để ẩn nút bấm
}


// input type text, email, password -> quan ly gia tri elm.value
// input type checkbox, radio -> quan ly gia tri elm.checked


