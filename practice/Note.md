Session 1
<phỏng vấn> Thế nào là thẻ block, inline. Phân biệt 
<phỏng vấn> Các thẻ p, h1, h2, ol.li, ul>li, div... display là block
<phỏng vấn> Các thẻ a, i, span,... display là inline
<phỏng vấn> Phân cấp cha con của các phần tử HTML
<phỏng vấn> Cấu trúc của các phần tử HTML
./ là lấy ảnh cùng cấp, ../ là lấy ảnh cấp cha (dùng để lấy ảnh tương đối, lấy ảnh tuyệt đối là lấy đường link)
Session 2
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