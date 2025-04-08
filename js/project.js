const projects = [
    {
        title: "Portfolio Website",
        tech: "HTML, CSS, JavaScript",
        liveLink: "https://analystsayan.vercel.app",
        sourceCode: "https://github.com/analystsayan/Portfolio",
        readme: "https://github.com/analystsayan/Portfolio/blob/main/README.md",
        image: "/media/image/projectimg/portfolioimageweb.png"
    },
    {
        title: "Landing Page Clone",
        tech: "HTML, Tailwind CSS, JavaScript",
        liveLink: "https://microsoftclonebyas.vercel.app",
        sourceCode: "https://github.com/analystsayan/microsoft-landing-tailwind",
        readme: "https://github.com/analystsayan/microsoft-landing-tailwind/blob/master/README.md",
        image: "/media/image/projectimg/microsoft-clone.png"
    },
    {
        title: "Get Project !dea",
        tech: "Java Script, CSS, HTML",
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
        <a href="${project.readme}">
        <div class="projectdata">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80Z"/>
            </svg>
        </div>
        </a>
        <div class="resume-project-card-image" style="background-image: url(${project.image});"></div>
        <div class="resume-project-card-content">
        <h3>${project.title}</h3>
        <p>${project.tech}</p>
        <div class="link-section">
            <a class="link-highlight" href="${project.liveLink}" target="_blank">Live</a>
            <a class="link-highlight" href="${project.sourceCode}" target="_blank">Source Code</a>
        </div>
        </div>
    `;
    projectContainer.appendChild(card);
});
