// Get references to the menu toggle, sidebar, overlay, search input, and card elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const searchIcon = document.querySelector('.search-icon');

/**
 * Toggles the color of the menu toggle icon based on sidebar visibility
 */
function toggleMenuToggleColor() {
    const isSidebarVisible = sidebar.classList.contains('show');
    menuToggle.classList.toggle('white', isSidebarVisible);
}

/**
 * Closes the sidebar and resets related elements
 */
function closeSidebar() {
    menuToggle.classList.remove('active');
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    toggleMenuToggleColor();
}

// Function to toggle sidebar visibility
function toggleSidebar() {
    const isSidebarVisible = sidebar.classList.contains('show');
    
    if (isSidebarVisible) {
      sidebar.classList.remove('show');
      overlay.classList.remove('show');
    } else {
      sidebar.classList.add('show');
      overlay.classList.add('show');
    }
    
    // Ensure menu toggle button is always on top
    menuToggle.style.zIndex = isSidebarVisible ? '1001' : '1001';
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
menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
    toggleMenuToggleColor();
});

// Event listener to close sidebar when overlay is clicked
overlay.addEventListener('click', closeSidebar);

// Touch event listeners to detect swipe
document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

// theme switch
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.classList.add(currentTheme + '-theme');

    themeSwitch.addEventListener('click', function() {
        let newTheme = 'light';
        if (document.documentElement.classList.contains('light-theme')) {
            newTheme = 'dark';
        }
        document.documentElement.classList.remove('light-theme', 'dark-theme');
        document.documentElement.classList.add(newTheme + '-theme');
        localStorage.setItem('theme', newTheme);
    });
});

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

