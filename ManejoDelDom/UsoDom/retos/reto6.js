//Primera estructura
const boton = document.createElement("button");
boton.setAttribute("class", "btn btn-success mt-3");
boton.innerHTML = "Visita la lista de links";
document.body.appendChild(boton);

boton.addEventListener("click", () => {
  const contenedorPadre = document.createElement("div");
  contenedorPadre.setAttribute("class", "container-fluid mt-3");
  const ul = document.createElement("ul");
  ul.innerHTML = "<h1> Lista de links </h1>";

  for (let i = 0; i <= 5; i++) {
    const l1 = document.createElement("li");
    const l2 = document.createElement("li");
    const l3 = document.createElement("li");
    const l4 = document.createElement("li");
    const l5 = document.createElement("li");

    l1.innerHTML =
      "<a href='https://www.youtube.com/watch?v=JDs45GmZWUo'>Intro de boostrap</a>";
    l2.innerHTML =
      "<a href='https://www.youtube.com/watch?v=jfKfPfyJRdk'>Lofi</a>";
    l3.innerHTML =
      "<a href='https://www.youtube.com/watch?v=Y3wpvtR-m-Y'>Ponk</a>";
    l4.innerHTML =
      "<a href='https://www.youtube.com/watch?v=TjMPGd20Ryk'>Rock</a>";
    l5.innerHTML =
      "<a href='https://www.youtube.com/watch?v=Z6L4u2i97Rw'>Netfex</a>";

    ul.append(l1, l2, l3, l4, l5);
    break;
  }

  //Llamo los appenchild
  document.body.appendChild(contenedorPadre);
  contenedorPadre.appendChild(ul);
  boton.hidden = true;
});
