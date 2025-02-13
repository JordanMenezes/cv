export function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
}

export function animateSkills() {
    // Example: Animate skill bars on theme change or page load
    document.addEventListener('themeChanged', () => {
        document.querySelectorAll('.skill-progress').forEach(progressBar => {
            const targetWidth = progressBar.dataset.level;
            progressBar.style.width = targetWidth;
        });
    });

    // Initial animation on load
    document.querySelectorAll('.skill-progress').forEach(progressBar => {
        const targetWidth = progressBar.dataset.level;
        progressBar.style.width = targetWidth;
    });
}
