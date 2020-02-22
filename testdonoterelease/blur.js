const img1 = document.getElementById("1");
const img2 = document.getElementById("2");
const img3 = document.getElementById("3");
let i = 10;

let  a = setInterval(() =>img1.style.filter = `blur(${i--}px)`,100)
setTimeout(()=>clearInterval(a),2000)