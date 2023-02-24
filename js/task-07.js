const sizeControlEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

const handleInput = () => {
  textEl.style.fontSize = `${sizeControlEl.value}px`;
};

sizeControlEl.addEventListener("input", handleInput);
