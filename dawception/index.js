function openInstallationInstructions(platform) {
    var iiWrapper = document.querySelector("#installation-instructions-wrapper");
    //iiWrapper.classList.remove("height0");
    iiWrapper.classList.add("heightalot");

    var installationInstructiosnPlatform = document.querySelector("#installation-instructions-platform");
    if (platform == "linux") installationInstructiosnPlatform.innerText = "x86_64-linux";
    else if (platform == "windows") installationInstructiosnPlatform.innerText = "win64";
    else if (platform == "macos") installationInstructiosnPlatform.innerText = "macOS";

    var instructions = document.querySelector("#installation-instructions-platform-specific-instructions")
    if (platform == "linux") {
        instructions.innerHTML = `
                    On Linux, your DAW's VST3 plugin folder is usually located at:
                    <div><pre>    ~/.vst3/</pre> (user)</div>
                    <div><pre>        OR</pre></div>
                    <div><pre>    /usr/lib/vst3/</pre> (global)</div>
        `;
    } else if (platform == "windows") {
        instructions.innerHTML = `
                    On Windows, your DAW's VST3 plugin folder is usually located at:
                    <div><pre>    C:\\Program Files\\Common Files\\VST3\\</pre></div>
        `;
    } else if (platform == "macos") {
        instructions.innerHTML = `
                    On macOS, your DAW's VST3 plugin folder is usually located at:
                    <div><pre>    /Library/Audio/Plug-Ins/VST3/</pre></div>
                    <ul>
                        <li>open the Terminal app and run these commands (adjust path if needed):</li>
                    <pre class="macos-pre">sudo xattr -dr com.apple.quarantine /Library/Audio/Plug-Ins/VST3/DAWception.vst3</pre>
                        <br>
                        and
                        <br>
                    <pre class="macos-pre">sudo codesign --deep --force --sign - /Library/Audio/Plug-Ins/VST3/DAWception.vst3</pre>

                    </ul>
        `;
    }

    setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth"
        });
    }, 100);
}

/*
var dialogImg = document.querySelector("#pc-img");
var dialogEl = document.querySelector("#img-dialog");
var dialogCloseBtn = document.querySelector("#img-dialog-close");

dialogImg.onclick = (ev) => {
    dialogEl.showModal();
};

dialogCloseBtn.onclick = (ev) => {
    dialogEl.close();
}*/

// openInstallationInstructions("macos")
