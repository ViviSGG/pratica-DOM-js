let lampada = document.querySelector("img"); // querySelector - chama como no documento css || retornar apenas a primeira tag/elemento
let ligar = document.getElementsByTagName("on"); /* getElementsByTagName - pega os elementos pelo nome da tag */
let desligar = document.getElementsByTagName("off"); /* getElementsByTagName - pega os elementos pelo nome da tag */
let bg = document.querySelector("main"); /* o getElementsByTagName não pegou na tag main  */
console.log(bg);
let titulo = document.querySelector("h1");

function lampLigar() {
  lampada.src = "./assets/on.png";
  bg.style.background = "gold";
  titulo.style.color = "black";
}

function lampDesligar() {
  lampada.src = "./assets/off.png";
  bg.style.background = "black";
  titulo.style.color = "white";
}
