const validationInputEl = document.getElementById("validation-input");

validationInputEl.onblur = (event) => {
  if (
    event.currentTarget.value.length ===
    Number(validationInputEl.dataset.length)
  ) {
    validationInputEl.classList.add("valid");
    validationInputEl.classList.remove("invalid");
  } else {
    validationInputEl.classList.add("invalid");
    validationInputEl.classList.remove("valid");
  }
};
