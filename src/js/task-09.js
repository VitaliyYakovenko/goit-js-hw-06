function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const btnEl = document.querySelector(".change-color");

const textEl = document.querySelector(".color");

btnEl.addEventListener("click",onChangeColor);


function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = `${getRandomHexColor()}`
}