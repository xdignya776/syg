document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Font selection for hero text
    const fontSelect = document.getElementById('font-select');
    const heroText = document.getElementById('hero-text');

    if (fontSelect && heroText) {
        // Set initial font from select value
        heroText.style.fontFamily = fontSelect.value;

        fontSelect.addEventListener('change', (e) => {
            heroText.style.fontFamily = e.target.value;
        });
    }

    // Contact form handling (simple client-side)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you would send data to a backend or use a service like Formspree
            // For now, just show a success message
            formStatus.textContent = 'Το μήνυμα στάλθηκε με επιτυχία! (δεี่ย typologie backend)';
            formStatus.style.color = 'green';
            contactForm.reset();
            // Clear message after 3 seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 3000);
        });
    }
});