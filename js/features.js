// backToTopBtn.js
document.addEventListener('DOMContentLoaded', () => {
    const targetId = 'backToTopBtn';
    const containers = document.querySelectorAll(`#${targetId}`);

    containers.forEach(container => {
        container.innerHTML = `
        <button class="button-nature back-to-top-btn" title="Go to top" aria-label="Back to top">
            <i class="fa-solid fa-angle-up"></i>
        </button>
    `;
        // The container is initially hidden via CSS

        // Show/hide the container div based on scroll
        window.addEventListener("scroll", function () {
            const scrollY = window.scrollY || window.pageYOffset;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollY > documentHeight * 0.15) { // 15% scroll threshold
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        });

        // Scroll to top handler
        const btn = container.querySelector('.back-to-top-btn');
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});

