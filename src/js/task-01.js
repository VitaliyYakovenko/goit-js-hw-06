

const listEl = document.querySelector('#categories')
console.log(`Number of categories: ${listEl.children.length}`)



    
function makeConsoleLoge (elements) {
    const titel = elements.children[0];
    const amount = elements.querySelectorAll("li");
    console.log(`Category: ${titel.textContent}`)
    console.log(`Elements: ${amount.length}`)
}

makeConsoleLoge(listEl.children[0])
makeConsoleLoge(listEl.children[1])
makeConsoleLoge(listEl.children[2])







