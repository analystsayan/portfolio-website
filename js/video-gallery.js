function createVideoGallery(sectionId, heading, videoIds) {
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

    const videoGalleryList = document.createElement('div');
    videoGalleryList.className = 'video-gallery-list';

    videoIds.forEach(videoId => { 
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.title = "YouTube video player";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;

        videoGalleryList.appendChild(iframe);
    });

    section.appendChild(h1);
    section.appendChild(hr);
    section.appendChild(videoGalleryList);
}

// Now run it
createVideoGallery('videoGallery', "Recommend Videos", [
    'StVBPKLBAb4',
    'IFSMQJCda10',
    'lbtte7iTS9g',
    'WDUJ-HeyHZI',
    'XieCU9nzrl8'
]);
