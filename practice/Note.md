#Session 1
<phỏng vấn> Thế nào là thẻ block, inline. Phân biệt 
<phỏng vấn> Các thẻ p, h1, h2, ol.li, ul>li, div... display là block
<phỏng vấn> Các thẻ a, i, span,... display là inline
<phỏng vấn> Phân cấp cha con của các phần tử HTML
<phỏng vấn> Cấu trúc của các phần tử HTML
./ là lấy ảnh cùng cấp, ../ là lấy ảnh cấp cha (dùng để lấy ảnh tương đối, lấy ảnh tuyệt đối là lấy đường link)

#Session 2
<frameset cols="25%,*,25%"> kích thước hai bên 25%, giữa tự động
Thay đổi 2 block cùng 1 hàng bằng display flex
nếu display là flex thì elements con sẽ ăn theo width của element cha
Thêm style vào thẻ mở để chỉnh sửa display, width, height,.... gọi là CSS inline (không nên dùng)
CSS internal là thêm thẻ style vào phần head rồi thêm thuộc tính cho nó như là display, width, height,.... cho các phần tử bằng cách gọi các element bằng class/id/tag name(div,span,..) rồi ngoặc nhọn {...}
CSS external là tạo 1 file .css ở ngoài rồi nhúng .css vào .html bằng link (khuyến khích dùng)
!important dùng để đánh dấu độ ưu tiên
<phỏng vấn> Phân biệt cấp độ ưu tiên: !important; style inline; class, id, tagname
không được code quá 2/3 màn hình và 1000 dòng vì khó bảo hành code
thẻ body mặc định là có margin nên mình phải cài lại là margin = 0, padding = 0 để vừa với web

#Session3
<phỏng vấn> Phân cấp mức độ ưu tiên của CSS
-!important
-style inline
-class, id, tag name
Phần body chỉ nên dùng để reset các thuộc tính như margin, padding,... các thuộc tính khác nên code và các element đó
Align-item là căn giữa trục y, justify-content là căn giữa trục x
Không đặt tên class, id trùng với tên tag name
Display: flex --->flex-direction mặc định là row nên nó sẽ hiện hàng ngang nên sửa lại là col
Object-fit: cover/ fill/ contain/ none/ scale-down để hình chỉ chỉnh kích thước nhưng không bị sai form

#Session3-2
Để sử dụng Boostrap, truy cập vào getboostrap.com, vào Doc -> Getting started (Introduction) -> Quick start -> cop link css gắn vào header, cop 2 link JS gắn vào Body và sử dụng.
vd: .col-sm-4 là cột này gồm 4 cột
ps-2 là (padding star) padding left, t là top, e (padding end) padding right, b là bottom, x là right và left, y là top và bottom

#Session7
Condition rendering
var x = 1
x && console.log('Day la so 1') ---> Day la so 1
x === y
switch-case, case phải bằng giá trị
parseInt() chuyển đổi sang number
split() cắt chuỗi thành mảng Array, vd: let ar = input.split(',')
join() nối mảng thành string

#Session9
split() cắt chuỗi thành mảng Array, vd: let ar = input.split(',')
lấy phần tử của mảng console.log(ar[0])
vòng lặp For, index là số lần lặp for
for (let index = 0; index < array.length; index++) {
          console.log(ar[index]);
          }
ví dụ trên sẽ lấy được cái phần tử trong Array: a,b,c,d

let element = ar[index] for each đã lượt bỏ phần này bằng element

Nếu funct dùng 1 lần thì dùng : arrow function (element)=>{//Câu lệnh sẽ để đây}

array.forEach(element, index) => {
          console.log(element, index);
        });

sẽ được sử dụng nhiều trong ReactJS, ar.map sẽ tương tự như ar.forEach
ar.map(elm) => {console.log(element)}

bài tập 5:
function checkNT(number) {
        let isNT = true;
          for (let i = 2; i < n; i++) {
            if (n % i === 0) {
              isNT = false;
            }
          }
          return isNT
        }
         let res = checkNT()
         console.log(res)
 bài tập 6:
 check số max, min
 nếu max chia hết cho min thì min là ước chung
 dùng for là
 i=2; i < min/2
 i=2; i < sqrt(min)
 sử dụng for ngược
 for (let index = 10; index >= 0; index--) {
          const element = array[index]; break;
          
        }
bài tập 7:
tách string thành mảng array bằng split
dùng forEach --> capital...
toUpCase viết hoa slice(0,1)/ charAt(0) là lấy chữ đầu tiên
dùng slice để lấy phần tử con vd: slice(1) sẽ lấy tất cả phần sau.toLowerCase

bài tập 7: dùng string.length
dùng .trim để xóa dấu cách cuối và đầu

bài tập đếm k trong mảng, trước tiên phải làm tam giác vuông và tam giác đều
