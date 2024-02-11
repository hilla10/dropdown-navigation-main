function myFunction(event) {
    event.preventDefault();
    var dropdownContent = event.target.nextElementSibling;
    dropdownContent.classList.toggle('show');
    var arrow = event.target.querySelector('img');
    arrow.classList.toggle('rotate');
}

window.addEventListener('click', function (event) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function (dropdownContent) {
        if (event.target.closest('.dropdown') === null && dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
            var arrow = dropdownContent.previousElementSibling.querySelector('img');
            arrow.classList.remove('rotate');
        }
    });
});


// mobile menu 

const navBar = document.querySelector('.header__navbar');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('#body')

hamburger.addEventListener('click', function () {
    navBar.classList.toggle('active');
    hamburger.classList.toggle('active');
    body.classList.toggle('active');
});

window.addEventListener('click', function (event) {
    if(!event.target.closest('.header__navbar') && !event.target.closest('.hamburger')) {
        navBar.classList.remove('active');
        hamburger.classList.remove('active');
        body.classList.remove('active');
    }
});