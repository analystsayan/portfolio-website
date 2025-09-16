const featuredProjects = [
    {
        title: "F&P-sales-analysis-with-excel",
        tech: "MS Excel • Power Query • Power Pivot • Pivot Table",
        filter: "excel",
        liveLink: "#",
        gitHub: "#",
        gotoProject: "/projects/fnp-sales-analysis-with-excel",
        image: "/media/image/projectimg/fnp-sales-analysis.png"
    },
    {
        title: "AtliQ Hardware Sales Data Analysis with Excel",
        tech: "Excel • Power Query • Power Pivot",
        filter: "excel",
        liveLink: "#",
        gitHub: "#",
        gotoProject: "/projects/atliq-hardware-sales-analysis-with-excel",
        image: "/media/image/projectimg/sales-data-analysis.png"
    },
    {
        title: "AtliQ Tech Sales Insights Dashboard with Power BI",
        tech: "Power BI • My SQL • Power BI Service",
        filter: "powerbi sql",
        liveLink: "#",
        gitHub: "#",
        gotoProject: "/projects/atliq-tech-sales-dashboard-with-powerbi",
        image: "/media/image/projectimg/sales-insights-dashboard.png"
    },
    {
        title: "Portfolio Website",
        tech: "HTML • CSS • JavaScript",
        filter: "webdev",
        liveLink: "https://sayanmondal.in/resume",
        gitHub: "#",
        gotoProject: "/projects/portfolio-website",
        image: "/media/image/projectimg/portfolioImage.png"
    }
];

const featuredProjectContainer = document.getElementById("featuredProjectContainer");

featuredProjects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
        <a href="${project.gotoProject}" class="project-link">
            <div class="project-card-image" style="background-image: url(${project.image});"></div>
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p>${project.tech}</p>
            </div>
        </a>
    `;
    featuredProjectContainer.appendChild(card);
});








/* This code block is a JavaScript function that adds hover effects and toggles the visibility of
content for elements with the class name "exp-card". Here's a breakdown of what it does: */
//function to show exp-content and hover effect too
document.querySelectorAll(".exp-card").forEach((card) => {
    const toggleButton = card.querySelector(".exp-btn-container");
    const expToggle = card.querySelector(".exp-toggle");
    const expContent = card.querySelector(".exp-content");
    const viewMore = card.querySelector("#viewMore");
    const viewLess = card.querySelector("#viewLess");

    // Toggle Experience Content
    toggleButton.addEventListener("click", () => {
        // Toggle the visibility of exp-content
        if (expContent.style.display === "block") {
            expContent.style.display = "none";
            expToggle.classList.remove("active");
            viewLess.style.display = "none";
            viewMore.style.display = "block";
        } else {
            expContent.style.display = "block";
            expToggle.classList.add("active");
            viewMore.style.display = "none";
            viewLess.style.display = "block";
        }
    });
});