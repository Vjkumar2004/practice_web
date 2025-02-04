
function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}

function register_togglePopup() {
    const r_overlay = document.getElementById('r-popupOverlay');
    r_overlay.classList.toggle('show');
}
const menuToggle = document.getElementById('menuToggle');
        const menu = document.getElementById('menu');

        menuToggle.addEventListener('click', function () {
            menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});