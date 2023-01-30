const inputRef = document.querySelector("#validation-input");

function checkInput(event) {
  const element = event.currentTarget;

  if (!element.value) {
    element.classList.remove("valid", "invalid");

  } else if (Number.parseInt(element.dataset.length) === element.value.length) {
    element.classList.remove("invalid");
    element.classList.add("valid");
    
  } else {
    element.classList.remove("valid");
    element.classList.add("invalid");
  };
};

inputRef.addEventListener("blur", checkInput);

// const input = document.querySelector("#validation-input");
// input.addEventListener("blur", (event) => {
//        if (event.currentTarget.value.length == input.dataset.length) {
//               input.classList.add("valid");
//               input.classList.remove("invalid");
//        } else {
//               input.classList.add("invalid");
//               input.classList.remove("valid");
//        }
// }); 