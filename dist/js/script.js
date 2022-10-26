//Membuat navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}
//Membuat reponsive option navbar
const option = document.querySelector('#option');
const navMenu = document.querySelector('#nav-menu');

option.addEventListener('click', function() {
    option.classList.toggle('option-active');
    navMenu.classList.toggle('hidden');
});