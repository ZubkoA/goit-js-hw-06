const nameOutputEl = document.getElementById("name-output");
const nameInputEl = document.getElementById("name-input");

nameInputEl.addEventListener("input", (event) => {
  nameOutputEl.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
});
