"use strict";

/*
 * innerHTML => Retorna o texto COM formatações e COM elementos HTML
 * createElement => Cria um elemento HTML
 */

const div = document.querySelector("div");
// console.log(1, div);

// div.innerHTML = `${div.innerHTML}<strong>Texto alterado.</strong>`;
// console.log(2, div);

const elementUl = document.createElement("ul");

[1, 2, 3].forEach((element) => {
  const elementLi = document.createElement("li");
  elementLi.innerHTML = element;
  elementUl.appendChild(elementLi);
});

div.appendChild(elementUl);

console.log(elementUl);
