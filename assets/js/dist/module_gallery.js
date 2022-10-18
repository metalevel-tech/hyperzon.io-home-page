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
      video.load();
      video.src = "";
      video.remove();
    } catch (error) {
      console.log(error);
    }
  });
  nodes.galleryButtonBack.removeEventListener("click", changeVideo);
  nodes.galleryButtonNext.removeEventListener("click", changeVideo);
  window.removeEventListener("resize", setHeight_16_9);

  // Clear images
  nodes.galleryOverlay.querySelectorAll("img").forEach(function (image) {
    try {
      image.src = "";
      image.remove();
    } catch (error) {
      console.log(error);
    }
  });
  nodes.galleryButtonBack.removeEventListener("click", changeImage);
  nodes.galleryButtonNext.removeEventListener("click", changeImage);

  // Clear additional classes from DOM
  document.body.classList.remove("no-scroll");
  nodes.galleryOverlay.classList.remove("active");
  nodes.galleryButtonClose.classList.remove("active");
  nodes.galleryButtonNext.classList.remove("active");
  nodes.galleryButtonBack.classList.remove("active");
}

// Function to change the image within the gallery overlay
function changeImage(currentGallery, forward = true) {
  const imagePreview = nodes.galleryContent.querySelector("img.image-preview");
  if (!imagePreview) return false;
  const newImage = forward ? currentGallery.findNext() : currentGallery.findBack();
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
function changeVideo(currentGallery, forward = true) {
  const videoPlayer = nodes.galleryContent.querySelector("video.video-preview");
  if (!videoPlayer) return false;
  const newVideo = forward ? currentGallery.findNext() : currentGallery.findBack();
  if (!newVideo) return false;
  currentGallery.current = newVideo;

  // videoPlayer.pause();
  videoPlayer.src = newVideo;
}

// Function to open the gallery overlay and prepare for image preview
function overlaySetUp_Image(image, currentGallery) {
  galleryOverlayClear();

  // actually this is the anchor <a> that holds link to the HQ image
  currentGallery.current = image.href;
  const imagePreview = document.createElement("img");
  imagePreview.setAttribute("class", "image-preview");
  imagePreview.setAttribute("src", currentGallery.current);

  // imageContainer.appendChild(imagePreview);
  nodes.galleryContent.appendChild(imagePreview);
}

// Function to open the gallery overlay and prepare for video preview
function overlaySetUp_Video(video, currentGallery) {
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
  videoPlayer.onended = e => {
    // playNext(currentGallery)
    changeVideo(currentGallery, true);
  };
  nodes.galleryContent.appendChild(videoPlayer);
  setTimeout(function () {
    setHeight_16_9(videoPlayer);
  }, 100);
  window.addEventListener("resize", setHeight_16_9.bind(this, videoPlayer));
}

// Function to automatically set video height, based on width * 9/16 @Scale/Transform
function setHeight_16_9(node) {
  if (!node) return false;
  node.style.height = `${Math.floor(node.offsetWidth * 9 / 16 + 2)}px`;
  // `+ n` px to compensate the border width
}

/**
 * Image (Photo) Gallery handler
 * Little bit ugly solution but it works for now.
 */
function imageGalleryHandler() {
  const imageGalleriesOnAPage = document.querySelectorAll(".image-gallery");
  if (!imageGalleriesOnAPage.length) return;
  imageGalleriesOnAPage.forEach(function (gallery) {
    const imageItemsList = [...gallery.querySelectorAll(".image-item")];
    const currentGallery = new galleryUrlArray(false, imageItemsList.map(item => item.href));

    // Close the gallery Button functionality
    nodes.galleryButtonClose.addEventListener("click", function (e) {
      galleryOverlayClear();
    });

    // Process each image in the gallery
    imageItemsList.forEach(image => {
      image.addEventListener("click", e => {
        e.preventDefault();
        galleryOverlayClear();
        const image = e.target;
        overlaySetUp_Image(image.closest(".image-item"), currentGallery);
        document.body.classList.add("no-scroll");
        nodes.galleryOverlay.classList.add("active");
        setTimeout(function () {
          nodes.galleryButtonClose.classList.add("active");
          nodes.galleryButtonNext.classList.add("active");
          nodes.galleryButtonBack.classList.add("active");
        }, 100);
        nodes.galleryButtonNext.addEventListener("click", changeImage.bind(this, currentGallery, true));
        nodes.galleryButtonBack.addEventListener("click", changeImage.bind(this, currentGallery, false));
      });
    });
  });
}

/**
 * Video Gallery handler
 * Little bit ugly solution but it works for now.
 */
function videoGalleryHandler() {
  const videoGalleriesOnAPage = document.querySelectorAll(".video-gallery");
  if (!videoGalleriesOnAPage.length) return;

  // Process each video gallery on the page
  videoGalleriesOnAPage.forEach(gallery => {
    const videoItemsList = [...gallery.querySelectorAll(".video-item")];
    const currentGallery = new galleryUrlArray(false, videoItemsList.map(item => item.querySelector("source").src));

    // Close the gallery Button functionality
    nodes.galleryButtonClose.addEventListener("click", function (e) {
      galleryOverlayClear();
    });

    // Process each video in the gallery
    videoItemsList.forEach(video => {
      video.addEventListener("mouseenter", function () {
        try {
          video.play();
        } catch (error) {
          console.log(error);
        }
      });
      video.addEventListener("mouseleave", function () {
        try {
          video.pause();
        } catch (error) {
          console.log(error);
        }
      });
      video.addEventListener("click", e => {
        e.preventDefault();
        galleryOverlayClear();
        const video = e.target;
        overlaySetUp_Video(video, currentGallery);
        document.body.classList.add("no-scroll");
        nodes.galleryOverlay.classList.add("active");
        setTimeout(function () {
          nodes.galleryButtonClose.classList.add("active");
          nodes.galleryButtonNext.classList.add("active");
          nodes.galleryButtonBack.classList.add("active");
        }, 100);
        nodes.galleryButtonNext.addEventListener("click", changeVideo.bind(this, currentGallery, true));
        nodes.galleryButtonBack.addEventListener("click", changeVideo.bind(this, currentGallery, false));
      });
    });
  });
}
export { imageGalleryHandler, videoGalleryHandler };