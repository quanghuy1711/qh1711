function cong(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let x = a+b;
    document.getElementById("result").innerHTML="KQ="+x;
}
function tru(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let x = a-b;
    document.getElementById("result").innerHTML="KQ="+x;
}
function nhan(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let x = a*b;
    document.getElementById("result").innerHTML="KQ="+x;
}
function chia(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let x = a/b;
    document.getElementById("result").innerHTML="KQ="+x;
}