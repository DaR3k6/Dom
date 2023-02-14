const input = document.querySelector("#input");
//El parametro e almacena lo devuelto por evento keyup
input.addEventListener("keyup", (e) => {
  /*   console.log(e); //Todo el arreglo de caracteristicas del evento
  console.log(e.code); //Tabla de caracateres UNICODE -ASCII
  console.log(e.key); //La tecla presionada */
  //console.log(e.keyCode); //Obsoleto: Pero muestra el codigo UNICODE -ASCII
  if (e.keyCode === 87) {
    alert("Ganaste");
  } else {
    console.log("Incorrecto,Siga jugando");
  }
  
});

