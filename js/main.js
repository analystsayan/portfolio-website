// Get references to the menu toggle, sidebar, and overlay elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

/**
 * Closes the sidebar and resets related elements
 */
function closeSidebar() {
    menuToggle.classList.remove('active');
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    toggleMenuToggleColor();
}

/**
 * Handles swipe events to close the sidebar
 */
function handleSwipe() {
    if (touchStartX - touchEndX > 50) { // Adjust the swipe threshold as needed
        closeSidebar();
    }
}

// Event listener to toggle sidebar visibility
menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
    toggleMenuToggleColor();
});

// Event listener to close sidebar when overlay is clicked
overlay.addEventListener('click', closeSidebar);

// Touch event listeners to detect swipe
document.addEventListener('touchstart', function (event) {
    touchStartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function (event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);


// Theme switch functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.classList.add(currentTheme + '-theme');

    themeSwitch.addEventListener('click', function () {
        let newTheme = 'light';
        if (document.documentElement.classList.contains('light-theme')) {
            newTheme = 'dark';
        }
        document.documentElement.classList.remove('light-theme', 'dark-theme');
        document.documentElement.classList.add(newTheme + '-theme');
        localStorage.setItem('theme', newTheme);
    });
});


// Hide header on scroll
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.style.top = '-100px'; // Move header out of view
    } else {
        // Scrolling up
        header.style.top = '0'; // Bring header back into view
    }
    lastScrollY = window.scrollY;
});


// Scroll to top from footer
document.addEventListener('DOMContentLoaded', () => {
    const footerName = document.querySelector('.footername');

    footerName.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        document.querySelector('#top').scrollIntoView({
            behavior: 'smooth', // Smooth scroll
            block: 'start'      // Scroll to the start of the element
        });
    });
});

//alert Function
function myFunction() {
    alert("You will be redirected to my portfolio !");
}

// // JavaScript for handling the cookie notice
// document.addEventListener("DOMContentLoaded", function () {
//     const cookieCard = document.querySelector(".cookie-card");
//     const acceptButton = document.querySelector(".accept");
//     const prefButton = document.querySelector(".pref");

//     // Function to hide the cookie notice
//     function hideCookieNotice() {
//         cookieCard.style.display = "none";
//     }

//     // Check if the user has already accepted the cookies
//     if (localStorage.getItem("cookiesAccepted") === "true") {
//         hideCookieNotice();
//     }

//     // Event listener for the accept button
//     acceptButton.addEventListener("click", function () {
//         localStorage.setItem("cookiesAccepted", "true");
//         hideCookieNotice();
//     });

//     // Event listener for the preferences button
//     prefButton.addEventListener("click", function () {
//         alert("Manage your cookie preferences."); // You can replace this with a preferences modal or page link
//     });
// });


document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        accordionItem.classList.toggle('active');
    });
});


