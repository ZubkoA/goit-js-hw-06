const validationInputEl = document.getElementById("validation-input");

validationInputEl.onblur = (event) => {
  validationInputEl.classList.add(
    event.currentTarget.value.length ===
      Number(validationInputEl.dataset.length)
      ? "valid"
      : "invalid"
  );
};
