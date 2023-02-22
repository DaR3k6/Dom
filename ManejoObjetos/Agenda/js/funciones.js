//Funciones CRUD de la aplicacion == CREATE UPDATE DELETE
//Guardar la info del contacto

const guardarContacto = (bdatos, contacto) => {
  //Usamos setItem para guardar en el objeto window
  bdatos.setItem(contacto.id, JSON.stringify(contacto));
};

//Funcion de listar contactos
const listarContactos = bdatos => {
  //Leer las llaves del objeto  localstrorage
  let llaves = Object.keys(bdatos);
  //Ciclo para recorrer el objeto localstrorage
  for (let clave of llaves) {
    //En clave guarda el valor de la key en cada interaacion o bucle
    let contacto = JSON.parse(bdatos.getItem(clave));

    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");

    const btnBorrar = document.createElement("button");
    btnBorrar.setAttribute("class", "btn btn-danger");
    btnBorrar.innerHTML = '<i class="bi bi-trash3-fill"></i>';

    tabla.appendChild(tr);
    tr.append(td, td2, td3, td4);
    td.innerHTML = contacto.id;
    td2.innerHTML = contacto.nombre;
    td3.innerHTML = contacto.apellido;
    td4.appendChild(btnBorrar);
  }
};
