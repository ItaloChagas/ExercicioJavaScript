var titulo = document.querySelector("caption");
titulo.innerHTML = "Tabela manera";
titulo.style.color = "blue";

var Mytable = document.querySelector("#tabela");
var Mytr = Mytable.querySelector("td");
Mytr.style.backgroundColor = "red";

document.write("<TD>");
for( var i = 0; i < Mytr.length; i++){



};


email = "mandaisndiansd";
var indiceT = email.indexOf("t");
email.substring(0, indiceT);
var temArroba = email.indexOf("@") >= 0;
if(temArroba){
    alert("oi");
}else {
    alert("arroba");
}