


const ref = {
    btnDecrementEL: document.querySelector(`button[data-action="decrement"]`),
    btnIncrementEl: document.querySelector(`button[data-action="increment"]`),
    counterEl: document.querySelector("#value"),
    
}
let counterValue = 0;

ref.btnIncrementEl.addEventListener("click", () => {
    counterValue += 1;
    ref.counterEl.textContent = counterValue
    console.log(counterValue);
})

ref.btnDecrementEL.addEventListener("click", () => {
    counterValue -= 1;
    ref.counterEl.textContent = counterValue
    console.log(counterValue);
})

