// Get references to the menu toggle, sidebar, and overlay elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');


// Event listener to toggle sidebar visibility
menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('active');
  sidebar.classList.toggle('show');
  overlay.classList.toggle('show');
  toggleMenuToggleColor();
});


// Closes the sidebar and resets related elements
function closeSidebar() {
  if (menuToggle && sidebar && overlay) { // Check if elements exist
      menuToggle.classList.remove('active');
      sidebar.classList.remove('show');
      overlay.classList.remove('show');
      toggleMenuToggleColor();
  } else {
      console.warn('One or more elements (menuToggle, sidebar, overlay) are missing in the DOM.');
  }
}

// Handles swipe events to close the sidebar
function handleSwipe(touchStartX, touchEndX) {
  const swipeThreshold = 50; // Define swipe threshold
  if (touchStartX - touchEndX > swipeThreshold) {
      closeSidebar();
  }
}

// Ensure these variables are declared explicitly
let touchStartX = 0;
let touchEndX = 0;

// Event listener to close sidebar when overlay is clicked
if (overlay) {
  overlay.addEventListener('click', closeSidebar);
} else {
  console.warn('Overlay element not found.');
}

// Touch event listeners to detect swipe
document.addEventListener('touchstart', function (event) {
  touchStartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function (event) {
  touchEndX = event.changedTouches[0].screenX;
  handleSwipe(touchStartX, touchEndX);
}, false);






// Scroll to top from footer
document.addEventListener('DOMContentLoaded', () => {
  const footerName = document.querySelector('.footername');
  
  if (footerName) { // Ensure the element exists
      footerName.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default anchor behavior
          document.querySelector('#top').scrollIntoView({
              behavior: 'smooth', // Smooth scroll
              block: 'start'      // Scroll to the start of the element
          });
      });
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
  
  


//Experience card hover text with cursor
document.querySelectorAll('.exp-toggle').forEach(card => {
    const hoverText = document.getElementById('hoverText');
  
    card.addEventListener('mouseover', () => {
      hoverText.style.display = 'block';
    });
  
    card.addEventListener('mousemove', (e) => {
      hoverText.style.left = e.pageX + 20 + 'px'; // Offset from mouse
      hoverText.style.top = e.pageY + 20 + 'px';  // Offset from mouse
    });
  
    card.addEventListener('mouseout', () => {
      hoverText.style.display = 'none';
    });
  });
  