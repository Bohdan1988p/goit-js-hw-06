const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onChangeInput);



function onChangeInput({target}) {
  outputRef.textContent = target.value ? target.value : "Anonymous";
};