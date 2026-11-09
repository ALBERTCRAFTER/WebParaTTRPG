// Devuelve un número aleatorio entre 1 y "caras"
function tirarDado(caras) {
  return Math.floor(Math.random() * caras) + 1;
}

// Buscamos los elementos de la página
const botones = document.querySelectorAll("button");
const resultado = document.getElementById("resultado");

// A cada botón le decimos qué hacer cuando se pulsa
botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const caras = Number(boton.dataset.caras);
    const tirada = tirarDado(caras);
    resultado.textContent = "d" + caras + ": " + tirada;
  });
});