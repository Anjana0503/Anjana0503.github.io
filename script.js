
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const popup = document.getElementById('popup');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        popup.style.display = 'flex';
        form.reset();
    });

    window.closePopup = function () {
        popup.style.display = 'none';
    };
});
