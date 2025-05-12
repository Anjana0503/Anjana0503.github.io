// Updated script.js for Formspree + popup feedback

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const popup = document.getElementById('popup');
    const popupContent = popup.querySelector('p');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
        })
        .then(response => {
            if (response.ok) {
                popupContent.textContent = "Your message has been sent!";
                form.reset();
            } else {
                popupContent.textContent = "There was a problem sending your message.";
            }
            popup.style.display = 'flex';
        })
        .catch(() => {
            popupContent.textContent = "An error occurred. Please try again.";
            popup.style.display = 'flex';
        });
    });

    window.closePopup = function () {
        popup.style.display = 'none';
    };
});