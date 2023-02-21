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
        response[i].id +
        " " +
        response[i].first_name +
        " " +
        response[i].last_name +
        " " +
        response[i].email +
        " " +
        response[i].country;

      div.appendChild(parrafo);
    }
  });

//CREO LA JERARQUIA
row.append(div);
