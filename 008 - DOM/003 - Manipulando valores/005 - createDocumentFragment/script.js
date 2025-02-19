"use strict";

/*
 * dom [principal]
 * fragmentDom [secundario fora do dom principal]
 * fragmentDom é importante para performance e bom desenvolvimento
 * é melhor utilizar ele do que o padrão.
 */

const ul = document.querySelector("ul");
const fragment = document.createDocumentFragment();

const lanches = ["Lanche 1", "Lanche 2", "Lanche 3", "Lanche 4"];

lanches.forEach((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  fragment.append(li);
});

ul.append(fragment)