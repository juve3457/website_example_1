const toggleBtn = document.getElementById('magnify-plus');
const products = document.querySelector('.products');

let expanded = false;

toggleBtn.addEventListener('click', () => {
  expanded = !expanded;

  products.classList.toggle('expanded', expanded);

  if (expanded) {
    toggleBtn.src = '../png/minus-icon.png';
  } else {
    toggleBtn.src = '../png/plus-icon.png';
  }
});
