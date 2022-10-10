/**
 * Fix it and removes the PageSpeed Insight warning,
 * "Does not use passive listeners to improve scrolling performance" @jquery
 * Refs: https://stackoverflow.com/a/62177358/6543935
 */ 
jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.touchmove = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.wheel = {
    setup: function( _, ns, handle ){
        this.addEventListener("wheel", handle, { passive: true });
    }
};
jQuery.event.special.mousewheel = {
    setup: function( _, ns, handle ){
        this.addEventListener("mousewheel", handle, { passive: true });
    }
};

/**
 * Hyperzon.io main.js, miscellaneous functions
 */

function closeInfoModal() {
    $.featherlight.close();
}

function openCookiesModal() {
    $.featherlight(base_url + 'info/cookies');
}

function resizeWindow() {
    $('.measure').css('height', window.innerHeight);
}

resizeWindow();

$(window).on("resize", function () {
    resizeWindow();
});


/**
 * Book a call button handler
 */
(function () {
    document.querySelectorAll(".js-book-a-call").forEach(function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            Calendly.initPopupWidget({
                url: 'https://calendly.com/hyperzon/30-minute-call-website?hide_gdpr_banner=1'
            });
        });
    });
})();

/**
 * Hyperzon on-scroll-menu handler
 */
(function () {
    lastScrollTop = 17;
    var $pageHeader = $(".main-menu");

    $(window).on("scroll", function () {
        let st = $(this).scrollTop();

        if (st * 1 > lastScrollTop) {
            var vid = document.getElementById("video-backgr");
            vid.play();

            // console.log("true");
            if (!$pageHeader.hasClass("white")) {
                $pageHeader.addClass("white");
                // $(".nav-trigger-backgr").addClass("scrolling-down");
            }
        } else {
            if ($pageHeader.hasClass("white")) {
                $pageHeader.removeClass("white");
                // $(".nav-trigger-backgr").removeClass("scrolling-down");
            }
        }
        // lastScrollTop = st;
    });
})();

/**
 * Hyperzon mobile-menu handler
 */
(function () {
    let mobile_menu_opened = 0;

    $(".nav-trigger, .js-nav-close").on("click", function (e) {
        e.preventDefault();

        if (mobile_menu_opened == 0) {
            mobile_menu_opened = 1;
            $(this).addClass("nav-trigger--active");
            $(".menu__mobile").addClass("opened");
            $(".main-menu").addClass("opened");
            $(".body-wrapper").hide();
        } else {
            mobile_menu_opened = 0;
            $(this).removeClass("nav-trigger--active");
            $(".menu__mobile").removeClass("opened");
            $(".main-menu").removeClass("opened");
            $(".body-wrapper").show();
        }
        // $(".main-menu").toggleClass("opened");
    });
})();

/**
 * This is the AJAX script for the main menu.
 * It replaces the content of <div id="body-content">,
 * without page reload.
 */
