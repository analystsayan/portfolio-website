function openFullscreen(imgElement) {
    const fullscreenViewer = document.getElementById('fullscreenViewer');
    const fullscreenImg = document.getElementById('fullscreenImg');
    fullscreenImg.src = imgElement.src;
    fullscreenViewer.style.display = 'flex';
}

function closeFullscreen() {
    const fullscreenViewer = document.getElementById('fullscreenViewer');
    fullscreenViewer.style.display = 'none';
}

function createGalleryContent(sectionId, heading, folderPath, images) {
    const section = document.getElementById(sectionId);

    if (!section) {
        console.error(`Section with ID '${sectionId}' not found.`);
        return;
    }

    section.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.className = 'index-heading';
    h1.textContent = heading;

    const hr = document.createElement('hr');

    const galleryList = document.createElement('div');
    galleryList.className = 'gallery-list';

    images.forEach(fileName => {
        const img = document.createElement('img');
        img.src = `${folderPath}/${fileName}`; // 👈 folderPath + fileName
        img.alt = fileName.split('.')[0];
        img.onclick = function () {
            openFullscreen(this);
        };
        galleryList.appendChild(img);
    });

    const fullscreenViewer = document.createElement('div');
    fullscreenViewer.id = 'fullscreenViewer';
    fullscreenViewer.style.display = 'none'; 
    fullscreenViewer.onclick = closeFullscreen;

    const fullscreenImg = document.createElement('img');
    fullscreenImg.id = 'fullscreenImg';
    fullscreenImg.src = '';
    fullscreenImg.alt = 'Fullscreen Image';

    fullscreenViewer.appendChild(fullscreenImg);

    section.appendChild(h1);
    section.appendChild(hr);
    section.appendChild(galleryList);
    section.appendChild(fullscreenViewer);
}

// 🛠️ Now call like this:
createGalleryContent('gallerySection', 'AI Art & Wallpapers', 'media/image/gallery', [
    'dog-starry-night.png',
    'lion-and-baby.png',
    'cat-green-wall.png',
    'camel-sunset.png',
    'sunset-boy.png',
    'india-1957.png',
]);
