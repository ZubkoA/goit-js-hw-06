const itemsEl = document.querySelectorAll(".item");

//1. Elements (item) count
const count = itemsEl.length;
console.log(`Number of categories: ${count}`);

//2. Title text for elements and number of element

itemsEl.forEach((item) => {
  const [h2, ul] = item.children;
  console.log(`Category: ${h2.textContent}`);
  console.log(`Elements: ${ul.children.length}`);
});

/* Another solution */
// const [x, y, z] = itemsEl;

// console.log(`Category: ${x.firstElementChild.textContent}`);
// console.log(`Elements: ${x.lastElementChild.children.length}`);
// console.log(`Category: ${y.firstElementChild.textContent}`);
// console.log(`Elements: ${y.lastElementChild.children.length}`);
// console.log(`Category: ${z.firstElementChild.textContent}`);
// console.log(`Elements: ${z.lastElementChild.children.length}`);
