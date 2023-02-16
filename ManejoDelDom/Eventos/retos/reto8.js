const div = document.createElement("div");
//TABLA
const tabla = document.createElement("table");
const cuerpo = document.createElement("tbody");

const img = document.createElement("img");
const img2 = document.createElement("img");
const img3 = document.createElement("img");

img.src = "./img/logo.jpg";
img.width = "300";

img2.src = "./img/logo.jpg";
img2.width = "300";

img3.src = "./img/logo.jpg";
img3.width = "300";

const encabezado = cuerpo.insertRow(0);

const imagen1 = encabezado.insertCell(0);
imagen1.appendChild(img);
imagen1.style.border = "3px solid black";

imagen1.addEventListener("mouseover", () => {
  img.style = "transform: scale(1.1);";
  imagen1.addEventListener("mouseout", () => {
    img.removeAttribute("style");
  });
});

const imagen2 = encabezado.insertCell(1);
imagen2.appendChild(img2);
imagen2.style.border = "3px solid black";

imagen2.addEventListener("mouseover", () => {
  img2.style = "transform: scale(1.1);";
  imagen2.addEventListener("mouseout", () => {
    img2.removeAttribute("style");
  });
});

const imagen3 = encabezado.insertCell(2);
imagen3.appendChild(img3);
imagen3.style.border = "3px solid black";

imagen3.addEventListener("mouseover", () => {
  img3.style = "transform: scale(1.1);";
  imagen3.addEventListener("mouseout", () => {
    img3.removeAttribute("style");
  });
});

//Agrego la jerarquia
document.body.appendChild(div);
div.appendChild(tabla);
tabla.appendChild(cuerpo);
