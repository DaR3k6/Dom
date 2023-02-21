//Creo el dom
const row = document.querySelector("#row");
const form = document.createElement("form");
form.setAttribute("class", "bg-secondary");
//Creo el formulario
//Nombre del formulario
const div = document.createElement("div");
div.setAttribute("class", "mb-3");
const labelNombre = document.createElement("label");
labelNombre.setAttribute("class", "col-form-label");
labelNombre.innerHTML = "Nombre";
const inputNombre = document.createElement("input");
inputNombre.setAttribute("class", "form-control");

//Apellido el formulario
const div2 = document.createElement("div");
div2.setAttribute("class", "mb-3");
const labelApellido = document.createElement("label");
labelApellido.setAttribute("class", "col-form-label");
labelApellido.innerHTML = "Apellido";
const inputApellido = document.createElement("input");
inputApellido.setAttribute("class", "form-control");

//Email
const div3 = document.createElement("div");
div3.setAttribute("class", "mb-3");
const labelEmail = document.createElement("label");
labelEmail.setAttribute("class", "col-form-label");
labelEmail.innerHTML = "Email";
const inputEmail = document.createElement("input");
inputEmail.setAttribute("class", "form-control");

//PAIS DE ORIGEN
const div4 = document.createElement("div");
div4.setAttribute("class", "mb-3");
const paisOrigen = document.createElement("select");
paisOrigen.setAttribute("class", "form-select");
//Creo el api
const api = "países.json";
//Creo el json
fetch(api)
  .then(response => {
    return response.json();
  })
  .then(response => {
    for (let i = 0; i < response.length; i++) {
      const option = document.createElement("option");

      option.innerHTML = response[i].nombre;
      paisOrigen.appendChild(option);
    }
    div4.appendChild(paisOrigen);
  });

//CONTINENTE DE ORIGEN
const div5 = document.createElement("div");
div5.setAttribute("class", "mb-3");
const continenteOrigen = document.createElement("select");
continenteOrigen.setAttribute("class", "form-select");
//Creo el api
const api2 = "continentes.json";
//Creo el json
fetch(api2)
  .then(response => {
    return response.json();
  })
  .then(response => {
    for (let i = 0; i < response.length; i++) {
      const option = document.createElement("option");
      option.innerHTML = response[i].nombre;
      continenteOrigen.appendChild(option);
    }
    div5.appendChild(continenteOrigen);
  });

//Invoco la jerarquia
row.appendChild(form);
form.append(div, div2, div3, div4, div5);
div.append(labelNombre, inputNombre);
div2.append(labelApellido, inputApellido);
div3.append(labelEmail, inputEmail);
