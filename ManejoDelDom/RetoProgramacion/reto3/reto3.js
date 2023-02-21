//CREO EL DOM
const row = document.querySelector("#row");
const div = document.createElement("div");
const boton = document.createElement("button");
div.setAttribute(
  "class",
  "mt-3 d-flex align-items-center justify-content-center"
);
boton.innerHTML = "LISTAR CERVEZAS";
boton.setAttribute("class", "btn btn-primary control-btn");
//CREO EL EVENTO CLICK
boton.addEventListener("click", () => {
  //CREO LA API
  const API = "https://api.punkapi.com/v2/beers";
  fetch(API)
    .then(response => {
      return response.json();
    })
    .then(response => {
      for (let i = 0; i < response.length; i++) {
        //CREO LA CARD
        const card = document.createElement("div");
        card.setAttribute("class", "card mt-3 col-3 col-md-6 mb-3");
        card.setAttribute("style", "width: 18rem; height: 59rem;");

        //CREO LA IMAGEN
        const image = document.createElement("img");
        image.src = response[i].image_url;
        image.setAttribute("class", "card-img-top w-50 h-40");
        //CREO EL CARDBODY
        const cardbody = document.createElement("div");
        cardbody.setAttribute("class", "card-body");

        //CREO EL TITULO
        const titulo = document.createElement("h5");
        titulo.setAttribute("class", "card-title");
        titulo.innerHTML = response[i].name;
        //CREO EL TEXTO
        const texto = document.createElement("p");
        texto.setAttribute("class", "card-text text-overflow");
        texto.innerHTML = response[i].description;

        //Creo la jerarquia
        row.appendChild(card);
        card.append(image, cardbody);
        cardbody.append(titulo, texto);
      }
    });
});
row.appendChild(div);
div.appendChild(boton);
