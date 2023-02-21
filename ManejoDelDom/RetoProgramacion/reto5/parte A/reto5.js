//CREO EL DOM
const row = document.querySelector("#row");
const div = document.createElement("div");
div.setAttribute("class", "text-center mt-3");

//CREO LA API
const api = "registros.json";
fetch(api)
  .then(response => {
    return response.json();
  })
  .then(response => {
    for (let i = 0; i < response.length; i++) {
      const parrafo = document.createElement("p");
      parrafo.setAttribute("class", "alert alert-dark");
      parrafo.innerHTML =
        "IDENTIFICIACION:" +
        response[i].id +
        " " +
        "NOMBRE:" +
        response[i].first_name +
        " " +
        "APELLIDO:" +
        response[i].last_name +
        " " +
        "CORREO:" +
        response[i].email +
        " " +
        "CUIDAD:" +
        response[i].country;

      div.appendChild(parrafo);
    }
  });

//CREO LA JERARQUIA
row.append(div);
