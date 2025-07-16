const projects = [
    {
        title: "Sales Data Analysis",
        tech: "Excel • Power Query • Power Pivot",
        liveLink: "https://microsoftclonebyas.vercel.app",
        sourceCode: "https://github.com/analystsayan/microsoft-landing-tailwind",
        gotoProject: "/projects/sales-data-analysis",
        image: "/media/image/projectimg/sales-data-analysis.png"
    },
    {
        title: "Sales Insights Dashboard",
        tech: "Power BI • My SQL • Power BI Service",
        liveLink: "https://getprojectidea.vercel.app",
        sourceCode: "https://github.com/analystsayan/get-project-idea",
        gotoProject: "/projects/sales-insights-dashboard",
        image: "/media/image/projectimg/sales-insights-dashboard.png"
    },
    {
        title: "Portfolio Website",
        tech: "HTML • CSS • JavaScript",
        liveLink: "https://sayanmondal.in/resume",
        sourceCode: "https://github.com/analystsayan/Portfolio",
        gotoProject: "/projects/portfolio-website",
        image: "/media/image/projectimg/portfolioImage.png"
    },
    {
        title: "My Sql Reporting",
        tech: "My SQL • Query • Reporting",
        liveLink: "https://sayanmondal.in/resume",
        sourceCode: "https://github.com/analystsayan/Portfolio",
        gotoProject: "/projects/my-sql-reporting",
        image: "/media/image/projectimg/my-sql-reporting.png"
    }
];

const projectContainer = document.getElementById("ProjectContainer");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "resume-project-card";
    card.innerHTML = `
        <a href="${project.gotoProject}" class="project-link">
            <div class="resume-project-card-image" style="background-image: url(${project.image});"></div>
            <div class="resume-project-card-content">
                <h3>${project.title}</h3>
                <p>${project.tech}</p>
            </div>
        </a>
    `;
    projectContainer.appendChild(card);
});
