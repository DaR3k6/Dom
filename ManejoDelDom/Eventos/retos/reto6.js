// CREO LA TABLA
const table = document.createElement("table");
const cuerpo = document.createElement("tbody");
const div1 = document.createElement("div");
//CREO LOS BOTONES
const boton = document.createElement("button");
const botonEliminar = document.createElement("button");
const botonAgregar = document.createElement("button");
//AGREGO ESTILOS
botonEliminar.innerHTML = "Eliminar tabla";
botonAgregar.innerHTML = "Editar tabla";
boton.innerHTML = "Crea una tabla";
botonAgregar.setAttribute("class", "btn btn-success");
boton.setAttribute("class", "btn btn-primary");
botonEliminar.setAttribute("class", "btn btn-danger");

//CREO EL EVENTO CLICK
boton.addEventListener("click", () => {
  const div2 = document.createElement("div");
  const input = document.createElement("input");
  const input2 = document.createElement("input");
  const input3 = document.createElement("input");
  //Agrego el encabezado
  const encabezado = cuerpo.insertRow(0);
  //Nombre
  const nombreEncabezado = encabezado.insertCell(0);
  nombreEncabezado.appendChild(document.createTextNode("NOMBRE"));
  nombreEncabezado.style.border = "4px solid black";
  //APELLIDO
  const sexoEncabezado = encabezado.insertCell(1);
  sexoEncabezado.appendChild(document.createTextNode("SEXO"));
  sexoEncabezado.style.border = "4px solid black";
  //EDAD
  const edadEncabezado = encabezado.insertCell(2);
  edadEncabezado.appendChild(document.createTextNode("EDAD"));
  edadEncabezado.style.border = "4px solid black";

  botonEliminar.addEventListener("click", () => {
    for (let i = cuerpo.rows.length - 1; i >= 0; i--) {
      cuerpo.deleteRow(i);
      for (let j = cuerpo.rows.length - 1; j >= 0; j--) {
        cuerpo.rows[i].deleteCell(j);
      }
    }
  });

  botonAgregar.addEventListener("click", () => {
    for (let i = 0; i < 3; i++) {
      cuerpo.insertRow(i + 1);
      let valor = "";
      //NOMBRE
      valor = input.value;
      const nombre = cuerpo.rows[i + 1].insertCell(0);
      nombre.appendChild(document.createTextNode(valor.substring()));
      nombre.style.border = "4px solid black";
      //SEXO
      valor = input2.value;
      const sexo = cuerpo.rows[i + 1].insertCell(1);
      sexo.appendChild(document.createTextNode(valor.substring()));
      sexo.style.border = "4px solid black";
      //EDAD
      valor = input3.value;
      const edad = cuerpo.rows[i + 1].insertCell(2);
      edad.appendChild(document.createTextNode(valor.substring()));
      edad.style.border = "4px solid black";
      input.value = "";
      input2.value = "";
      input3.value = "";
      break;
    }
  });
  document.body.appendChild(div2);
  div2.append(input, input2, input3, botonAgregar, botonEliminar);
  table.appendChild(cuerpo);
});
//AGREGO LA JERARQUIA
document.body.appendChild(div1);
div1.append(boton, table);
