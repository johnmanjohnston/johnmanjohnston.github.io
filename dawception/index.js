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
                    standard VST3 path for Linux:
                    <div><pre>    ~/.vst3/</pre> (user)</div>
                    <div><pre>        OR</pre></div>
                    <div><pre>    /usr/lib/vst3/</pre> (global)</div>
        `;
    } else if (platform == "windows") {
        instructions.innerHTML = `
                    standard VST3 path for Windows:
                    <div><pre>    C:\\Program Files\\Common Files\\VST3\\</pre></div>
        `;
    } else if (platform == "macos") {
        instructions.innerHTML = `
                    standard VST3 path for macOS:
                    <div><pre>    /Library/Audio/Plug-Ins/VST3/</pre></div>
                    <ul>
                        <li>open the Terminal app and run these commands (adjust path if needed):</li>
                        <div class="macos-command-wrapper">
                    <pre class="macos-pre" id="command1">sudo xattr -dr com.apple.quarantine /Library/Audio/Plug-Ins/VST3/DAWception.vst3</pre>
                    <button onclick="copyInstallCommand('command1', this)">copy</button>
                        </div>

                        then

                        <div class="macos-command-wrapper">
                    <pre class="macos-pre" id="command2">sudo codesign --deep --force --sign - /Library/Audio/Plug-Ins/VST3/DAWception.vst3</pre>
                    <button onclick="copyInstallCommand('command2', this)">copy</button>
                        </div>

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

function copyInstallCommand(commandElId, btn) {
    var cmd = document.getElementById(commandElId).innerText;

    navigator.clipboard.writeText(cmd).catch((ex) => { alert('failed'); console.log(ex); }).then((ev) => { console.log(ev); });

    btn.innerText = "copied";
    setTimeout(() => {
        btn.innerText = "copy";
    }, 1200);

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
