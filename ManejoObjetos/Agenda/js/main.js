//Esta es la app principañ que enlaza la logica del programa

//Punteros-Objetos del Dom
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const btnEnviar = document.querySelector("#btnEnviar");
const tabla = document.querySelector("#tabla");

//localstorage: almacenamiento local en el objeto window
const bdatos = window.localStorage;

//Evento captura de datos e insercion
btnEnviar.addEventListener("click", () => {
  //Creamos el elemento object y le pasamos al atributo valor el value de los inputs
  let contacto = {
    id: Math.random(1, 10),
    nombre: nombre.value,
    apellido: apellido.value,
  };
  // console.log(contacto);
  guardarContacto(bdatos, contacto);
});
//Listar contactos
listarContactos(bdatos);
