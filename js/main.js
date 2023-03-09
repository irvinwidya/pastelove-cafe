let allCard = document.querySelectorAll('[data-menu]');
let foodCard = document.querySelectorAll('[data-menu="food"]');
let drinkCard = document.querySelectorAll('[data-menu="drink"]');

let allCatBtn = document.getElementById('CategoryAll');
let foodCatBtn = document.getElementById('CategoryFood');
let drinkCatBtn = document.getElementById('CategoryDrink');

console.log(allCard);

function hideAll() {
    for (var i = 0; i < allCard.length; i++) {
        allCard[i].classList.add('hide');
    }
}

function showAll() {
    allCatBtn.classList.add('category-btn-active');
    foodCatBtn.classList.remove('category-btn-active');
    drinkCatBtn.classList.remove('category-btn-active');

    for (var i = 0; i < allCard.length; i++) {
        allCard[i].classList.remove('hide');
    }
}

function showFood() {
    foodCatBtn.classList.add('category-btn-active');
    allCatBtn.classList.remove('category-btn-active');
    drinkCatBtn.classList.remove('category-btn-active');
    hideAll();
    for (var i = 0; i < foodCard.length; i++) {
        foodCard[i].classList.remove('hide');
    }
}

function showDrink() {
    drinkCatBtn.classList.add('category-btn-active');
    allCatBtn.classList.remove('category-btn-active');
    foodCatBtn.classList.remove('category-btn-active');
    hideAll();
    for (var i = 0; i < drinkCard.length; i++) {
        drinkCard[i].classList.remove('hide');
    }
}