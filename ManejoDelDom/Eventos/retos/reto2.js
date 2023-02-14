const imagen1 = document.querySelector("#imagen1");
const imagen2 = document.querySelector("#imagen2");
const imagen3 = document.querySelector("#imagen3");

imagen1.addEventListener("mousemove", () => {
  const capahijo = document.createElement("div");
  capahijo.innerHTML = imagen1.getAttribute("src");
  document.body.appendChild(capahijo);
});

imagen2.addEventListener("mousemove", () => {
  const capahijo = document.createElement("div");
  capahijo.innerHTML = imagen2.getAttribute("src");
  document.body.appendChild(capahijo);
});

imagen3.addEventListener("mousemove", () => {
  const capahijo = document.createElement("div");
  capahijo.innerHTML = imagen3.getAttribute("src");
  document.body.appendChild(capahijo);
});
