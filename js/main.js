// Get references to the menu toggle, sidebar, and overlay elements
const menuToggle = document.getElementById("menuToggle");
const overlay = document.getElementById("overlay");

// Event listener to toggle sidebar visibility
// menuToggle.addEventListener("click", function () {
//   menuToggle.classList.toggle("active");
//   sidebar.classList.toggle("show");
//   overlay.classList.toggle("show");
//   toggleMenuToggleColor();
// });

// Closes the sidebar and resets related elements
function closeSidebar() {
  if (menuToggle && sidebar && overlay) {
    // Check if elements exist
    menuToggle.classList.remove("active");
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
    toggleMenuToggleColor();
  } else {
    console.warn(
      "One or more elements (menuToggle, sidebar, overlay) are missing in the DOM."
    );
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
  overlay.addEventListener("click", closeSidebar);
} else {
  console.warn("Overlay element not found.");
}

// Touch event listeners to detect swipe
document.addEventListener(
  "touchstart",
  function (event) {
    touchStartX = event.changedTouches[0].screenX;
  },
  false
);

document.addEventListener(
  "touchend",
  function (event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe(touchStartX, touchEndX);
  },
  false
);
