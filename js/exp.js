const experiences = [
    {
        id: "01",
        company: "Parekh Integrated Services",
        role: "Data Analyst",
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
        company: "Wow Momo Foods",
        role: "Senior Team Member",
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
        <button class="exp-toggle">
        <span class="${exp.iconClass}">${exp.company}
            <svg class="${exp.iconClass}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
        </span>${exp.role}<br />${exp.duration}
        </button>
        <div class="exp-content">
        <ol>
            ${exp.responsibilities.map(item => `<li>${item}</li>`).join("")}
        </ol>
        </div>
    `;

    expContainer.appendChild(card);
});

// Insert "Click Here" text only once
const hoverText = document.createElement("div");
hoverText.id = "hoverText";
hoverText.className = "exp-card-hover-text";
hoverText.textContent = "Click Here";
expContainer.insertBefore(hoverText, expContainer.firstChild);
