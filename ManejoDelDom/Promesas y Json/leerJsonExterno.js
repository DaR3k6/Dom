//Creo la api
const api = "https://api.escuelajs.co/api/v1/products";

//Leer json de la forma moderna
//Promesas fetch() parametro es el recuros a leer
//https://jsonplaceholder.typicode.com/comments

fetch(api)
  //Promesa donde se parsea el resultadodel fetch
  .then(respuesta => {
    return respuesta.json();
  })
  //Accion a desarrollar con el archivo leido y parseado
  .then(respuesta => {
    const contenedor = document.createElement("div");
    contenedor.setAttribute("class", "row align-items-start");
    for (let i = 0; i < respuesta.length; i++) {
      //Creo el dom
      //Creo el card
      const card = document.createElement("div");
      card.setAttribute("class", "card mt-3 col-3 mb-3 style= width: 10rem;");
      //
      const img = document.createElement("img");
      img.src = respuesta[i].images;
      img.setAttribute("class", "card-img-top img-fluid");

      const cardbody = document.createElement("div");
      cardbody.setAttribute("class", "card-body");

      const titulo = document.createElement("h5");
      titulo.setAttribute("class", "card-title");
      titulo.innerHTML = respuesta[i].title;

      const texto = document.createElement("p");
      texto.innerHTML = respuesta[i].description;

      const boton = document.createElement("a");
      boton.innerHTML = `COMPRAR:$${respuesta[i].price}`;
      boton.setAttribute("class", "# btn btn-success");

      contenedor.appendChild(card);
      card.appendChild(cardbody);
      cardbody.appendChild(img);
      cardbody.appendChild(titulo);
      cardbody.appendChild(texto);
      cardbody.appendChild(boton);
    }
    document.body.appendChild(contenedor);
  });
