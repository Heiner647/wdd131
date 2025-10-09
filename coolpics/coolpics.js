
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName === 'IMG') {
        const NewS = e.target.src.replace( "sm", "full");
        modalImage.src = NewS;
        modal.showModal();
    }
    
// Code to show modal  - Use event parameter 'e'   
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});



const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('nav');

function toggleMenu() {
    navLinks.classList.toggle('hidden');
}
menuBtn.addEventListener('click', toggleMenu);

          