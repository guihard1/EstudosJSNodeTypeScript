"use strict";

const p = document.getElementsByClassName("paragrafo");
//Pega todos os elementos com a class paragrafo sem precisar de um .

console.log(p);

for (let element of p) {  //para cada elemento do p faça:
  element.style.color = "#FFF";
  element.style.padding = "20px";
  console.log(element);
}