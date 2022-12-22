



const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onValidBorder);


function onValidBorder(event) {
    const valueInp = event.currentTarget.value.length;

    if (valueInp !== 6) {
        inputEl.classList.add("invalid");
    }
    if (valueInp === 6) {
        inputEl.classList.replace("invalid", "valid")
    }
     
}