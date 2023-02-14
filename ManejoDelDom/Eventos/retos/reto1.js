const inputColor = document.querySelector("#Color");
const btnAgregar = document.querySelector("#btnAgregar");
const btnFondo = document.querySelector("#btnFondo");
const capaHijo = document.querySelector("#capaHijo");

btnAgregar.addEventListener("click", () => {
  const color = inputColor.value;
  capaHijo.style = "background-color:" + color + ";";
});

btnFondo.addEventListener("click", () => {
  const color = inputColor.value;
  document.body.setAttribute("style", "background-color:" + color + ";");
});
