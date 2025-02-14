"use strict";
//Utilizando . você consegue acessar o class, utilizando o # você consegue acessar o id
const h1 = document.getElementById("title"); //Pega o elemento pelo id
// const title = document.querySelector("#title"); //Pega o elemento pelo id
const title2 = document.querySelector(".paragrafo"); //Pega o elemento pela class
const classP = document.querySelectorAll(".paragrafo strong"); //Pra acessar um elemento filho dentro de uma class

let timer = 0;
const title = document.querySelector("title");

setInterval(() => {
  title.innerText = timer;
  timer++;
}, 1000);
