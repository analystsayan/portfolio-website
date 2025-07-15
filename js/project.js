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
        title: "Portfolio Website",
        tech: "HTML • CSS • JavaScript",
        liveLink: "https://sayanmondal.in/resume",
        sourceCode: "https://github.com/analystsayan/Portfolio",
        gotoProject: "/projects/portfolio-website",
        image: "/media/image/projectimg/portfolioimage.png"
    },
    {
        title: "Get Project !dea",
        tech: "Java Script • CSS • HTML",
        liveLink: "https://getprojectidea.vercel.app",
        sourceCode: "https://github.com/analystsayan/get-project-idea",
        readme: "https://github.com/analystsayan/get-project-idea/blob/main/README.md",
        image: "/media/image/projectimg/getprojectidea.png"
    },
    {
        title: "Login Page Clone",
        tech: "HTML, Tailwind CSS",
        liveLink: "https://facebookclonebyas.vercel.app",
        sourceCode: "https://github.com/analystsayan/facebook-loginpage-clone",
        readme: "https://github.com/analystsayan/facebook-loginpage-clone/blob/master/README.md",
        image: "/media/image/projectimg/facebook2.png"
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
