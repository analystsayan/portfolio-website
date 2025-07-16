// func to toggle and close the sidebar for mobile
document.addEventListener('DOMContentLoaded', () => {
    // Get the menu toggle button (to open the sidebar)
    const menuToggle = document.getElementById('menuToggle');
    // Get the menu toggle close button (to close the sidebar)
    const menuToggleClose = document.getElementById('menuToggleClose');
    // Get the sidebar element
    const sidebar = document.querySelector('aside');
    // Get the overlay element
    const overlay = document.getElementById('overlay');

    // Variables to track touch events
    let touchStartX = 0;
    let touchEndX = 0;

    // Function to open the sidebar and show the overlay
    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('open'); // Add the 'open' class to open the sidebar
        overlay.classList.add('active'); // Show the overlay
    });

    // Function to close the sidebar and hide the overlay
    menuToggleClose.addEventListener('click', () => {
        sidebar.classList.remove('open'); // Remove the 'open' class to close the sidebar
        overlay.classList.remove('active'); // Hide the overlay
    });

    // Close the sidebar if the overlay is clicked
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open'); // Remove the 'open' class to close the sidebar
        overlay.classList.remove('active'); // Hide the overlay
    });

    // Detect swipe to close the sidebar (right to left swipe)
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;

        // Check if the swipe is from right to left
        if (touchStartX - touchEndX > 100) {
            sidebar.classList.remove('open'); // Remove the 'open' class to close the sidebar
            overlay.classList.remove('active'); // Hide the overlay
        }
    });
});





// 2......JavaScript function for quick navigation to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = 70; // height of your fixed header
        const topPos = section.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: topPos,
            behavior: "smooth"
        });
    } else {
        console.error(`Section with ID "${sectionId}" not found.`);
    }
}


// Initialize event listeners for buttons
function initializeNavigation() {
    const navigationConfig = [
        { buttonId: "projectBtn", sectionId: "projectSection" },
        { buttonId: "experienceBtn", sectionId: "experienceSection" },
        { buttonId: "educationBtn", sectionId: "educationSection" },
        { buttonId: "aboutmeBtn", sectionId: "aboutmeSection" },
        { buttonId: "galleryBtn", sectionId: "gallerySection" },
        { buttonId: "contactmeBtn", sectionId: "contactSection" },
    ];

    navigationConfig.forEach(({ buttonId, sectionId }) => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener("click", () => scrollToSection(sectionId));
        } else {
            console.warn(`Button with ID "${buttonId}" not found.`);
        }
    });
}

// Call the initialize function after DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeNavigation);





// 3........sidebar toggle for desktop
function toggleMaxSidebar() {
    const sidebar = document.getElementById('sideBar');
    const toggleBtn = document.getElementById('toggle-btn');

    if (!sidebar || !toggleBtn) return;

    sidebar.classList.toggle('close');
    toggleBtn.classList.toggle('rotate'); // ⬅️ adds class for rotation
}



// tap to top
// Show button when scrolled 10% of the page height
window.addEventListener("scroll", function () {
    const scrollBtn = document.getElementById("backToTopBtn");
    const scrollY = window.scrollY || window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollY > documentHeight * 0.1) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

// Smooth scroll to top on click
document.getElementById("backToTopBtn").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});






let lastScrollTop = 0;
const contactBtn = document.querySelector('.fixed-contact');

window.addEventListener('scroll', () => {
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

if (scrollTop > lastScrollTop) {
      // Scrolling Down
    contactBtn.classList.add('hide-text');
} else {
      // Scrolling Up
    contactBtn.classList.remove('hide-text');
}

lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scroll
}, false);


