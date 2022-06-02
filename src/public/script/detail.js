const btnDetailLike = document.querySelector(".detail-product-left__icon-like");
const incrementBtn = document.querySelector('.detail-product-right__right-btn');
const decrementBtn = document.querySelector('.detail-product-right__left-btn');


incrementBtn.addEventListener('click', function() {
    let increment = Number(this.previousElementSibling.textContent);
    console.log(this.previousElementSibling.textContent);
    increment++;
    this.previousElementSibling.textContent = increment;
});

decrementBtn.addEventListener('click', function() {
    let decrement = Number(this.nextElementSibling.textContent);
    decrement <= 1 ? 1 : decrement--;
    this.nextElementSibling.textContent = decrement;
});

btnDetailLike.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle("btnDetailLike");
})