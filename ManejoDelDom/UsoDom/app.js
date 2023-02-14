const capa = document.querySelector("#micapa");
const imagen = document.querySelector("#imagen");

/* 
// console.log(capa);
// console.log(imagen); */

//Obtiene en un arreglo los nombres de los atributos del element
console.log(capa.getAttributeNames());
console.log(imagen.getAttributeNames());

//Otros usos
console.log(imagen.src);
console.log(imagen.srcset);

//manipulando los atributos del elemento con el dom
const parrofo = document.querySelector("p");
//Le agregamos al parrafo un atributo id y le pasamos el valor parrafo especial
parrofo.setAttribute("id", "parrafoEspecial");
parrofo.setAttribute("class", "claseParrafo");
console.log(parrofo.getAttributeNames());

//Estudio de otros atributos

//Muestra el alto de la imagen
console.log(imagen.clientHeight);
//MUestra el alto del borde de la imagen
console.log(imagen.clientTop);
//Muestra el ato de izquierda de la imagen
console.log(imagen.clientLeft);

console.log(imagen.clientWidth);

