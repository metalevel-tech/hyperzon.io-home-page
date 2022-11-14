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
  get currentSrc() {
    if (this.current.nodeName === "IMG") return this.current.src;else if (this.current.nodeName === "A") return this.current.href;else if (this.current.nodeName === "VIDEO") return this.current.querySelector("source").src;
    return false;
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
    } catch (error) {
      console.log(error);
    }
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

// Gallery Close Button functionality
function galleryOverlayCloseButtonAddAction() {
  if (nodes.galleryButtonClose.handled) return;
  nodes.galleryButtonClose.handled = true;
  nodes.galleryButtonClose.addEventListener("click", galleryOverlayClear);
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") galleryOverlayClear();
  });
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
    galleryOverlayCloseButtonAddAction();
  }, 100);
}

// Disable window scrolling - currently two ways of disabling are applied:
// 1. The body class "no-scroll" is added, which disables scrolling via CSS, 
//    this class is used also by the mobile menu.
// 2. The window.onscroll event is disabled, which prevents the user from scrolling,
//    this could be safely removed.
// https://www.geeksforgeeks.org/how-to-disable-scrolling-temporarily-using-javascript/
// https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
function windowScroll(enabled = true) {
  if (enabled) {
    window.onscroll = () => {};
    document.body.classList.remove("no-scroll");
  } else {
    // Add specified class to body
    document.body.classList.add("no-scroll");

    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = e => {
      e.preventDefault();
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
}

// Function to change the image within the gallery overlay
function galleryChange_Image(currentGallery, forward = true) {
  const imagePreview = nodes.galleryContent.querySelector("img.image-preview");
  if (!imagePreview) return false;
  const newImage = forward ? currentGallery.findNext() : currentGallery.findBack();
  if (!newImage) return false;
  currentGallery.current = newImage;
  imagePreview.classList.add("static");
  setTimeout(function () {
    imagePreview.setAttribute("src", "");
    setTimeout(function () {
      imagePreview.setAttribute("src", currentGallery.currentSrc);
      imagePreview.classList.remove("static");
    }, 150);
  }, 150);
}

// Function to change the video within the gallery overlay
function galleryChange_Video(currentGallery, forward = true) {
  const videoPlayer = nodes.galleryContent.querySelector("video.video-preview");
  if (!videoPlayer) return false;
  const newVideo = forward ? currentGallery.findNext() : currentGallery.findBack();
  if (!newVideo) return false;
  currentGallery.current = newVideo;
  videoPlayer.src = currentGallery.currentSrc;
}

// Function to open the gallery overlay and prepare for image preview
function galleryOverlayCreate_Image(image, currentGallery) {
  galleryOverlayClear();
  currentGallery.current = image;
  const imagePreview = document.createElement("img");
  imagePreview.setAttribute("class", "image-preview");
  imagePreview.setAttribute("src", currentGallery.currentSrc);
  nodes.galleryContent.appendChild(imagePreview);
  overlayActivate();
  nodes.galleryButtonNext.addEventListener("click", galleryChange_Image.bind(this, currentGallery, true));
  nodes.galleryButtonBack.addEventListener("click", galleryChange_Image.bind(this, currentGallery, false));
}

// Function to open the gallery overlay and prepare for video preview
function galleryOverlayCreate_Video(video, currentGallery) {
  galleryOverlayClear();
  // galleryOverlayCloseButtonAddAction();

  currentGallery.current = video;
  const videoPlayer = document.createElement("video");
  const videoSource = document.createElement("source");
  videoPlayer.setAttribute("autoplay", "");
  videoPlayer.setAttribute("controls", "");
  videoPlayer.setAttribute("playsinline", "");
  videoPlayer.setAttribute("muted", "");
  videoPlayer.setAttribute("class", "video-preview");
  // videoPlayer.setAttribute("loop", "");  // auto change is not possible with loop

  videoPlayer.volume = 0.4;
  videoPlayer.setAttribute("src", currentGallery.currentSrc);
  videoSource.setAttribute("src", currentGallery.currentSrc);
  videoSource.setAttribute("type", "video/webm");
  videoPlayer.appendChild(videoSource);
  videoPlayer.onended = e => {
    galleryChange_Video(currentGallery, true);
  };
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
  node.style.height = `${Math.floor(node.offsetWidth * 9 / 16 + 2)}px`;
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

// Create the testimonials slider.
// Currently we are using the Slick library for this.
// But probably this function will be rewrote in the future,
// to use the native JS slider, because we use jQuery only for this.
function createTestimonialsSlider(wrapper) {
  $(wrapper).slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
}

// Set the chosen (from the slider) 
// Testimonial gallery item as active/current
// function setTestimonialAsActive(testimonial) {
// }

/**
 * Image (Photo) Gallery handler
 */
function galleryHandler_Images() {
  const imageGalleriesOnAPage = [...document.querySelectorAll(".image-gallery")];
  if (!imageGalleriesOnAPage.length) return;
  imageGalleriesOnAPage.forEach(function (gallery) {
    const imageItemsList = [...gallery.querySelectorAll(".image-item")];
    const currentGallery = new galleryUrlArray(false, imageItemsList);

    // galleryOverlayCloseButtonAddAction();

    // Process each image in the gallery
    currentGallery.list.forEach(image => {
      image.addEventListener("click", e => {
        e.preventDefault();
        galleryOverlayClear();
        const image = e.target;
        galleryOverlayCreate_Image(image.closest(".image-item"), currentGallery);
      });
    });
  });
}

/**
 * Image (Photo) Blog Post pages as Gallery handler
 */
function galleryHandler_PostPageImgs() {
  const postPageAsImageGallery = [...document.querySelectorAll(".single-post-content-section img")];
  if (!postPageAsImageGallery.length) return;
  const currentGallery = new galleryUrlArray(false, postPageAsImageGallery);

  // galleryOverlayCloseButtonAddAction();

  // Process each image in the gallery
  currentGallery.list.forEach(image => {
    image.style.cursor = "pointer";
    image.addEventListener("click", e => {
      e.preventDefault();
      galleryOverlayClear();
      const image = e.target;
      galleryOverlayCreate_Image(image, currentGallery);
    });
  });
}

/**
 * Video Gallery handler
 */
function galleryHandler_Videos() {
  const videoGalleriesOnAPage = [...document.querySelectorAll(".video-gallery")];
  if (!videoGalleriesOnAPage.length) return;

  // Process each video gallery on the page
  videoGalleriesOnAPage.forEach(gallery => {
    const videoItemsList = [...gallery.querySelectorAll(".video-item")];
    const currentGallery = new galleryUrlArray(false, videoItemsList);

    // galleryOverlayCloseButtonAddAction();

    // Process each video in the gallery
    currentGallery.list.forEach(video => {
      video.addEventListener("loadeddata", () => {
        if (video.loaded) return;
        video.loaded = true;
        if (video.loaded && video.paused) video.play();
      });
      video.addEventListener("mouseenter", () => {
        if (video.loaded && video.paused) video.play();else video.load();
      });
      video.addEventListener("mouseleave", () => {
        setTimeout(() => {
          if (video.loaded && !video.paused) video.pause();
        }, 500);
      });
      video.addEventListener("click", e => {
        e.preventDefault();
        galleryOverlayClear();
        const video = e.target;
        galleryOverlayCreate_Video(video, currentGallery);
      });
    });
  });
}

/**
 * Testimonials (Image and Video) Gallery handler
 */
function galleryHandler_Testimonials() {
  const testimonialsGalleriesOnAPage = [...document.querySelectorAll(".testimonials .testimonials__gallery")];
  if (!testimonialsGalleriesOnAPage.length) return;
  testimonialsGalleriesOnAPage.forEach(gallery => {
    // Create the slider
    const sliderWrapper = gallery.querySelector(".testimonials__slider__wrapper");
    createTestimonialsSlider(sliderWrapper);

    // Create array of gallery items - for the actual gallery with the large images an pulse button
    const galleryItems = [...gallery.querySelectorAll(".testimonials__gallery__item")];
    const currentGallery = new galleryUrlArray(false, galleryItems);

    // Create array of gallery items - for the slider with the thumb images
    const sliderItems = [...sliderWrapper.querySelectorAll(".testimonials__slider__item")];
    const currentSliderGallery = new galleryUrlArray(false, sliderItems);

    // Add the functionality to the slider items
    currentSliderGallery.list.forEach(sliderItem => {
      if (currentSliderGallery.current === false && sliderItem.classList.contains("selected") && sliderItem.classList.contains("slick-active")) {
        currentSliderGallery.current = sliderItem;
      }

      // Click on a slider item
      sliderItem.addEventListener("click", e => {
        e.preventDefault();
        if (e.currentTarget.classList.contains("selected")) return;

        /**
         * Process the slider items
         * 
         * Because the Slick slider logic the following is not enough for all cases:
         * > currentSliderGallery.current.classList.remove("selected"); // and later...
         * > currentSliderGallery.current.classList.add("selected");
         * 
         * !? There is a small visual bug which appears only when,
         *    the selected item contains the 'VETS.webp' image ?!
         */
        currentSliderGallery.list.forEach(item => {
          item.classList.remove("selected");
        });
        currentSliderGallery.current = e.currentTarget;

        // Process all slider items with the same Id as the selected one.
        currentSliderGallery.list.forEach(item => {
          if (item.dataset.id === currentSliderGallery.current.dataset.id) {
            item.classList.add("selected");
          }
        });

        /**
         * Process the actual gallery
         */
        // Hold the height of the testimonials gallery for a smooth transition
        gallery.style.height = gallery.offsetHeight + "px";

        // Change the selected/active item in the actual gallery
        currentGallery.list.forEach(item => {
          item.classList.remove("selected");
          item.classList.add("hidden");
        });
        currentGallery.current = currentGallery.list.find(item => item.dataset.id === currentSliderGallery.current.dataset.id);
        currentGallery.current.classList.remove("hidden");
        currentGallery.current.classList.add("selected");

        // Release the height of the testimonials gallery for better responsiveness
        gallery.style.height = "";
      });
    });

    // The actual gallery with the large images and pulse button functionality
    const currentVideoGallery = new galleryUrlArray(false, currentGallery.list.map(item => {
      const srcUrl = item.querySelector(".video-anchor").href;
      const video = document.createElement("video");
      const source = document.createElement("source");
      source.src = srcUrl;
      video.appendChild(source);
      video.setAttribute("src", srcUrl);
      return video;
    }));

    // galleryOverlayCloseButtonAddAction();

    currentGallery.list.forEach(videoItem => {
      videoItem.addEventListener("click", e => {
        e.preventDefault();
        galleryOverlayClear();
        const currentVideo = currentVideoGallery.list.find(item => item.src === e.currentTarget.querySelector(".video-anchor").href);
        galleryOverlayCreate_Video(currentVideo, currentVideoGallery);
      });
    });
  });
}
export { galleryHandler_Images, galleryHandler_PostPageImgs, galleryHandler_Videos, galleryHandler_Testimonials };