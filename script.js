function register_togglePopup() {
    const r_overlay = document.getElementById('r-popupOverlay');
    if (r_overlay) {
        r_overlay.classList.toggle('show');
    } else {
        console.error("Popup element not found!");
    }
}

const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('.menu-container');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
} else {
    console.error("Menu toggle element not found!");
}
