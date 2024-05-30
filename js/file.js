// Get references to the menu toggle, sidebar, and overlay elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const searchInput = document.getElementById('searchInput');
const cardLinks = document.querySelectorAll('.card-link');
const searchIcon = document.querySelector('.search-icon');

let touchStartX = 0;
let touchEndX = 0;

// Function to toggle the menu toggle icon color
function toggleMenuToggleColor() {
    // Check if the sidebar has the 'show' class
    const isSidebarVisible = sidebar.classList.contains('show');

    // Toggle the color of the menu toggle icon based on sidebar visibility
    if (isSidebarVisible) {
        menuToggle.classList.add('white'); // Add the 'white' class
    } else {
        menuToggle.classList.remove('white'); // Remove the 'white' class
    }
}

// Function to close the sidebar
function closeSidebar() {
    // Remove the 'active' class from the menu toggle icon
    menuToggle.classList.remove('active');

    // Remove the 'show' class from the sidebar
    sidebar.classList.remove('show');

    // Remove the 'show' class from the overlay
    overlay.classList.remove('show');

    // Toggle the color of the menu toggle icon
    toggleMenuToggleColor();
}

// Add click event listener to the menu toggle icon
menuToggle.addEventListener('click', function() {
    // Toggle the 'active' class on menu toggle icon to change its appearance
    menuToggle.classList.toggle('active');

    // Toggle the 'show' class on the sidebar to show/hide it
    sidebar.classList.toggle('show');

    // Toggle the 'show' class on the overlay to show/hide it
    overlay.classList.toggle('show');

    // Toggle the color of the menu toggle icon
    toggleMenuToggleColor();
});

// Add click event listener to the overlay to close the sidebar
overlay.addEventListener('click', function() {
    closeSidebar();
});

// Add touch event listeners to detect swipe
document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

// Function to handle swipe
function handleSwipe() {
    // Determine if the swipe is a left swipe
    if (touchStartX - touchEndX > 50) { // Adjust the swipe threshold as needed
        closeSidebar();
    }
}

// Function to filter cards based on search input
function filterCards() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    cardLinks.forEach(cardLink => {
        const card = cardLink.querySelector('.card');
        const cardContent = card.querySelector('.card-content');
        const title = cardContent.querySelector('h3').innerText.toLowerCase();
        const description = cardContent.querySelector('p').innerText.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            cardLink.style.display = 'block';
        } else {
            cardLink.style.display = 'none';
        }
    });
}

// Add input event listener to the search input
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim();
    // Toggle visibility of search icon based on search term length
    if (searchTerm.length > 0) {
        searchIcon.style.display = 'none';
    } else {
        searchIcon.style.display = 'block';
    }

    filterCards(); // Call filterCards function to filter cards based on search input
});
