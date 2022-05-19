var slides = document.querySelectorAll(".main-banner-slide");
var btns = document.querySelectorAll(".main-banner-btn");
var categoryLeft = document.querySelectorAll(".category__left-item");
var btnLike = document.querySelector(".home-product-item__icon-like");
var collapseCategoryLeft = document.getElementsByClassName("collapsible"); 
let currentSlide = currentCate = 1;


var manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    btns.forEach((btn) => {
        btn.classList.remove("active");
    })
    slides[manual].classList.add("active");
    btns[manual].classList.add("active");
}

btns.forEach((btn,i) => {
    btn.addEventListener("click",() => {
        manualNav(i);
        currentSlide = i;
    });
});
var repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function() {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            })
            slides[i].classList.add('active');        
            btns[i].classList.add('active');
            i++;
            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }       
            repeater();
        }, 5000)
    }
    repeater();
}
repeat();


var manualCategory = function(manual) {
    categoryLeft.forEach((category) => {
        category.classList.remove("category__left-item--active");
    });
    categoryLeft[manual].classList.add("category__left-item--active");
}

categoryLeft.forEach((category,i) => {
    category.addEventListener("click",(e) => {
        e.preventDefault();
        manualCategory(i);
        currentCate = i;
    });
});
btnLike.addEventListener("click", function(e) {
    e.preventDefault();
    this.classList.toggle("btnLike");
});

for( var i = 0; i < collapseCategoryLeft.length; i++){
    collapseCategoryLeft[i].addEventListener("click", function() {
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    })
}



