


const inputEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onChangeFontSize)

function onChangeFontSize(event) {
    const valueInp = event.currentTarget.value;
    
    textEl.style.fontSize = `${valueInp}px`;
}