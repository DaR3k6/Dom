//Dom
const img = document.querySelector("#logo");

//Evento click
img.addEventListener("click", () => {
  console.log("Click en el log!!!");
});
//Mouse
img.addEventListener("mousemove", () => {
  console.log("Estas moviendo el raton!!!");
});

img.addEventListener("mouseout", () => {
  console.log("Sale de la imagen!!!");
});
img.addEventListener("mouseover", () => {
    console.log("Estas sobre la imagen!!!")
    });