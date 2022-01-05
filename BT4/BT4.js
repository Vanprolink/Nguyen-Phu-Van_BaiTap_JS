var h2El=document.getElementById("h2tag");

var chieuDaiEl = document.getElementById("chieuDaitxt");

var chieuRongEl = document.getElementById("chieuRongtxt");




function dientich(){
    var a = Number(chieuDaiEl.value);
    var b = Number(chieuRongEl.value);
    var DienTich = a * b;
    console.log({DienTich});
    document.getElementById("xuatKetQua").innerText = "Diện Tích Là:   " + DienTich ;
}

function chuVi(){
    var a = Number(chieuDaiEl.value);
    var b = Number(chieuRongEl.value);
    var chuVi =  (a + b)*2;
    console.log({chuVi});
    document.getElementById("xuatKetQua").innerText = "Chu Vi Là:   " + chuVi ;
}