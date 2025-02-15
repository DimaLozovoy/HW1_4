const container = document.querySelector("#container");
const list = document.querySelector("#list");
const button = document.querySelector("#colorButton");

container.addEventListener("click", (event) => {
  console.log("event.target:", event.target);
  console.log("event.currentTarget:", event.currentTarget);
});
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Клик по элементу списка:", event.target.textContent);
  }
});
button.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "lightblue";
  console.log("Кнопка изменена:", event.target);
});
