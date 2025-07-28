// animation.js - Scroll-triggered reveal animations for core sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = [
        document.querySelector('#heroSection'),
        document.querySelector('.smry'),
    ].filter(Boolean);

    // Target children of hero and summary for stagger
    const heroChildren = document.querySelectorAll('#heroSection > .content > *');
    const summaryItems = document.querySelectorAll('.smry > .smry-div');

    // Optional: cards to animate (if present)
    const cards = document.querySelectorAll('.achievement-card, .school-card, .project-card');

    const intersectionOptions = { threshold: 0.1 };

    const onIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                // Add reveal class on container to trigger child animations
                if (
                    el.id === 'heroSection' ||
                    el.classList.contains('smry')
                ) {
                    el.classList.add('reveal');
                } else {
                    // For individual children/cards apply class directly
                    el.classList.add('reveal');
                }
                observer.unobserve(el); // Animate once only
            }
        });
    };

    const observer = new IntersectionObserver(onIntersect, intersectionOptions);

    // Observe main containers
    sections.forEach(section => observer.observe(section));

    // Observe hero section children individually for stagger
    heroChildren.forEach(child => observer.observe(child));

    // Observe summary items individually for stagger
    summaryItems.forEach(item => observer.observe(item));

    // Observe cards individually for animation
    cards.forEach(card => observer.observe(card));
});
