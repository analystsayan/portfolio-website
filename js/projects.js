

const projects = [
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

    card.className = "project-card";
    card.setAttribute("data-tags", tags); // ← Used for filtering

    card.innerHTML = `
        <a href="${project.gotoProject}" class="project-link">
            <div class="project-card-image" style="background-image: url(${project.image});"></div>
            <div class="project-card-content">
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
        const allCards = document.querySelectorAll('.project-card');

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





// getyoutubeurl

document.addEventListener("DOMContentLoaded", () => {
    const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR8VJkViYV5cnn_HZ2WzgLo5Thon843r1BXl8AeP74cFcHksXMXWIWPJvewcUb-BAUaF1pUoAngm_Ts/pub?output=csv";

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .replace(".html", "")
        .toLowerCase();

    fetch(sheetUrl)
        .then(response => response.text())
        .then(csvText => {
            const rows = csvText.trim().split("\n").map(row => row.split(","));
            const headers = rows[0];
            const data = rows.slice(1);

            const pageIndex = headers.indexOf("page");
            const videoIndex = headers.indexOf("video_link");

            const match = data.find(row => row[pageIndex] === currentPage);
            if (match && match[videoIndex]) {
                const videoUrl = match[videoIndex];
                const videoId = new URL(videoUrl).searchParams.get("v");

                if (videoId) {
                    document.getElementById("youtube-video").src = `https://www.youtube.com/embed/${videoId}`;
                }
            }
        })
        .catch(error => {
            console.error("Error loading video:", error);
        });
});