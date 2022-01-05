var h2El = document.getElementById("h2tag");
console.log(h2El);

var qDEl = document.getElementById("qD");
const a = 23500;
// var vNDEl = document.getElementById("VND")
function quydoi(){
    var qDVl = qDEl.value;
    var VND = qDVl * a;
    console.log({VND});
    document.getElementById("xuatKetQua").innerText = "Số Tiền Quy Đổi Là:   " + VND + "  VND";
}

