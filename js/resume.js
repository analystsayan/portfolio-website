const featuredProjects = [
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
        gotoProject: "/projects/atliq-tech-sales-insights-dashboard-with-powerbi",
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
    },
    {
        title: "BokmyShow Reporting with My SQL",
        tech: "My SQL • Query • Reporting",
        filter: "sql",
        liveLink: "#",
        gitHub: "#",
        gotoProject: "/projects/bookmyshow-reporting-with-mysql",
        image: "/media/image/projectimg/my-sql-reporting.png"
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