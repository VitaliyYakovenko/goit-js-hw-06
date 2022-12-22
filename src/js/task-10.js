function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const ref = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector(`button[data-create]`),
  btnDelete: document.querySelector(`button[data-destroy]`),
  box: document.querySelector("#boxes"),
}



ref.btnCreate.addEventListener("click",() => {
  const addBox = createElemBox(ref.input.value);
  ref.box.append(...addBox);
})

ref.btnDelete.addEventListener("click", () => {
  ref.box.innerHTML = "";
  ref.input.value = "";
})


function createElemBox(value) {
  const arrBox = []; 
   for (let i = 1; i <= value; i += 1){
   let boxElem = document.createElement("div");
      boxElem.style.width = `${30 + 10 * i}px`;
      boxElem.style.height = `${30 + 10 * i}px`;
      boxElem.style.backgroundColor = getRandomHexColor();
     arrBox.push(boxElem);  
   }
  return arrBox
}




