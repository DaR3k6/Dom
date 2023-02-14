//const pintar = () => {
//  const body = document.querySelector("body");
//  body.style = "background-color:red;color:black;";
//};

const pintar = document.querySelector("#btnPintar");
let arreglo = ["aguacate", "mango", "limon", "gaseosa", "cantidad", "milo"];
pintar.addEventListener("click", () => {
  const letra = document.createElement("p");
  const tabla = document.createElement("table");
  const body = document.querySelector("body");
  letra.innerHTML = "<h1>Personas</h1>";

  // arreglo.forEach(items => {
  //   const table = document.createElement("tr");
  //   const texto = document.createTextNode(items);
  //   table.appendChild(texto);
  //   body.appendChild(table);
  // });

  for (let i = 0; i < 2; i++) {
    // creates a table row
    const table = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
      const texto = document.createTextNode(arreglo);

      table.appendChild(texto);
      break;
    }
    body.appendChild(table);
  }

  tabla.style = "border:1px solid black;";
  body.style = "background-color:yellow;color:black;";
  letra.appendChild(tabla);
});
