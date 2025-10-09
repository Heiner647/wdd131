const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('nav');

function toggleMenu() {
    navLinks.classList.toggle('hidden');
}
menuBtn.addEventListener('click', toggleMenu);
