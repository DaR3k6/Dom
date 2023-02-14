//Pagina 9 del documento soporte

//Creando una capa
const lacapa = document.createElement("div");
//innertext es texto, innerhtml es html puro
//lacapa.innerText = "akdkadosadjhaosjadopajd";
lacapa.innerHTML = "<h1>titulo</h1>";
const parrafo = document.createElement("p");
parrafo.innerText = "Este es el texto del parro....";

const imagen = document.createElement("img");
imagen.src = "logo.jpg";
//Agregamos la imagen a su nodo contenedor o nodo sueperior = lacapa
lacapa.appendChild(parrafo);
lacapa.appendChild(imagen);

//Lo agregamos todo al nodo superior - (body)
document.body.appendChild(lacapa);


c

