"use strict";

/**
 * textContent => Retorna o text COM formatações, mas sem os elementos HTML
 * innerText => Retorna somente o texto, sem formatações ou elementos HTML
 */

const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerText);

// p.innerText = "Luiz Guilherme";
// p.textContent = "Luiz Guilherme";
//Tanto o innerText quanto o textContent através do JS não é possivel adicionar elementos HTML dentor deles
