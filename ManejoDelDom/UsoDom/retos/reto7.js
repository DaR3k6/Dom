//Agrego el inpur y el ul
const agregar = document.querySelector("#escribirTarea");
const pendientes = document.querySelector("#pendientes");
//Agrego los botones
const btnAgregar = document.querySelector("#Agregar");
const btnDisminuir = document.querySelector("#Disminuir");

btnAgregar.addEventListener("click", () => {
  const lista = document.createElement("li");
  lista.innerHTML = agregar.value;
  pendientes.appendChild(lista);
});

btnDisminuir.addEventListener("click", () => {
  pendientes.removeChild(pendientes.lastElementChild);
});
