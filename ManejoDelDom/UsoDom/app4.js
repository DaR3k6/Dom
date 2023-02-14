//Estilos automaticos

const lacapa = document.querySelector("#miacapa");
lacapa.innerText = "este es un texto";

//css dinamico
//lacapa.style = "background-color: blue; peru: red; border-style:solid";

lacapa.setAttribute(
  "style",
  "bacground-color: white;color: black;border: 2px solid blue;"
);
