function tirarDado(caras) {
  return Math.floor(Math.random() * caras) + 1;
}

const inputCantidad = document.getElementById("cantidad");
const inputCaras = document.getElementById("caras");
const imputModificador = document.getElementById("modificador");
const botonTirar = document.getElementById("tirar");
const resultado = document.getElementById("resultado");
const detalle = document.getElementById("detalle");

botonTirar.addEventListener("click", function () {
  const cantidad = Number(inputCantidad.value);
  const caras = Number(inputCaras.value);
  const modificador = Number(imputModificador.value);

  // Validación: que sean enteros y estén en rango
  if (!Number.isInteger(cantidad) || !Number.isInteger(caras) || cantidad < 1 || caras < 2) {
    resultado.textContent = "Introduce valores válidos";
    detalle.textContent = "";
    return;
  }

  const tiradas = [];
  let total = 0;

  for (let i = 0; i < cantidad; i++) {
    const tirada = tirarDado(caras);
    tiradas.push(tirada);
    total += tirada;
  }

  //suma del modificador
  total += modificador;

  resultado.textContent = cantidad + "d" + caras + " + " + modificador + " = " + total;
  detalle.textContent = "[" + tiradas.join(", ") + "]";
});

