const capa = document.createElement("div");
const input = document.createElement("input");
const boton = document.createElement("button");
input.setAttribute("type", "color");
capa.setAttribute("class", "col-6");
boton.setAttribute("class", "btn btn-success");
boton.innerHTML = "CAMBIAR EL COLOR";

//Creo la tabla
let contador = 0;

const tabla = document.createElement("table");
const cuerpo = document.createElement("tbody");

const encabezado = cuerpo.insertRow(0);

const nombreEncabezado = encabezado.insertCell(0);
nombreEncabezado.appendChild(document.createTextNode("NOMBRE"));
nombreEncabezado.style.border = "4px solid black";

const sexoEncabezado = encabezado.insertCell(1);
sexoEncabezado.appendChild(document.createTextNode("SEXO"));
sexoEncabezado.style.border = "4px solid black";

const edadEncabezado = encabezado.insertCell(2);
edadEncabezado.appendChild(document.createTextNode("EDAD"));
edadEncabezado.style.border = "4px solid black";

boton.addEventListener("click", () => {
  if (contador != 3) {
    contador++;
  }

  if (contador == 1) {
    const color = input.value;
    tabla.rows[0].cells[0].style = "background-color:" + color;
  }

  if (contador == 2) {
    const color = input.value;
    tabla.rows[0].cells[1].style = "background-color:" + color;
  }

  if (contador == 3) {
    const color = input.value;
    tabla.rows[0].cells[2].style = "background-color:" + color;
    contador = 0;
  }
});

document.body.appendChild(capa);
capa.appendChild(input);
capa.appendChild(boton);
capa.appendChild(tabla);
tabla.appendChild(cuerpo);
