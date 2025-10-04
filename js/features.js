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

//gallery.js
(function () {
    // Wait until DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        const thumbs = document.querySelectorAll('#digitalPortfolio .gallery img');
        const overlay = document.getElementById('fullscreenOverlay');
        const overlayImg = document.getElementById('fullscreenImg');
        const backBtn = document.getElementById('backBtn');
        const overlayInner = document.querySelector('.overlay-inner');

        let lastScroll = { x: 0, y: 0 };
        let lastFocusElement = null;

        // Open overlay with the clicked image
        function openOverlay(thumbnail) {
            lastScroll = { x: window.scrollX || window.pageXOffset, y: window.scrollY || window.pageYOffset };
            lastFocusElement = thumbnail;
            overlayImg.src = thumbnail.dataset.full || thumbnail.src;
            overlayImg.alt = thumbnail.alt || '';
            overlay.classList.add('open');
            overlay.setAttribute('aria-hidden', 'false');
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            backBtn.focus();
            console.log('Opened fullscreen image:', overlayImg.src);
        }

        // Close and restore
        function closeOverlay() {
            overlay.classList.remove('open');
            overlay.setAttribute('aria-hidden', 'true');
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            overlayImg.style.transform = 'translateY(0)'; // reset pan
            window.scrollTo(lastScroll.x, lastScroll.y);
            if (lastFocusElement && typeof lastFocusElement.focus === 'function') {
                lastFocusElement.focus({ preventScroll: true });
            }
            console.log('Closed fullscreen image');
        }

        // Attach click on thumbnails
        thumbs.forEach(img => {
            img.setAttribute('tabindex', '0');
            img.addEventListener('click', () => openOverlay(img));
            img.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openOverlay(img);
                }
            });
        });

        // Back button
        backBtn.addEventListener('click', closeOverlay);

        // Clicking outside image closes
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeOverlay();
        });

        // Escape key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('open')) {
                closeOverlay();
            }
        });

        // Right-click (keep default menu, just log)
        overlayImg.addEventListener('contextmenu', (e) => {
            console.log('contextmenu on fullscreen image:', overlayImg.src);
        });

        // Double-click → open new tab
        overlayImg.addEventListener('dblclick', () => {
            window.open(overlayImg.src, '_blank', 'noopener');
            console.log('Opened fullscreen image in new tab:', overlayImg.src);
        });

        // === Desktop hover-pan ===
        // if (window.matchMedia('(min-width: 1080px)').matches) {
        //     overlayInner.addEventListener('mousemove', (e) => {
        //         const rect = overlayInner.getBoundingClientRect();
        //         const mouseY = e.clientY - rect.top;
        //         const ratioY = mouseY / rect.height;

        //         const overflowY = overlayImg.clientHeight - rect.height;
        //         if (overflowY > 0) {
        //             const offsetY = -overflowY * ratioY;
        //             overlayImg.style.transform = `translateY(${offsetY}px)`;
        //         } else {
        //             overlayImg.style.transform = 'translateY(0)';
        //         }
        //     });
        // }
    });
})();
