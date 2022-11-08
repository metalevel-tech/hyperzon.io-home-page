/**
 * Gallery Handler scripts begin
 */

const nodes = {
    galleryOverlay: document.getElementById("gallery-preview-overlay"),
    galleryContent: document.getElementById("gallery-preview-overlay").querySelector(".gallery-preview-content"),
    galleryButtonClose: document.getElementById("gallery-preview-overlay").querySelector(".button-3x"),
    galleryButtonNext: document.getElementById("gallery-preview-overlay").querySelector(".gallery-preview-next"),
    galleryButtonBack: document.getElementById("gallery-preview-overlay").querySelector(".gallery-preview-back")
};

// const isSafari = window.safari !== undefined;

// Gallery accumulator class, used by the gallery handlers below
// The following functions could be methods of this class
class galleryUrlArray {
    constructor(current = false, list = []) {
        this.current = current;
        this.list = list;
    }
    findNext() {
        const index = this.list.indexOf(this.current);
        if (index === -1) return false;
        return this.list[index + 1] || this.list[0];
    }
    findBack() {
        const index = this.list.indexOf(this.current);
        if (index === -1) return false;
        return this.list[index - 1] || this.list[this.list.length - 1];
    }
}

// Function to clear the gallery overlay
function galleryOverlayClear() {
    // Clear videos
    nodes.galleryOverlay.querySelectorAll("video").forEach(function (video) {
        try {
            video.pause();
            video.load()
            video.src = "";
            video.remove();
        } catch (error) { console.log(error) }
    });
    nodes.galleryButtonBack.removeEventListener("click", galleryChange_Video);
    nodes.galleryButtonNext.removeEventListener("click", galleryChange_Video);
    window.removeEventListener("resize", calcHeightOnDeviceTilt);
    window.removeEventListener("orientationChange", calcHeightOnDeviceTilt);
    // document.removeEventListener("scroll", calcHeightOnDeviceTilt);

    // Clear images
    nodes.galleryOverlay.querySelectorAll("img").forEach(function (image) {
        try {
            image.src = "";
            image.remove();
        } catch (error) { console.log(error) }
    });
    nodes.galleryButtonBack.removeEventListener("click", galleryChange_Image);
    nodes.galleryButtonNext.removeEventListener("click", galleryChange_Image);

    // Clear additional classes from DOM
    windowScroll(true); // Enable scrolling
    nodes.galleryOverlay.classList.remove("active");
    nodes.galleryButtonClose.classList.remove("active");
    nodes.galleryButtonNext.classList.remove("active");
    nodes.galleryButtonBack.classList.remove("active");
}

// https://www.geeksforgeeks.org/how-to-disable-scrolling-temporarily-using-javascript/
function windowScroll(enabled = true) {
    if (enabled) {
        window.onscroll = () => { };
        document.body.classList.remove("no-scroll");
    } else {
        // Add specified class to body
        document.body.classList.add("no-scroll");

        // Get the current page scroll position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = (e) => {
            e.preventDefault();
            window.scrollTo(scrollLeft, scrollTop);
        };
    }
}


// var winX = null;
// var winY = null;

// window.addEventListener('scroll', function () {
//     if (winX !== null && winY !== null) {
//         window.scrollTo(winX, winY);
//     }
// });

// function disableScroll() {
//     winX = window.scrollX;
//     winY = window.scrollY;
// }

// function windowScroll(false) {
//     winX = null;
//     winY = null;
// }

// Function to change the image within the gallery overlay
function galleryChange_Image(currentGallery, forward = true) {
    const imagePreview = nodes.galleryContent.querySelector("img.image-preview");
    if (!imagePreview) return false;

    const newImage = (forward) ? currentGallery.findNext() : currentGallery.findBack();
    if (!newImage) return false;

    currentGallery.current = newImage;

    imagePreview.classList.add("static");

    setTimeout(function () {
        imagePreview.setAttribute("src", "");
        setTimeout(function () {
            imagePreview.setAttribute("src", newImage);
            imagePreview.classList.remove("static");
        }, 150);
    }, 150);
}

