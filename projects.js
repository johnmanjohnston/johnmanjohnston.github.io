const GIT_PROFILE_URL = "https://github.com/johnmanjohnston";

function createProjectCard(data) {
    /*
        data structure:
            title (ex "JohnSlap")
            description (ex "slap bass plugin")
            link (ex "https://github.com/johnmanjohnston/johnslap/")
    */

    var wrapper = document.querySelector("#projects-cards-wrapper");

    var title = data["title"];
    var desc = data["description"];
    var link = data["link"];
    var techs = data["techs"];
    var customTitleId = data["customTitleId"] || "";

    wrapper.innerHTML +=
        `
        <div class="project-item-container">
            <div class="project-item-image"></div>
        
            <div class="project-item-title" id="${customTitleId}";>${title}</div>
            <div class="project-item-desc">${desc}</div>
            <div class="project-item-techs">${techs}</div>
            <div class="project-item-view"><a href="${link}">View on GitHub</a></div>
        </div>
    `;
}

createProjectCard({
    "title": "JohnSlap",
    "description": "Slap bass plugin",
    "link": `${GIT_PROFILE_URL}/johnslap/`,
    "techs": "C++, Python, JUCE",
    "customTitleId": "johnslap"
});

createProjectCard({
    "title": "FluffyJohn",
    "description": "Cloud file storage web app",
    "link": `${GIT_PROFILE_URL}/fluffyjohn`,
    "techs": "C#, ASP.NET Core, Razor, TS, Sass",
    "customTitleId": "fluffyjohn"
});
