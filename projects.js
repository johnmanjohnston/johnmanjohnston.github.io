const GIT_PROFILE_URL = "https://github.com/johnmanjohnston";
const PROJECT_IMAGE_ROOT = "./assets/projects"
var numCardsCreated = 0;

function createProjectCard(data) {
    numCardsCreated++;
    var wrapper = document.querySelector("#projects-cards-wrapper");

    var title = data["title"];
    var desc = data["description"];
    var link = data["link"];
    var techs = data["techs"];
    var customTitleId = data["customTitleId"] || "";
    var backgroundImagePath = data["bgImage"] || "";

    wrapper.innerHTML +=
        `
        <div class="project-item-container" data-aos="fade-up" data-aos-delay="${50 * numCardsCreated}">
            <div class="project-item-image" style="background: url('${backgroundImagePath}');"></div>
        
            <div class="project-item-title" id="${customTitleId}";>${title}</div>
            <div class="project-item-desc">${desc}</div>
            <div class="project-item-techs">${techs}</div>
            <div class="project-item-view"><a href="${link}" target="_blank">View on GitHub</a></div>
        </div>
    `;
}

createProjectCard({
    "title": "JohnSlap",
    "description": "Slap bass plugin",
    "link": `${GIT_PROFILE_URL}/johnslap/`,
    "techs": "C++, JUCE, Python",
    "customTitleId": "johnslap",
    "bgImage": `${PROJECT_IMAGE_ROOT}/johnslap.png`
});

createProjectCard({
    "title": "FluffyJohn",
    "description": "Cloud file storage web app",
    "link": `${GIT_PROFILE_URL}/fluffyjohn`,
    "techs": "C#, ASP.NET Core, Razor, TS, Sass",
    "customTitleId": "fluffyjohn",
    "bgImage": `${PROJECT_IMAGE_ROOT}/fluffyjohn.png`
});

createProjectCard({
    "title": "Spotify Playlist Downloader",
    "description": "Premium-less playlist download",
    "link": `${GIT_PROFILE_URL}/spotify-playlist-downloader`,
    "techs": "Python",
    "customTitleId": "spotify-playlist-downloader",
    "bgImage": `${PROJECT_IMAGE_ROOT}/spotify-playlist-downloader.png`
});

createProjectCard({
    "title": "MelodyLounge",
    "description": "Music playback web app",
    "link": `${GIT_PROFILE_URL}/melodylounge`,
    "techs": "Python, Django, HTML, JS, CSS",
    "bgImage": `${PROJECT_IMAGE_ROOT}/melodylounge.png`,
    "customTitleId": "melodylounge"
});

createProjectCard({
    "title": "Jelodyne <span style='font-size: 0.5em;'>(in progress)</span>",
    "description": "Manual pitch-correction",
    "link": `${GIT_PROFILE_URL}/jelodyne`,
    "techs": "C++, JUCE",
    "bgImage": `${PROJECT_IMAGE_ROOT}/jelodyne.png`,
    "customTitleId": "jelodyne"
});
