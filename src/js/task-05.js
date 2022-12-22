


const ref = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
}


ref.input.addEventListener("input", onInputValue);



 function onInputValue(event) {
     const valueInp = event.currentTarget.value;
     
     if (valueInp === "") {
       return  ref.output.textContent = "Anonymous";
     }
    
     ref.output.textContent = valueInp;
 }
