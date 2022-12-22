const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsElems = document.querySelector("#ingredients")

ingredientsElems.append(...ingredients.map(elem => {
  let elemLi = document.createElement('li');
  elemLi.textContent = elem;
  elemLi.classList.add("item");
  return elemLi
}))
