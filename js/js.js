let burgerBtn = document.querySelector('#header__burger-menu');
let burgerList = document.querySelector('#header__nav-menu');

burgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    burgerList.classList.toggle('active');
})