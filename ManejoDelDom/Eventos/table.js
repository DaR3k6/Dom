const mitabla = document.createElement("table");
const cuerpo = document.createElement("tbody");

mitabla.appendChild(cuerpo);

//Creacion de la fila o row
cuerpo.insertRow(0);
//CELDA 0
cuerpo.rows[0].insertCell(0);
cuerpo.rows[0].cells[0].appendChild(
  document.createTextNode("FILA 0 - CELDA 0")
);
//CELDA 1
cuerpo.rows[0].insertCell(1);
cuerpo.rows[0].cells[1].appendChild(
  document.createTextNode("FILA 1 - CELDA 1")
);
//CELDA 2
cuerpo.rows[0].insertCell(2);
cuerpo.rows[0].cells[2].appendChild(
  document.createTextNode("FILA 2 - CELDA 2")
);

//Fila 1
//Respetando la jerarquia DOM el contenedor superior es el cuerpo y su hijo natural la fila insertRow crea la fila dentro del cuerpo 
cuerpo.insertRow(1);
cuerpo.rows[1].insertCell(0); //Maneja las filas como un arreglo rows[0] y llama el metodo del dom 
cuerpo.rows[1].cells[0].appendChild(document.createTextNode("FILA 0 - CELDA 0")); 
//Las columnas tambien se manejan como arreglo cells[0] las filas y columnas me construye una matriz
//rows[0].cells[0] para poder invocar los metodos DOM de la celda 

//Fila 2
cuerpo.rows[1].insertCell(1);
cuerpo.rows[1].cells[1].appendChild(document.createTextNode("FILA1 - CELDA 1"));
//Fila 3
cuerpo.rows[1].insertCell(2);
cuerpo.rows[1].cells[2].appendChild(document.createTextNode("FILA2 - CELDA 2"));


//Recordar siempre la jerarquia del DOM EL elemento sueperior es body 
document.body.appendChild(mitabla);
