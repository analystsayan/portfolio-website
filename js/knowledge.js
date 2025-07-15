// js/knowledge.js
const knowledgeData = [
    {
        heading1: "Programming & Data Manupulation",
        items1: ["Python", "Power Query"],
        heading2: "Visualization",
        items2: ["MS Excel", "Power BI", "Matplotlib"],
    },
    {
        heading1: "Data Handling & Querying",
        items1: ["SQL", "Power Pivot", "Google Sheets"],
        heading2: "Platforms",
        items2: ["PBI Service", "Google Data Studio"]
    },
    {
        heading1: "VS Control & Package Manager",
        items1: ["Git/Git-hub", "npm"],
        heading2: "Frontend",
        items2: ["HTML", "CSS", "JavaScript"],
    },
    {
        heading1: "Basic UI/UX",
        items1: ["UI/UX Design", "SEO Knowledge", "Web Analytics"],
        heading2: "Soft Skills",
        items2: ["Problem-Solving", "Communication", "Time Management"],
    }
];

const knowledgeContainer = document.getElementById("knowledgeContainer");

knowledgeData.forEach(data => {
    const card = document.createElement("div");
    card.className = "knowledge-card";

    card.innerHTML = `
        <div class="knowledge-tools">
            <div class="knowledge-circle"><span class="red box"></span></div>
            <div class="knowledge-circle"><span class="yellow box"></span></div>
            <div class="knowledge-circle"><span class="green box"></span></div>
        </div>
        <div class="knowledge-card-content">
            <h4>${data.heading1}</h4>
            <p>${data.items1.join("<br>")}</p>
            <br />
            <h4>${data.heading2}</h4>
            <p>${data.items2.join("<br>")}</p>
        </div>
    `;

    knowledgeContainer.appendChild(card);
});