// Function to change the video within the gallery overlay
function galleryChange_Video(currentGallery, forward = true) {
    const videoPlayer = nodes.galleryContent.querySelector("video.video-preview");
    if (!videoPlayer) return false;

    const newVideo = (forward) ? currentGallery.findNext() : currentGallery.findBack();
    if (!newVideo) return false;

    currentGallery.current = newVideo;

    // videoPlayer.pause();
    videoPlayer.src = newVideo;
}

// Function to activate the overlay
function overlayActivate() {

    // Show the overlay and disable scrolling
    windowScroll(false);
    nodes.galleryOverlay.classList.add("active");

    setTimeout(function () {
        nodes.galleryButtonClose.classList.add("active");
        nodes.galleryButtonNext.classList.add("active");
        nodes.galleryButtonBack.classList.add("active");
    }, 100);
}

// Function to open the gallery overlay and prepare for image preview
function galleryOverlayCreate_Image(image, currentGallery) {
    galleryOverlayClear();

    if (image.nodeName === "IMG") {
        // The case when the HQ image is already loaded on the page,
        // as it is the case with the blog post pages
        currentGallery.current = image.src;
    } else if (image.nodeName === "A") {
        // The case when the image is wrapped by anchor
        // <a> that holds link to the HQ image
        currentGallery.current = image.href;
    } else {
        return false;
    }

    const imagePreview = document.createElement("img");
    imagePreview.setAttribute("class", "image-preview");
    imagePreview.setAttribute("src", currentGallery.current);

    // if (isSafari) {
    //     imagePreview.classList.add("browser-safari");
    // } else {
    //     imagePreview.classList.add("browser-not-safari");
    // }

    nodes.galleryContent.appendChild(imagePreview);

    overlayActivate();

    nodes.galleryButtonNext.addEventListener("click", galleryChange_Image.bind(this, currentGallery, true));
    nodes.galleryButtonBack.addEventListener("click", galleryChange_Image.bind(this, currentGallery, false));
}

// Function to open the gallery overlay and prepare for video preview
function galleryOverlayCreate_Video(video, currentGallery) {
    galleryOverlayClear();

    currentGallery.current = video.querySelector("source").src;

    const videoPlayer = document.createElement("video");
    videoPlayer.setAttribute("autoplay", "");
    videoPlayer.setAttribute("controls", "");
    videoPlayer.setAttribute("playsinline", "");
    videoPlayer.setAttribute("muted", "");
    videoPlayer.setAttribute("class", "video-preview");
    // videoPlayer.setAttribute("loop", "");  // auto change is not possible with loop

    videoPlayer.volume = 0.4;
    videoPlayer.setAttribute("src", currentGallery.current);

    videoPlayer.onended = (e) => {
        galleryChange_Video(currentGallery, true);
    };

    // if (isSafari) {
    //     videoPlayer.classList.add("browser-safari");
    // } else {
    //     videoPlayer.classList.add("browser-not-safari");
    // }

    nodes.galleryContent.appendChild(videoPlayer);

    setTimeout(function () {
        calcHeightOnDeviceTilt(videoPlayer);
    }, 100);
    window.addEventListener("resize", calcHeightOnDeviceTilt.bind(this, videoPlayer));
    window.addEventListener("orientationChange", calcHeightOnDeviceTilt.bind(this, videoPlayer));

    overlayActivate();

    nodes.galleryButtonNext.addEventListener("click", galleryChange_Video.bind(this, currentGallery, true));
    nodes.galleryButtonBack.addEventListener("click", galleryChange_Video.bind(this, currentGallery, false));
}

// Function to automatically set video height, based on width * 9/16 @Scale/Transform
// This function is not longer used, because the ratio is set in CSS...
// It was triggered in the same way as the function calcHeightOnDeviceTilt() below.
function setHeight_16_9(node) {
    if (!node) return false; // `+ n` px to compensate the border width
    node.style.height = `${Math.floor((node.offsetWidth * 9 / 16) + 2)}px`;
}

