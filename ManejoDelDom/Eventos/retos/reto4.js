const card = document.querySelector("#imagen");

card.addEventListener("mousemove", () => {
  card.style = "transform: scale(1.2)";
  card.addEventListener("mouseout", () => {
    card.removeAttribute("style");
  });
});
