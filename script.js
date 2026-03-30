// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Select all elements that should reveal on scroll
    const reveals = document.querySelectorAll(".reveal");

    // IntersectionObserver options
    const observerOptions = {
        root: null, // use viewport
        rootMargin: "0px",
        threshold: 0.15 // trigger when 15% of the element is visible
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the active class to trigger the CSS animation
                entry.target.classList.add("active");
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Attach observer to each reveal section
    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});
