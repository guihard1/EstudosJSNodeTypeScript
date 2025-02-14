"use strict";

const p = document.querySelectorAll("p");

//index pega a chave do elemento (posição no array)
p.forEach((element, index) => {
  element.style.color = "#FFF";
  element.style.padding = "20px";

  if (index === 0) {
    element.style.color = "blue";
  }

  if (index === 1) {
    element.style.color = "red";
  }
});

console.log(p);
