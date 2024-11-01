document.body.onload = () => {
    var wallpaperIntersects = document.querySelectorAll(".wallpaper-intersection");
    console.log("configuring wallpaper intersects");

    // a fix for when using the previous/next webpage buttons on Safari
    // the fade-up animation plays and covers the entire webpage
    window.addEventListener("pageshow", (e) => {
        if (e.persisted) {
            wallpaperIntersects = document.querySelectorAll(".wallpaper-intersection");
            wallpaperIntersects.forEach(el => el.remove());
        }
    });

    for (var i = 0; i < wallpaperIntersects.length; i++) {
        var delay = Math.floor((Math.floor(Math.random() * 100)));

        wallpaperIntersects[i].addEventListener("animationend", (ev) => {
            ev.target.remove();
        });

        wallpaperIntersects[i].setAttribute(
            "style", `animation-name: fade-down; width: calc(100% / ${wallpaperIntersects.length}); left: calc((100% / ${wallpaperIntersects.length}) * ${i}); animation-delay: ${delay}ms;`
        );
    }

    AOS.init({
        once: true
    });

    var anchors = document.querySelectorAll("a");
    for (var i = 0; i < anchors.length; i++) {
        if (anchors[i].getAttribute("target") != "_blank") {
            anchors[i].onclick = (ev) => {
                ev.preventDefault();
                var href = ev.target.getAttribute("href");

                if (href === "#") return false;

                for (var i = 0; i < wallpaperIntersects.length; i++) {
                    var delay = Math.floor((Math.floor(Math.random() * 100)));
                    document.body.innerHTML +=
                        `
                    <div class="wallpaper-intersection" style="height: 0; animation-name: fade-up; width: calc(100% / ${wallpaperIntersects.length}); left: calc((100% / ${wallpaperIntersects.length}) * ${i}); animation-delay: ${delay}ms; animation-duration: .25s; top: ${window.scrollY}px;"></div>
                    `
                }

                setTimeout(() => { window.location.href = href; }, 400);

                return false;
            }
        }
    }
}
