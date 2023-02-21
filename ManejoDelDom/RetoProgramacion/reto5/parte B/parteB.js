//CREO EL DOM
const row = document.querySelector("#row");
const acoordion = document.createElement("div");
acoordion.setAttribute("class", "accordion");
//CREO EL API
const api = "peliculas.json";
fetch(api)
  .then(response => {
    return response.json();
  })
  .then(response => {
    for (let i = 0; i < response.length; i++) {
      //CREO EL ITEM
      const items = document.createElement("div");
      items.setAttribute("class", "accordion-item ");
      //CREO LA EL TITULO
      const title = document.createElement("h2");
      title.setAttribute("class", "accordion-heade");
      //CREO EL BOTON
      const boton = document.createElement("button");
      boton.setAttribute(
        "class",
        "accordion-button text-light fw-bold bg-dark"
      );
      boton.innerHTML = response[i].Movie_genres;

      //CREO EL PANEL
      const panel = document.createElement("div");
      panel.setAttribute(
        "class",
        "accordion-collapse collapse show bg-secondary"
      );
      //CREO EL BODY
      const acordionBody = document.createElement("div");
      acordionBody.setAttribute(
        "class",
        "accordion-body text-light bg-secondary"
      );
      //CREO EL titulo y la descripcion de la cuidad
      const titulo = document.createElement("h5");
      const parrafo = document.createElement("p");
      titulo.innerHTML = response[i].Movie_Titles;
      parrafo.innerHTML = response[i].city;

      boton.addEventListener("click", () => {
        if (panel.innerHTML) {
          panel.removeChild(acordionBody);
        } else {
          items.appendChild(panel);
          panel.appendChild(acordionBody);
          acordionBody.append(titulo, parrafo);
        }
      });
      //CREO LA JERARQUIA DEL ITEMS
      acoordion.appendChild(items);
      items.append(title, boton);
    }
  });
//CREO LA JERARQUIA
row.appendChild(acoordion);
