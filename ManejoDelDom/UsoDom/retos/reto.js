const lacapa = document.createElement("div");
lacapa.innerHTML = "<h1>Lista</h1>";
let menor = 5;
//Creo el ul
const ul = document.createElement("ul");

for (let index = 0; index <= menor; index++) {
  //Creo la lista
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const li5 = document.createElement("li");
  //Agrego  el texto en html puro
  li1.innerHTML = "banana";
  li2.innerHTML = "mango";
  li3.innerHTML = "mora";
  li4.innerHTML = "naranja";
  li5.innerHTML = "lulo";
  //llamo ul y la lista
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  break;
}

//llamo la capa
lacapa.appendChild(ul);

//llamo el body
document.body.appendChild(lacapa);
