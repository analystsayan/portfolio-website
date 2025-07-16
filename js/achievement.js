const achievementsData = [
    {
        imgSrc: "/media/image/important/excel-mother-of-business.jpg",
        learnings: [
            "Proficient in func including VLOOKUP, INDEX MATCH, and PivotTables.",
            "Experienced in P Query for efficient data transformation and automation.",
            "Practiced ETL process with real-world datasets for analytical understanding.",
            "Created interactive dashboards and visualizations for actionable business insights."
        ]
    },
    {
        imgSrc: "/media/image/important/gen-ai.jpg",
        learnings: [
            "Gained a strong foundation in Generative AI, including its real life applications and working principles.",
            "Explored AI-driven automation and its impact on workplace productivity.",
            "Learned about ethical considerations in AI, such as bias, fairness, and responsible usage.",
            "Developed hands-on experience with AI tools to enhance efficiency and decision-making."
        ]
    },
    {
        imgSrc: "/media/image/important/career-microsoft-linkedin.jpg",
        learnings: [
            "Making sure my data is accurate and consistent so I can trust my analysis.",
            "Learned how to use tools like Excel, Power BI, and SQL to work with data efficiently.",
            "Create clean, clear and engaging visualizations to communicate my findings.",
            "Have to apply my data analysis skills to make better decisions and improve business outcomes."
        ]
    },
    {
        imgSrc: "/media/image/important/intro-data-analytics-linkedin.jpg",
        learnings: [
            "Data is anywhere & everywhere, and understanding it is key.",
            "Tools like Excel, SQL, and Python are essential for data analysis.",
            "Visualizing data makes it more impactful and understandable.",
            "Data analysis offers exciting career opportunities."
        ]
    }
];

function renderAchievements() {
    const container = document.getElementById("achievementContainer");

    achievementsData.forEach(({ imgSrc, learnings }) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <img src="${imgSrc}" />
        <div class="card__content">
            <p class="card__title">
            <i class="fa-solid fa-bookmark"></i> Key Learnings
            </p>
            <ul class="card__description">
            ${learnings.map(learning => `<li>${learning}</li>`).join("")}
            </ul>
        </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderAchievements);
