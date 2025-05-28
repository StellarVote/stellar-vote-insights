
// Simple JavaScript for any interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Tally forms if the library is loaded
    if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds();
    }
    
    // Add smooth scrolling for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.fade-in, .fade-in-delayed, .fade-in-late').forEach(el => {
        observer.observe(el);
    });
});

// Handle form submission feedback (if needed)
window.addEventListener('message', function(event) {
    if (event.data.type === 'tally-form-submit') {
        console.log('Form submitted successfully');
        // You can add custom success handling here
    }
});