function calcHeightOnDeviceTilt(node) {
    if (!node) return false;

    // Wait a while for styles to be applied
    setTimeout(function () {
        const minHeight = window.innerHeight - 90;

        if (minHeight <= node.offsetHeight) {
            node.style.height = `${Math.floor(minHeight + 2)}px`;
            node.style.width = `${Math.floor(minHeight * 16 / 9)}px`;
        } else {
            setTimeout(() => {
                node.style.height = "";
                node.style.width = "";
            }, 200);
        }
    }, 100);
}

/**
 * Image (Photo) Gallery handler
 * Little bit ugly solution but it works for now.
 */
function galleryHandler_Images() {
    const imageGalleriesOnAPage = document.querySelectorAll(".image-gallery");
    if (!imageGalleriesOnAPage.length) return;

    imageGalleriesOnAPage.forEach(function (gallery) {
        const imageItemsList = [...gallery.querySelectorAll(".image-item")];
        const currentGallery = new galleryUrlArray(
            false,
            imageItemsList.map(item => item.href)
        );

        // Close gallery Button functionality
        nodes.galleryButtonClose.addEventListener("click", galleryOverlayClear);
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") galleryOverlayClear();

        });

        // Process each image in the gallery
        imageItemsList.forEach((image) => {
            image.addEventListener("click", (e) => {
                e.preventDefault();
                galleryOverlayClear();

                const image = e.target;
                galleryOverlayCreate_Image(image.closest(".image-item"), currentGallery);
            });
        });
    });
}

/**
 * Image (Photo) Blog Post page as Gallery handler
 * Little bit ugly solution but it works for now.
 */
function galleryHandler_PostPageImgs() {
    const postPageAsImageGallery = [...document.querySelectorAll(".single-post-content-section img")];
    if (!postPageAsImageGallery.length) return;

    const currentGallery = new galleryUrlArray(
        false,
        postPageAsImageGallery.map(item => item.src)
    );

    // Close gallery Button functionality
    nodes.galleryButtonClose.addEventListener("click", galleryOverlayClear);
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") galleryOverlayClear();

    });

    // Process each image in the gallery
    postPageAsImageGallery.forEach((image) => {
        image.style.cursor = "pointer";

        image.addEventListener("click", (e) => {
            e.preventDefault();
            galleryOverlayClear();

            const image = e.target;
            galleryOverlayCreate_Image(image, currentGallery);
        });
    });
}

/**
 * Video Gallery handler
 * Little bit ugly solution but it works for now.
 */
function galleryHandler_Videos() {
    const videoGalleriesOnAPage = document.querySelectorAll(".video-gallery");
    if (!videoGalleriesOnAPage.length) return;

    // Process each video gallery on the page
    videoGalleriesOnAPage.forEach((gallery) => {
        const videoItemsList = [...gallery.querySelectorAll(".video-item")];
        const currentGallery = new galleryUrlArray(
            false,
            videoItemsList.map(item => item.querySelector("source").src)
        );

        // Close gallery Button functionality
        nodes.galleryButtonClose.addEventListener("click", galleryOverlayClear);
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") galleryOverlayClear();

        });

        // Process each video in the gallery
        videoItemsList.forEach((video) => {
            video.addEventListener("loadeddata", () => {
                if (video.loaded) return;
                video.loaded = true;
                if (video.loaded && video.paused) video.play();
            });

            video.addEventListener("mouseenter", () => {
                if (video.loaded && video.paused) video.play();
                else video.load();
            });

            video.addEventListener("mouseleave", () => {
                setTimeout(() => {
                    if (video.loaded && !video.paused) video.pause();
                }, 500);
            });

            video.addEventListener("click", (e) => {
                e.preventDefault();
                galleryOverlayClear();

                const video = e.target;
                galleryOverlayCreate_Video(video, currentGallery);
            });
        });
    });
}

export {
    galleryHandler_Images,
    galleryHandler_PostPageImgs,
    galleryHandler_Videos
};