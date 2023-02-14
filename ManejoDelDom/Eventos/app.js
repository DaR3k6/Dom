//Dom para el boton enviar
const btnEnviar = document.querySelector("#btnEnviar");

//Esscuchador de enventos
btnEnviar.addEventListener("click", () => {
  console.log("usaste el evento click ! en el boton");
});
//Evento ui de carga
//Se carga el llamada inicial del sitio
window.addEventListener("load", () => {
  //console.log("he cargado la pagina completa");
  alert("BInevenido a mi pagina");
});
//Al cambiar el tamaño de la window
window.addEventListener("resize", () => {
  console.log("Has redimendionado el tamaño de la pagina");
});
//Scroll al enrollar el contenido de window
window.addEventListener("scroll", () => {
  console.log("Estas haciendo scrolll en el contendio? ");
});
