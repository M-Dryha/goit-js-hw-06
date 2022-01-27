const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);




const categoryItem = document.querySelectorAll('.item');

const findTextContent = categoryItem.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
     console.log(`Elements: ${item.lastElementChild.children.length} `)
});
