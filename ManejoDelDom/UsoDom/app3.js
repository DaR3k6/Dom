const texto = document.createTextNode("la casa de campo era amarilla");
//Algunos metodos del nodo texto
/* //split text
let porcionTexto = texto.splitText(8); */
//console.log(porcionTexto)

//Agrega datos
texto.appendData(", rodeada de un rio azul");
//Inserto el texto de la poscion
texto.insertData(2, " fea y destartalada");
console.log(texto);

//Remplazo inicio y fin del arreglo
texto.replaceData(0, 2, "habia");
console.log(texto);
//Trae la candena hasta que comienza
console.log(texto.substringData(21, 45));
//Incovo el body
document.body.appendChild(texto);
