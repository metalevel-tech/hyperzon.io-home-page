/**
 *  Helper function to convert href of menu item to body class
 */
function hrefToClass(anchor) {
  return anchor.getAttribute("href").replace(/^\/|\/$/g, "");
}
/**
 * Detect does an element is visible
 * Ref: https://stackoverflow.com/a/125106/6543935
 * @param {*} node
 * @returns boolean
 */


function isPartVisible(node) {
  let top = node.offsetTop;
  let left = node.offsetLeft;
  let width = node.offsetWidth;
  let height = node.offsetHeight;

  while (node.offsetParent) {
    node = node.offsetParent;
    top += node.offsetTop;
    left += node.offsetLeft;
  }

  return top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset;
}

function isFullyVisible(node, verticalAdjustment = 0) {
  let top = node.offsetTop;
  let left = node.offsetLeft;
  let width = node.offsetWidth;
  let height = node.offsetHeight;

  while (node.offsetParent) {
    node = node.offsetParent;
    top += node.offsetTop;
    left += node.offsetLeft;
  }

  return top >= window.pageYOffset && left >= window.pageXOffset && top + height <= window.pageYOffset + window.innerHeight + verticalAdjustment && left + width <= window.pageXOffset + window.innerWidth;
}
/**
 * Site header - Hero Counter - Hook "hero"
 *  @ Resources.php
 *  @ includes/Hero.php
 */


function heroCounter() {
  $(".counter").each(function () {
    const counter = $(this);
    const countTo = counter.attr("data-count");
    $({
      countNum: counter.text()
    }).animate({
      countNum: countTo
    }, {
      duration: 3000,
      easing: "easeOutCubic",
      step: function () {
        counter.text(Math.floor(this.countNum));
      },
      complete: function () {
        counter.text(this.countNum); //alert("finished");
      }
    });
  });
}
/**
 * Book a call button handler
 */


function bookACallHandler() {
  document.querySelectorAll(".js-book-a-call").forEach(function (button) {
    // If has class "book-a-call--activated" then it's already activated
    if (button.classList.contains("book-a-call--activated")) return;
    button.addEventListener("click", function (e) {
      e.preventDefault();
      Calendly.initPopupWidget({
        url: "https://calendly.com/hyperzon/30-minute-call-website?hide_gdpr_banner=1"
      });
    });
    button.classList.add("book-a-call--activated");
  });
}
/**
 * Fix it and removes the PageSpeed Insight warning,
 * "Does not use passive listeners to improve scrolling performance" @jquery
 * Refs: https://stackoverflow.com/a/62177358/6543935
 */


function jQueryRemovePassiveListeners() {
  jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
      this.addEventListener("touchstart", handle, {
        passive: !ns.includes("noPreventDefault")
      });
    }
  };
  jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
      this.addEventListener("touchmove", handle, {
        passive: !ns.includes("noPreventDefault")
      });
    }
  };
  jQuery.event.special.wheel = {
    setup: function (_, ns, handle) {
      this.addEventListener("wheel", handle, {
        passive: true
      });
    }
  };
  jQuery.event.special.mousewheel = {
    setup: function (_, ns, handle) {
      this.addEventListener("mousewheel", handle, {
        passive: true
      });
    }
  };
}
/**
 * @ includes/Testimonials.php
 */


function testimonialsSlider() {
  setTimeout(function () {
    try {
      $(".testimonials__slider").slick({
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
    } catch (error) {}
  }, 50);
}
/**
 * @ includes/BlogPostsLatest.php
 */


function latestBlogPostsSlider() {
  setTimeout(function () {
    $(".latest-blog-posts__grid").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true,
          centerMode: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }]
    });
    $(".blog__single").on("mouseenter", function (e) {
      let clip_path_id = $(this).attr("data-clip");
      $(this).addClass("active");
      let morphing = anime({
        targets: "#svgPath-" + clip_path_id + " path",
        d: [{
          value: "M 1.021 0.979 c 0.204 0.012 -0.031 -0.548 0.027 -0.623 c 0.056 -0.177 0.012 -0.201 0.015 -0.291 c -0.06 -0.182 -0.097 -0.179 -0.631 -0.175 C 0.255 -0.124 -0.06 -0.186 -0.113 -0.072 C -0.153 0.012 -0.201 0.955 -0.08 0.97 s 0.437 -0.015 0.784 -0 Z"
        }],
        duration: 2000,
        easing: "easeInOutSine",
        loop: false
      });
    });
    $(".blog__single").on("mouseleave", function (e) {
      let clip_path_id = $(this).attr("data-clip");
      $(this).addClass("active");
      let morphing = anime({
        targets: "#svgPath-" + clip_path_id + " path",
        d: [{
          value: "M 0.784 0.987 c 0.254 -0.009 0.274 -0.441 0.266 -0.578 c 0.092 -0.073 0.05 -0.052 0.017 -0.153 c -0.06 -0.182 -0.187 -0.155 -0.336 -0.231 C 0.464 -0.048 0.274 0.091 0.198 0.217 C -0.002 0.49 0.047 0.897 0.227 0.963 s 0.288 0.003 0.416 0.014 Z"
        }],
        duration: 2000,
        easing: "easeInOutSine",
        loop: false
      });
    });
  }, 50);
}

export { bookACallHandler, testimonialsSlider, latestBlogPostsSlider, hrefToClass, isPartVisible, isFullyVisible, jQueryRemovePassiveListeners, heroCounter };