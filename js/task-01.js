const categoriesRef = document.querySelector('#categories');

console.log(`Number of categories: ${categoriesRef.children.length}`);

for(let child of categoriesRef.children) {
  console.log(`Category: ${child.children[0].textContent}`);
  console.log(`Elements: ${child.children[1].children.length}`);
}