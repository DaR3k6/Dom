//Leer json de la forma moderna

//Promesas fetch() parametro es el recuros a leer
fetch("adso.json")
  //Promesa donde se parsea el resultadodel fetch
  .then((respuesta) => {
    return respuesta.json();
  })
  //Accion a desarrollar con el archivo leido y parseado
  .then((respuesta) => {
    for (let i = 0; i < respuesta.length; i++) {
      document.write(
        respuesta[i].nombre +
          "   " +
          respuesta[i].apellido +
          "   " +
          respuesta[i].edad +
          "   " +
          respuesta[i].activo +
          "   " +
          "<br>"
      );
      
    }
    console.log(respuesta);
  });
