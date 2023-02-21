//Creo la estructura de la tabla
const row = document.querySelector("#row");
const div = document.createElement("div");
const tabla = document.createElement("table");
const cuerpo = document.createElement("tbody");
//CREO la variable api
const api = "mascotas.json";
div.setAttribute("class", "col-12 mt-3");
//Creo el encabezado
const encabezadoFila = cuerpo.insertRow(0);
const encabezado = document.createElement("th");
const encabezado2 = document.createElement("th");
const encabezado3 = document.createElement("th");
const encabezado4 = document.createElement("th");
const encabezado5 = document.createElement("th");

encabezado.innerHTML = "NOMBRE";
encabezado2.innerHTML = "GENERO";
encabezado3.innerHTML = "COLOR";
encabezado4.innerHTML = "TIPO";
encabezado5.innerHTML = "FECHA NACIMIENTO";

encabezadoFila.append(
  encabezado,
  encabezado2,
  encabezado3,
  encabezado4,
  encabezado5
);
//Leer json
fetch(api)
  .then(response => {
    return response.json();
  })
  .then(response => {
    for (let i = 0; i < response.length; i++) {
      cuerpo.insertRow(i + 1);
      //NOMBRE
      const nombre = cuerpo.rows[i + 1].insertCell(0);
      nombre.appendChild(document.createTextNode(response[i].nombre));
      //GENERO
      const genero = cuerpo.rows[i + 1].insertCell(1);
      genero.appendChild(document.createTextNode(response[i].genero));
      //COLOR
      const color = cuerpo.rows[i + 1].insertCell(2);
      color.appendChild(document.createTextNode(response[i].color));
      //TIPO
      const tipo = cuerpo.rows[i + 1].insertCell(3);
      tipo.appendChild(document.createTextNode(response[i].tipo));
      //FECHA NACIMIENTO
      const fecha = cuerpo.rows[i + 1].insertCell(4);
      fecha.appendChild(document.createTextNode(response[i].fecha));
    }
    tabla.appendChild(cuerpo);
    tabla.setAttribute("class", "table table-dark table-striped");
  });

//Creo la jerarquia
row.appendChild(div);
div.appendChild(tabla);
