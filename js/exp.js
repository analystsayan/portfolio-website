const experiences = [
    {
        id: "01",
        logo: "/media/image/company-logo/pispl-logo.png",
        company: "Parekh",
        role: "MIS Executive",
        duration: "Jun 2024 - Oct 2024",
        iconClass: "pispl",
        responsibilities: [
            "Analyzed large datasets to uncover trends and insights.",
            "Created interactive data dashboards to track key metrics.",
            "Enhanced data accuracy by identifying and resolving inconsistencies.",
            "Boosted overall efficiency by 20% through optimized processes."
        ]
    },
    {
        id: "02",
        logo: "/media/image/company-logo/wow-logo.jpg",
        company: "Wow Momo",
        role: "Sr. Team Member",
        duration: "Dec 2023 - June 2024",
        iconClass: "wow-momo",
        responsibilities: [
            "Managed front-end billing operations to ensure smooth transactions.",
            "Coordinated team activities to enhance workplace efficiency.",
            "Conducted quality control checks to maintain product standards.",
            "Monitored and tracked daily product inventory for accurate reporting."
        ]
    },
    {
        id: "03",
        logo: "/media/image/company-logo/tal-logo.png",
        company: "Think Again Lab",
        role: "Data Science Intern",
        duration: "Dec 2022 - Mar 2023",
        iconClass: "think-again-lab",
        responsibilities: [
            "Conducted data analysis projects with Python & R to extract meaningful insights.",
            "Developed data visualization dashboards for clear and impactful representation.",
            "Built predictive models to support real-time decision-making.",
            "Collaborated on optimizing workflows for improved data processing efficiency."
        ]
    }
];

const expContainer = document.getElementById("expContainer");

experiences.forEach((exp) => {
    const card = document.createElement("div");
    card.className = "exp-card";
    card.innerHTML = `
        <p class="exp-num">${exp.id}</p>
        <div class="exp-toggle">
            <div class="exp-header">
                <div class="exp-logo" style="background-image: url(${exp.logo});"></div>
                <div class="exp-info">
                    <div class="exp-role">${exp.role}</div>
                    <div class="exp-company">${exp.company}</div>
                    <div class="exp-duration">${exp.duration}</div>
                </div>
            </div>
            <div class="exp-btn-container">
                <button id="viewMore" class="exp-btn view-more">More<i class="fa-solid fa-caret-down"></i></button>
                <button id="viewLess" class="exp-btn view-less">Less<i class="fa-solid fa-caret-up"></i></button>
            </div>
        </div>
        <div class="exp-content">
        <ol>
            ${exp.responsibilities.map(item => `<li>${item}</li>`).join("")}
        </ol>
        </div>
    `;

    expContainer.appendChild(card);
});
