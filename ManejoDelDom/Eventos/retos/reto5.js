const table = document.createElement("table");
const cuerpo = document.createElement("tbody");
const buton = document.createElement("button");

buton.setAttribute("class", "btn btn-primary");
buton.innerHTML = "CREAR TABLA";

table.appendChild(cuerpo);


buton.addEventListener("click", () => {

    cuerpo.setAttribute("class", "bg-success ");
    cuerpo.cells.setAttribute("class","border border-primary p-2 mb-2")
    //Filas 0
  cuerpo.insertRow(0);
  cuerpo.rows[0].insertCell(0);
  cuerpo.rows[0].cells[0].appendChild(document.createTextNode("FILAS"));
  cuerpo.rows[0].insertCell(1);
  cuerpo.rows[0].cells[1].appendChild(document.createTextNode("FILAS"));
  cuerpo.rows[0].insertCell(2);
  cuerpo.rows[0].cells[2].appendChild(document.createTextNode("FILAS"));
  cuerpo.rows[0].insertCell(3);
  cuerpo.rows[0].cells[3].appendChild(document.createTextNode("FILAS"));
  cuerpo.rows[0].insertCell(4);
  cuerpo.rows[0].cells[4].appendChild(document.createTextNode("FILAS"));

  //FILAS 1
  cuerpo.insertRow(1);
  cuerpo.rows[1].insertCell(0);
  cuerpo.rows[1].cells[0].appendChild(document.createTextNode("FILAS"));
  cuerpo.rows[1].insertCell(1);
  cuerpo.rows[1].cells[1].appendChild(document.createTextNode("FILAS"));
  cuerpo.rows[1].insertCell(2);
  cuerpo.rows[1].cells[2].appendChild(document.createTextNode("FILAS"));
  cuerpo.rows[1].insertCell(3);
  cuerpo.rows[1].cells[3].appendChild(document.createTextNode("FILAS"));
  cuerpo.rows[1].insertCell(4);
  cuerpo.rows[1].cells[4].appendChild(document.createTextNode("FILAS"));

  //FILAS 2
  cuerpo.insertRow(2);
  cuerpo.rows[2].insertCell(0);
  cuerpo.rows[2].cells[0].appendChild(document.createTextNode("FILAS"));
  cuerpo.rows[2].insertCell(1);
  cuerpo.rows[2].cells[1].appendChild(document.createTextNode("FILAS"));
  cuerpo.rows[2].insertCell(2);
  cuerpo.rows[2].cells[2].appendChild(document.createTextNode("FILAS"));
  cuerpo.rows[2].insertCell(3);
  cuerpo.rows[2].cells[3].appendChild(document.createTextNode("FILAS"));
  cuerpo.rows[2].insertCell(4);
  cuerpo.rows[2].cells[4].appendChild(document.createTextNode("FILAS"));

});
document.body.appendChild(buton);
document.body.appendChild(table);