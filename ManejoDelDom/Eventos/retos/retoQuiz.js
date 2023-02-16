//Invoco la capa
const preguntas = document.querySelector("#preguntas");
const respuesta = document.querySelector("#respuesta");
//Creo el boton
const boton = document.createElement("button");
boton.innerHTML = "GENERAR";
boton.setAttribute("class", "btn btn-success");

//Creo el parrafo
boton.addEventListener("click", () => {
  respuesta.innerHTML = "";

  let arreglo = [
    "¿Cuantos lados tiene un triangulo?",
    "¿Cual es el teorema de pitagoras?",
    "¿Cual es la distancia de la tierra al sol?",
    "¿Como murio el caballo blanco de Bolivar?",
  ];
  arreglo.forEach(element => {
    const parrafo = document.createElement("p");
    parrafo.setAttribute("class", "alert alert-warning");
    parrafo.innerHTML = element;
    parrafo.innerHTML = arreglo[Math.floor(Math.random() * arreglo.length)];
    respuesta.appendChild(parrafo);
  });
});

preguntas.appendChild(boton);
