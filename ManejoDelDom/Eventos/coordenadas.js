//Coordendas del cliente
const parrafo = document.querySelector("#parrafo");

parrafo.addEventListener("mouseover", (event) => {
  console.log("eje X:" + event.clientX + " eje Y:" + event.clientY);
  console.log("eje pagina X:" + event.pageX + " eje pagina Y:" + event.pageY);
  console.log("eje pantalla X:" + event.screenX + " eje pantalla Y:" + event.screenY);

});
