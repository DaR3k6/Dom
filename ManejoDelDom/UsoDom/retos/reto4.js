const boton = document.createElement("button");
boton.innerText = "Activar CSS";
document.body.appendChild(boton); // Create);

//Creo el evento click
boton.addEventListener("click", () => {
  //Contenedor Padre
  const contenedorPadre = document.createElement("div");
  contenedorPadre.setAttribute("class", "container-fluid");
  //Contenedor de las rows del titulo
  const ContenedorTitulo = document.createElement("div");
  ContenedorTitulo.setAttribute("class", "text-center");
  ContenedorTitulo.innerHTML = "<h2>SOLO BOOSTRAP</h2>";

  const ContenedorRows = document.createElement("div");
  ContenedorRows.setAttribute("class", "row");
  //Creo las columnas
  const col1 = document.createElement("div");
  //Creo las columnas
  const col2 = document.createElement("div");
  //Creo las columnas
  const col3 = document.createElement("div");
  //Creo las columnas
  const col4 = document.createElement("div");

  col1.setAttribute("class", "col-3");
  col2.setAttribute("class", "col-3");
  col3.setAttribute("class", "col-3");
  col4.setAttribute("class", "col-3");

  col1.innerText = "SOLO BOOSTRAP";
  col2.innerText = "BOOTSTRAP";
  col3.innerText = "WARZONE";
  col4.innerText = "PINGUINO";

  document.body.appendChild(contenedorPadre);
  contenedorPadre.appendChild(ContenedorTitulo);
  contenedorPadre.appendChild(ContenedorRows);
  ContenedorRows.appendChild(col1);
  ContenedorRows.appendChild(col2);
  ContenedorRows.appendChild(col3);
  ContenedorRows.appendChild(col4);
});
