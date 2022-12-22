const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listElem = document.querySelector(".gallery")
listElem.classList.add("list")

const elemMarkup = images.map(img => {
  return `<li class="item"> 
  <img src="${img.url}" alt="${img.alt}  width="600">
  </li>`
})
  .join(" ");



listElem.insertAdjacentHTML("afterbegin", elemMarkup)
console.log(listElem);






