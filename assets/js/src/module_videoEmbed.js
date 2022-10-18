/**
 * @author    Spas Z. Spasov <spas.z.spasov@metalevel.tech>
 * @copyright 2022 Spas Z. Spasov
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GNU General Public License, version 3 (or later)
 * @home      https://wiki.metalevel.tech/wiki/Template:Media
 *
 * @refs      https://help.vimeo.com/hc/en-us/articles/360001494447-Using-Player-Parameters
 *            https://www.delftstack.com/howto/javascript/iframe-onload/
 *            https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 *            https://stackoverflow.com/questions/51689010/vimeo-iframe-play-pause-out-of-viewport
 *            https://poselab.com/en/blog/vimeo-javascript-player-api/
 */
import {
    isPartVisible,
    isFullyVisible
} from "./module_helpers.js";

function vimeoLoader() {
    const videoNodes = document.querySelectorAll(".video-container.vimeo-embed");

    // Define fadeout effect for the splash image
    const fadeOut = {
        "effect": [
            {
                opacity: "1",
                filter: "blur(1px)",
                transform: "scale(1.05)"
            },
            {
                opacity: "0",
                filter: "blur(100px)",
                transform: "scale(2)"
            }
        ],
        "timing": {
            duration: 1000,
            iterations: 1,
            fill: "forwards"
        }
    };

    // Process each video container on the page
    videoNodes.forEach(function (node) {
        const videoId = node.dataset.videoId;
        const videoTitle = node.dataset.videoTitle;
        const videoAppId = node.dataset.videoAppId;

        createVideoPlayer(node, videoId, videoTitle, videoAppId, 0);
    });

    function createVideoPlayer(node, videoId, videoTitle, videoAppId, autoplay = 1) {

        function embedVideo() {
            if (node.querySelector("iframe.video-embed-iframe")) {
                // While we do not save window state of the video container,
                // we never fall in this condition but it is good to have it.
                fadeoutSplashImage(50);
            } else {
                const iframe = generateIframe();
                node.appendChild(iframe);

                iframe.addEventListener("load", function () {
                    fadeoutSplashImage(350);
                });
            }

            // Remove the event listeners!
            document.removeEventListener("scroll", autoEmbedVideo);
            window.removeEventListener("resize", autoEmbedVideo);
            window.removeEventListener("orientationChange", autoEmbedVideo);
            node.removeEventListener("click", embedVideo);
        }

        function autoEmbedVideo() {
            if (isFullyVisible(node, 100)) embedVideo();
        }
        const splashImg = node.querySelector("img");

        function fadeoutSplashImage(timeout) {
            setTimeout(function () {
                // Apply fade out effect to the splash image
                splashImg
                    .animate(fadeOut.effect, fadeOut.timing)
                    .finished.then(animate => {
                        splashImg.remove();
                    })
                    .catch(error => { throw new Error(`Animate error: ${error}`); });
            }, timeout);
        }

        function generateIframe() {
            const iframe = document.createElement("iframe");

            iframe.className = "video-embed-iframe";
            iframe.setAttribute("badge", "0");
            iframe.setAttribute("autopause", "0");
            iframe.setAttribute("app_id", videoAppId);
            iframe.setAttribute("player_id", "0");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture"); // iFrame.setAttribute("allowfullscreen", "");
            iframe.setAttribute("mozallowfullscreen", "");
            iframe.setAttribute("webkitallowfullscreen", "");
            iframe.setAttribute("scrolling", "no");
            iframe.setAttribute("src", `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay}&portrait=0&title=0&pip=1&byline=0&title=0`);
            iframe.setAttribute("allow", "autoplay");
            iframe.setAttribute("title", videoTitle);

            return iframe;
        }

        document.addEventListener("scroll", autoEmbedVideo);
        window.addEventListener("resize", autoEmbedVideo);
        window.addEventListener("orientationChange", autoEmbedVideo);
        autoEmbedVideo(); // in cast it is already on the viewport
        node.addEventListener("click", embedVideo);
    }
}

export { vimeoLoader };