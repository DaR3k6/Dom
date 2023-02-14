const pintar = document.querySelector("#btnPintar");
let arreglo = [
  "red",
  "green",
  "blue",
  "purple",
  "brown",
  "orange",
  "yellow",
  "white",
  "black",
];

pintar.addEventListener("click", () => {
  const body = document.querySelector("body");
  arreglo.forEach(items => {
    body.style.backgroundColor = items;
    body.style.backgroundColor =
      arreglo[Math.floor(Math.random() * arreglo.length)];
  });
  pintar.appendChild(body);
});
