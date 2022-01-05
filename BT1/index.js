
var h2El=document.getElementById("h2tag");
console.log(h2El);
var luong1El = document.getElementById("luong1")
console.log(luong1El);
const a = 100000;

function dangnhap(){
    var tinhluong = luong1El.value;
    var Tien = tinhluong * a;
    console.log({Tien});
    document.getElementById("xuatKetQua").innerText = "Tiền Lương Nhận Được   " + Tien + "  VND";
}