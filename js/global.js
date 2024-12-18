// JavaScript function for quick navigation to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth", // Smooth scrolling transition
            block: "start", // Scroll to the top of the section
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





// main sidebar toggle for desktop
const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sideBar');

function toggleMaxSidebar() {
    sideBar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    })
}

//submenu toggle
function toggleSubMenu(button) {
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}


//remove default title
document.querySelectorAll('[title]').forEach(element => {
    element.addEventListener('mouseenter', () => {
        const title = element.getAttribute('title');
        element.setAttribute('custom-title', title); // Move title to custom attribute
        element.removeAttribute('title'); // Remove default title
    });

    element.addEventListener('mouseleave', () => {
        const customTitle = element.getAttribute('custom-title');
        element.setAttribute('title', customTitle); // Restore title attribute
        element.removeAttribute('custom-title'); // Remove custom attribute
    });
});

