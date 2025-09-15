const educationData = [
    {
        imgSrc: "/media/image/logo/makaut-logo.jpeg",
        alt: "Makaut",
        schoolName: "Maulana Abul Kalam Azad University of Technology",
        course: "Information Technology",
        stream: "Data Science",
        year: "2023"
    },
    {
        imgSrc: "/media/image/logo/wbchselogo.jpg",
        alt: "WBCHSE",
        schoolName: "Lego RBRK Vidyapith (HighSchool)",
        course: "Higher Secondary Education",
        stream: "Science",
        year: "2020"
    },
    {
        imgSrc: "/media/image/logo/wbbselogo.jpg",
        alt: "WBBSE",
        schoolName: "Aswinkota Vidyasagar Vidyamandir",
        course: "Secondary Education",
        stream: "General Science",
        year: "2018"
    }
];

function renderEducation() {
    const container = document.getElementById("educationContainer");

    educationData.forEach(({ imgSrc, alt, schoolName, course, stream, year }) => {
        const card = document.createElement("div");
        card.classList.add("school-card");

        card.innerHTML = `
        <div class="school-image">
            <img src="${imgSrc}" alt="${alt}" class="school-logo" />
        </div>
        <div class="school-details">
            <h3 class="school-name">${schoolName}</h3>
            <p class="course">Course: ${course}</p>
            <p class="stream">Stream: ${stream}</p>
            <p class="year">Year: ${year}</p>
        </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderEducation);
