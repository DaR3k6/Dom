const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

btn1.addEventListener("mousemove", () => {
  btn1.style =
    "background-color: green;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;width:10%;";
  btn1.addEventListener("mouseout", () => {
    btn1.removeAttribute("style");
  });
});

btn2.addEventListener("mousemove", () => {
  btn2.style =
    "background-color: red;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;width:10%;";
  btn2.addEventListener("mouseout", () => {
    btn2.removeAttribute("style");
  });
});

btn3.addEventListener("mousemove", () => {
  btn3.style =
    "background-color: yellow;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;width:10%;";
  btn3.addEventListener("mouseout", () => {
    btn3.removeAttribute("style");
  });
});

btn4.addEventListener("mousemove", () => {
  btn4.style =
    "background-color:orange;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;width:10%;";
  btn4.addEventListener("mouseout", () => {
    btn4.removeAttribute("style");
  });
});

btn5.addEventListener("mousemove", () => {
  btn5.style =
    "background-color:black;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;width:10%;";
  btn5.addEventListener("mouseout", () => {
    btn5.removeAttribute("style");
  });
});
