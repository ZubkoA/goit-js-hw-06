const changeColorEl = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");
const bodyEl = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
changeColorEl.addEventListener("click", function (e) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  nameColor.innerHTML = bodyEl.style.backgroundColor;
});
