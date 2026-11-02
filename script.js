// 1
let para = document.getElementById("para");
let button = document.getElementById("btn");
button.addEventListener("click", () => {
  para.classList.add("highlight");
});
// 2
let button1 = document.getElementById("btnn");
button1.addEventListener("click", () => {
  para.classList.remove("highlight");
});
// 3
let button2 = document.getElementById("btnnn");
button2.addEventListener("click", () => {
  para.classList.toggle("highlight");
});
// 4
let button3 = document.getElementById("check");
button3.addEventListener("click", () => {
  if (para.classList.contains("highlight")) {
    alert("highlight class contain");
  } else {
    alert("not contain highlight class");
  }
});
// 5
let button4 = document.getElementById("buy");
button4.addEventListener("click", () => {
  button4.classList.add("active-btn");
});
// 6
let button5 = document.getElementById("dark");

button5.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});
