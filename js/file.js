// Get references to the menu toggle, sidebar, overlay, search input, and card elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const searchInput = document.getElementById('searchInput');
const cardLinks = document.querySelectorAll('.card-link');
const searchIcon = document.querySelector('.search-icon');

let touchStartX = 0;
let touchEndX = 0;

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

// Event listener to filter cards based on search input
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim();
    searchIcon.style.display = (searchTerm.length > 0) ? 'none' : 'block';
    filterCards();
});

// Event listeners for sidebar navigation links
document.addEventListener('DOMContentLoaded', function () {
    const educationLink = document.getElementById('educationLink');
    const experienceLink = document.getElementById('experienceLink');
    const projectLink = document.getElementById('projectLink');
    const techStackLink = document.getElementById('techStackLink');
    const educationSection = document.getElementById('educationSection');
    const experienceSection = document.getElementById('experienceSection');
    const projectSection = document.getElementById('projectSection');
    const techStackSection = document.getElementById('techStackSection');


    projectLink.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(projectSection);
    });

    techStackLink.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(techStackSection);
    });

    educationLink.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(educationSection);
    });

    experienceLink.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(experienceSection);
    });

});


window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.setProperty('--progress', scrolled + '%');
};

document.getElementById("scrollButton").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');
  
    searchInput.addEventListener('input', function() {
      const query = searchInput.value.toLowerCase();
      cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const technologies = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || technologies.includes(query)) {
          card.style.opacity = '1';
          card.style.pointerEvents = 'auto';
        } else {
          card.style.opacity = '0';
          card.style.pointerEvents = 'none';
        }
      });
    });
});

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



