const botao = document.querySelector(".like-btn");

let texto = botao.querySelector("span");

botao.addEventListener("click", botaoClicado);

function botaoClicado() {

    console.log("Fui clicado!");

    texto.textContent++;
}