//khai báo biến
var fullName = 'Tran Nhat Linh';
var age = 19;
alert(fullName);
alert(age);

// comment một dòng
/** 
 * comment nhiều dòng
 * comment nhiều dòng
 * Note what's important
 * vô hiệu hóa mã
*/

// 1 số hàm built-in
console.log('Hôm nay là thứ 7');
console.log(fullName);
prompt('Nhập tuổi của bạn');
confirm('Xác nhận');


// chạy đoạn code sau khoảng thơi gian được ấn định chỉ chạy 1 lần
setTimeout(function(){
alert('Hello Teacher 1')},1000

)

// chạy đoạn code sau khoảng thơi gian được ấn định lặp đi lặp lại 
/**
 * setInterval(function(){
    alert('Hello Teacher 2')},1000
    
    )
 */

// Toán tử trong JavaScript
var a = 20;
var b = 5;
 
// Kết quả biến c có giá trị 25
var c = a + b;
console.log(c);    
    
var d = 12;
 
alert(++c); // kết quả là 13
 
alert(c); // kết quả là 13

var e = 12;
 
alert(c++); // kết quả là 12
 
alert(c); // kết quả là 13
// -- cũng tương tự

//Toán tử quan hệ
var a  = 12;
var b = 20;
console.log(a == b); // False
console.log(a > b); // False
console.log(a >= b); // False
console.log(a < b); // True
console.log(a <= b); // False
console.log(a != b); // True


//Toán tử luận lý
var a = false;
var b = true;
console.log(a && b); // TRUE
console.log(a || b); // TRUE
console.log(!a); // TRUE
console.log(!b); // FALSE

//So sánh bằng trong JavaScript
var a = 12; // number
var b = '12'; // string
 
// TRUE vì cả hai đều có giá trị là 12
document.write(a == b); 
 
// FALSE vì mặc dù giá trị bằng nhau nhưng
// kiểu dữ liệu của a là number, của b là string
document.write(a === b);

// Câu lệnh điều kiện If-else

var isSuccess = 1 < 2 ;
if (isSuccess){
    console.log('DIEU KIEN DUNG');
} else {
    console.log('DIEU KIEN SAI');
}
/**
 * 0
 * null
 * NaN
 * underfined
 * false
 * ''_""
 */
 var  fullName = 'Tran Nhat Linh';
 if (fullName){
     console.log('DIEU KIEN DUNG');
 } else {
     console.log('DIEU KIEN SAI');