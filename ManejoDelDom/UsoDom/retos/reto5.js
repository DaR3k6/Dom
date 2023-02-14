const botones = document.createElement("button");
botones.setAttribute("class", "btn btn-dark mt-3");
botones.innerText = "todos los botones";
document.body.appendChild(botones);

botones.addEventListener("click", () => {
  //Creo el contenedor
  const contenedorPadre = document.createElement("div");
  contenedorPadre.setAttribute("class", "text-center");
  //Creo un  botones(Letras) y el contenedor hijo
  const contenedorHijo = document.createElement("div");
  contenedorHijo.setAttribute("class", "container-fluid");
  const botonCambiar = document.createElement("button");
  const cambioLetras = document.createElement("p"); //
  //Creo la clase de los botones y texto
  botonCambiar.setAttribute("class", "btn btn-primary");
  botonCambiar.innerText = "Cambio de letras";
  cambioLetras.setAttribute("class", "text-center");
  cambioLetras.innerText = "HOLA MUNDO";
  //creo el evento onclick
  botonCambiar.addEventListener("click", () => {
    let arreglo = [
      "serif",
      "sans-serif",
      "cursive",
      "system-ui",
      "Georgia, serif",
      "revert-layer",
    ];
    cambioLetras.style.fontFamily =
      arreglo[Math.floor(Math.random() * arreglo.length)];
  });
  //Creo el boton de cambiar boton color
  const contenedorHijo2 = document.createElement("div");
  contenedorHijo2.setAttribute("class", "container-fluid");
  const botonColor = document.createElement("button");
  botonColor.setAttribute("class", "btn btn-primary");
  botonColor.innerText = "Cambio de color";
  //Creo el evento onclick
  botonColor.addEventListener("click", () => {
    botonColor.style.backgroundColor =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    botonColor.style.color =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
  });
  //Cambio el fondo de pantalla del body
  const contenedorHijo3 = document.createElement("div");
  const bodyColor = document.createElement("button");
  contenedorHijo3.setAttribute("class", "container-fluid");
  bodyColor.setAttribute("class", "btn btn-primary");
  bodyColor.innerText = "Cambio de fondo de pantalla";
  //Creo el evento onclick
  bodyColor.addEventListener("click", () => {
    contenedorHijo3.style.backgroundColor =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
  });

  //Invoco los contenedores
  document.body.appendChild(contenedorPadre);
  contenedorPadre.appendChild(contenedorHijo);
  contenedorPadre.appendChild(contenedorHijo2);
  contenedorPadre.appendChild(contenedorHijo3);
  contenedorHijo.appendChild(botonCambiar);
  contenedorHijo.appendChild(cambioLetras);
  //boton color
  contenedorHijo2.appendChild(botonColor);
  //Boton color
  contenedorHijo3.appendChild(bodyColor);
});
