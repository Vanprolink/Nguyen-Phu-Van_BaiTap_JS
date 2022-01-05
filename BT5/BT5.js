var h2El=document.getElementById("h2tag");

var kiSoEl = document.getElementById("kiSo");

function tinhKiSo(){
    var tramVl = Number(kiSoEl.value)/100;
    var chucVl = Number(kiSoEl.value)%100/10;
    var dViVl = Number(kiSoEl.value)%100%10;
    
    var tram =Math.floor(tramVl);
    var chuc =Math.floor(chucVl);
    var dVi =Math.floor(dViVl);
    var tongVl = tram + chuc + dVi;
    console.log({tram});
    console.log({chuc});
    console.log({dVi});
    console.log({tongVl});
    document.getElementById("xuatKetQua").innerText = "Tổng Kí Số Là:   " + tongVl;
}