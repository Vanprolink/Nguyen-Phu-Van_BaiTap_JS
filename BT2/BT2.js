var h2El=document.getElementById("h2tag")
console.log(h2El);

var tinhTBE1 = document.getElementById("tinhTB1");
var tinhTBE2 = document.getElementById("tinhTB2");
var tinhTBE3 = document.getElementById("tinhTB3");
var tinhTBE4 = document.getElementById("tinhTB4");
var tinhTBE5 = document.getElementById("tinhTB5");

function xacnhan(){
    var tinhTBVl1 =Number(tinhTBE1.value);
    var tinhTBVl2 =Number(tinhTBE2.value);
    var tinhTBVl3 =Number(tinhTBE3.value);
    var tinhTBVl4 =Number(tinhTBE4.value);
    var tinhTBVl5 =Number(tinhTBE5.value);

    var tinhTB = (tinhTBVl1 + tinhTBVl2 + tinhTBVl3 + tinhTBVl4 + tinhTBVl5) / 5;
    console.log({tinhTB});
    document.getElementById("xuatKetQua").innerText = "Tổng trung bình của 5 số là:  " + tinhTB;
}
