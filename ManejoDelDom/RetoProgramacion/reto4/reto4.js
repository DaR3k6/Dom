//CREO LA TABLA
const row = document.querySelector("#row");
const div = document.createElement("div");
const tabla = document.createElement("table");
const cuerpo = document.createElement("tbody");
//CREO EL ENCABEZADO
const encabezadoFila = cuerpo.insertRow(0);
const encabezado = document.createElement("th");
const encabezado2 = document.createElement("th");
const encabezado3 = document.createElement("th");
const encabezado4 = document.createElement("th");
const encabezado5 = document.createElement("th");

encabezado.innerHTML = "albumId";
encabezado2.innerHTML = "id";
encabezado3.innerHTML = "title";
encabezado4.innerHTML = "url";
encabezado5.innerHTML = "thumbnailUrl";

encabezado.setAttribute("class", "text-center");
encabezado2.setAttribute("class", "text-center");
encabezado3.setAttribute("class", "text-center");
encabezado4.setAttribute("class", "text-center");
encabezado5.setAttribute("class", "text-center");

encabezadoFila.append(
  encabezado,
  encabezado2,
  encabezado3,
  encabezado4,
  encabezado5
);

//CREO LA API
const api = "https://jsonplaceholder.typicode.com/photos";
fetch(api)
  .then(response => {
    return response.json();
  })
  .then(response => {
    for (let i = 0; i < response.length; i++) {
      cuerpo.insertRow(i + 1);
      //ALBUM
      const albumId = cuerpo.rows[i + 1].insertCell(0);
      albumId.setAttribute("class", "text-center");
      albumId.appendChild(document.createTextNode(response[i].albumId));
      //ID
      const id = cuerpo.rows[i + 1].insertCell(1);
      id.setAttribute("class", "text-center");
      id.appendChild(document.createTextNode(response[i].id));
      //TITULO
      const title = cuerpo.rows[i + 1].insertCell(2);
      title.setAttribute("class", "text-center");
      title.appendChild(document.createTextNode(response[i].title));
      //URL
      const url = cuerpo.rows[i + 1].insertCell(3);
      const img = document.createElement("img");
      img.src = response[i].url;
      img.width = "200";
      url.appendChild(img);
      //THUMBNAIL URL
      const thumbnailUrl = cuerpo.rows[i + 1].insertCell(4);
      const img2 = document.createElement("img"); // CREO EL ELEMENTO IMG
      img2.src = response[i].thumbnailUrl; // CONFIGURO LA PROPIEDAD SRC DE LA IMAGEN
      thumbnailUrl.appendChild(img2); // AGREGO LA IMAGEN A LA CELDA
    }

    tabla.appendChild(cuerpo);
    tabla.setAttribute("class", "table table-dark table-hover mt-3");
  });

//CREO LA JERARQUIA DE LA TABLA
row.appendChild(div);
div.appendChild(tabla);
