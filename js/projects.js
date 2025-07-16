const projects = [
    {
        title: "Sales Data Analysis",
        tech: "Excel • Power Query • Power Pivot",
        filter: "excel",
        liveLink: "https://microsoftclonebyas.vercel.app",
        sourceCode: "https://github.com/analystsayan/microsoft-landing-tailwind",
        gotoProject: "/projects/sales-data-analysis",
        image: "/media/image/projectimg/sales-data-analysis.png"
    },
    {
        title: "Sales Insights Dashboard",
        tech: "Power BI • My SQL • Power BI Service",
        filter: "powerbi sql",
        liveLink: "https://getprojectidea.vercel.app",
        sourceCode: "https://github.com/analystsayan/get-project-idea",
        gotoProject: "/projects/sales-insights-dashboard",
        image: "/media/image/projectimg/sales-insights-dashboard.png"
    },
    {
        title: "Portfolio Website",
        tech: "HTML • CSS • JavaScript",
        filter: "webdev",
        liveLink: "https://sayanmondal.in/resume",
        sourceCode: "https://github.com/analystsayan/Portfolio",
        gotoProject: "/projects/portfolio-website",
        image: "/media/image/projectimg/portfolioImage.png"
    },
    {
        title: "My Sql Reporting",
        tech: "My SQL • Query • Reporting",
        filter: "sql",
        liveLink: "https://sayanmondal.in/resume",
        sourceCode: "https://github.com/analystsayan/Portfolio",
        gotoProject: "/projects/my-sql-reporting",
        image: "/media/image/projectimg/my-sql-reporting.png"
    }
];

const projectContainer = document.getElementById("ProjectContainer");

projects.forEach(project => {
    const card = document.createElement("div");

    // Generate tag string for filtering
    const tags = project.filter
        .toLowerCase()
        .replace(/•/g, ',') // replace bullet with comma
        .replace(/\s+/g, '') // remove all spaces
        .split(',')
        .join(' '); // turn it into space-separated list

    card.className = "resume-project-card";
    card.setAttribute("data-tags", tags); // ← Used for filtering

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



// JavaScript for activating filters
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Set active class
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const tag = btn.dataset.tag.toLowerCase(); // like 'html', 'powerbi', or 'all'
        const allCards = document.querySelectorAll('.resume-project-card');

        allCards.forEach(card => {
            const tags = card.dataset.tags; // comes from data-tags above

            if (tag === 'all' || tags.includes(tag)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});


