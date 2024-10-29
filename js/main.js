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




document.querySelectorAll('.exp-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        accordionItem.classList.toggle('active');
    });
});

/* JavaScript to add sticky class */
window.addEventListener("scroll", () => {
  const profileInfo = document.querySelector(".profile-info");
  if (window.scrollY > 100) {
    profileInfo.classList.add("sticky");
  } else {
    profileInfo.classList.remove("sticky");
  }
});


// JavaScript function for quick navigation to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling transition
        block: 'start', // Scroll to the top of the section
      });
    }
  }
  
  // Event listeners for buttons with specific IDs
  document.getElementById('projectButton').addEventListener('click', () => scrollToSection('projectSection'));
  document.getElementById('ExperienceButton').addEventListener('click', () => scrollToSection('experienceSection'));
  document.getElementById('educationButton').addEventListener('click', () => scrollToSection('educationSection'));
  
