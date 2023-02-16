//Objeto envento --event
const btnEnviar = document.querySelector("#btnEnviar");
const zona = document.querySelector("#zona");
const caja = document.querySelector("#caja");

btnEnviar.addEventListener("click", (envento) => {
  // console.log(envento.type)
  // console.log(envento.target)
  // console.log(envento.detail)
  console.log(envento.bubbles);
});

zona.addEventListener("mouseover", (envento) => {
  console.log(envento.type);
  console.log(envento.bubbles);
});

caja.addEventListener("keyup", (envento) => {
  console.log(envento.keyCode);
  console.log(envento.bubbles);
});
