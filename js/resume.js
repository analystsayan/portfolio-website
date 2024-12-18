//function to show exp-content and hover effect too
document.querySelectorAll(".exp-card").forEach((card) => {
    const hoverText = document.getElementById("hoverText");
    const toggleButton = card.querySelector(".exp-toggle");
    const expContent = card.querySelector(".exp-content");

    // Hover Text Functionality
    toggleButton.addEventListener("mouseover", () => {
        hoverText.style.display = "block";
    });

    toggleButton.addEventListener("mousemove", (e) => {
        hoverText.style.left = e.pageX + 20 + "px"; // Offset from mouse
        hoverText.style.top = e.pageY + 20 + "px"; // Offset from mouse
    });

    toggleButton.addEventListener("mouseout", () => {
        hoverText.style.display = "none";
    });

    // Toggle Experience Content
    toggleButton.addEventListener("click", () => {
        // Toggle the visibility of exp-content
        if (expContent.style.display === "block") {
            expContent.style.display = "none";
        } else {
            expContent.style.display = "block";
        }
    });
});