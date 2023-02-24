const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = {
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  };
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Всі поля мають бути заповненими!");
    return;
  }
  console.log(formData);
  form.reset();
};
form.addEventListener("submit", handleSubmit);
