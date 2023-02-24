const countEl = document.getElementById("counter");
const value = document.getElementById("value");

let counterValue = 0;
countEl.firstElementChild.addEventListener("click", () => {
  counterValue--;
  value.textContent = counterValue;
});
countEl.lastElementChild.addEventListener("click", () => {
  counterValue++;
  value.textContent = counterValue;
});