(function () {
    const nodes = {
        content: document.getElementById("body-content"),
        mainMenu: document.getElementById("main-menu"),
        menuItems: document.querySelectorAll("a.main-menu-item")
    };

    const bodyClasses = [];

    function hrefToClass(element) {
        return element.getAttribute("href").replace(/^\/|\/$/g, "");
    }

    // These functions are defined in the code below, 
    // but we need run them much times them together,
    // especially when manipulating the menu 
    // and the browser's states.
    function runHoistedFunctions() {
        testimonialsSlider();
        latestBlogPostsSlider();
        videoLoader();
        videoGalleryHandler();
    }

    // Process single menu element
    const changeMenuElement = async (e) => {
        e.preventDefault();
        // const item = e.currentTarget.parentNode.querySelector("a");
        const item = e.currentTarget;

        // console.log(item);

        // Close the mobile menu
        const closeButton = document.querySelector(".nav-trigger.nav-trigger--active");
        if (closeButton) {
            closeButton.click();
        }

        // Break if it is the current selected item
        if (item.classList.contains("selected-item")) {
            return;
        }

        // Scroll to the beginning of the view or to the top of the page
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
        const scrollFromTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollFromTop > 480) {
            nodes.content.scrollIntoView({ behavior: "auto" });
        } else {
            window.scrollTo({ top: 0 });
        }

        // The actual change of the page content
        try {
            // Fetch the page content
            const response = await fetch(`${item.href}?content`);
            if (!response.ok) throw new Error(`Network error: ${response}`);
            const html = await response.text();

            // Change the <div id="body-content"> content
            nodes.content.innerHTML = html;

            // Change the relevant body class
            let bodyClassList = [...document.body.classList];

            //  https://stackoverflow.com/a/33121880/6543935
            for (const bodyClass of [...new Set(bodyClasses)]) {
                bodyClassList = bodyClassList.filter(value => bodyClass != value);
            }

            bodyClassList.push(hrefToClass(item));
            bodyClassList = bodyClassList.join(" ").replace(/index.php\s*/, "");
            document.body.className = bodyClassList;

            // Find the "current active" menu item and remove the class
            nodes.menuItems.forEach((node) => {
                node.classList.remove("selected-item");
                if (node.href === item.href) {
                    node.classList.add("selected-item");
                }
            });

            // Run the sliders scripts,
            // see the function definitions below
            runHoistedFunctions();

            // Change the URI
            window.history.pushState({
                "html": html,
                "pageTitle": document.title,
                "bodyClassList": bodyClassList,
                "mainMenu": nodes.mainMenu.innerHTML
            }, "", item.href);

            // detect the back/forward button navigation
            window.onpopstate = function (e) {
                if (e.state) {
                    nodes.content.innerHTML = e.state.html;
                    nodes.mainMenu.innerHTML = e.state.mainMenu;
                    document.title = e.state.pageTitle;
                    document.body.className = e.state.bodyClassList;
                    runHoistedFunctions();
                }
            };
        }
        catch (error) {
            console.error(`Error in the main menu function: ${error.message}`);
        }
    }

    // Process the menu elements
    nodes.menuItems.forEach(item => {
        // console.log(item);
        bodyClasses.push(hrefToClass(item));
        item.addEventListener("click", changeMenuElement);
    });

    // Trigger the initial page state
    window.addEventListener("load", function () {
        // Handle the case when URI is index.php -> home
        setTimeout(function () {
            if ([...document.body.classList].indexOf("index.php") > -1) {
                // nodes.homeButton.click();
                document.body.classList.replace("index.php", "home");

                document.querySelector(".main-menu__logo a.main-menu-item")
                    .classList.add("selected-item");

                // Change the URI
                window.history.pushState("", "", "home");

                // detect the back/forward button navigation
                window.onpopstate = function (e) {
                    if (e.state) {
                        nodes.content.innerHTML = e.state.html;
                        document.title = e.state.pageTitle;
                    }
                };
            }
        }, 100);

        runHoistedFunctions();
    });

    /**
     * @ includes/Testimonials.php
     */
    function testimonialsSlider() {
        setTimeout(function () {
            $('.testimonials__slider').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }
                ]
            });
        }, 50);
    }

    /**
     * @ includes/BlogPostsLatest.php
     */
    function latestBlogPostsSlider() {
        setTimeout(function () {
            $('.latest-blog-posts__grid').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            infinite: true,
                            centerMode: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            centerMode: false
                        }
                    }
                ]
            });

            $('.blog__single').on('mouseenter', function (e) {
                let clip_path_id = $(this).attr('data-clip');

                $(this).addClass('active');

                let morphing = anime({
                    targets: '#svgPath-' + clip_path_id + ' path',
                    d: [{
                        value: 'M 1.021 0.979 c 0.204 0.012 -0.031 -0.548 0.027 -0.623 c 0.056 -0.177 0.012 -0.201 0.015 -0.291 c -0.06 -0.182 -0.097 -0.179 -0.631 -0.175 C 0.255 -0.124 -0.06 -0.186 -0.113 -0.072 C -0.153 0.012 -0.201 0.955 -0.08 0.97 s 0.437 -0.015 0.784 -0 Z'
                    }],
                    duration: 2000,
                    easing: 'easeInOutSine',
                    loop: false
                });
            });

            $('.blog__single').on('mouseleave', function (e) {
                let clip_path_id = $(this).attr('data-clip');

                $(this).addClass('active');

                let morphing = anime({
                    targets: '#svgPath-' + clip_path_id + ' path',
                    d: [{
                        value: 'M 0.784 0.987 c 0.254 -0.009 0.274 -0.441 0.266 -0.578 c 0.092 -0.073 0.05 -0.052 0.017 -0.153 c -0.06 -0.182 -0.187 -0.155 -0.336 -0.231 C 0.464 -0.048 0.274 0.091 0.198 0.217 C -0.002 0.49 0.047 0.897 0.227 0.963 s 0.288 0.003 0.416 0.014 Z'
                    }],
                    duration: 2000,
                    easing: 'easeInOutSine',
                    loop: false
                });
            });
        }, 50);
    }

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
    function videoLoader() {
        const videoNodes = document.querySelectorAll('.video-container.vimeo-embed');

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
                if (node.querySelector('iframe.video-embed-iframe')) {
                    // While we do not save window state of the video container,
                    // we never fall in this condition but it is good to have it.
                    fadeoutSplashImage(50);
                } else {
                    const iframe = generateIframe();
                    node.appendChild(iframe);

                    iframe.addEventListener('load', function () {
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

            function fadeoutSplashImage(timeout) {
                setTimeout(function () {
                    // Apply fade out effect to the splash image
                    const splashImg = node.querySelector('img');
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

                iframe.className = 'video-embed-iframe';
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

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
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

        return (
            top >= window.pageYOffset &&
            left >= window.pageXOffset &&
            (top + height) <= (window.pageYOffset + window.innerHeight + verticalAdjustment) &&
            (left + width) <= (window.pageXOffset + window.innerWidth)
        );
    }

    /**
     * Photos & Videos, Video Gallery handler
     */
    function videoGalleryHandler() {
        $('.gallery__videos-item__wrapper').hover(function() {
            $(this).find('video').get(0).play();
        }, function() {
            setTimeout(function() {
                if ($(this).find('video').get(0)) {
                    $(this).find('video').get(0).pause();
                    $(this).find('video').get(0).currentTime = 0;
                }
            }, 100);
        });
    }
})();