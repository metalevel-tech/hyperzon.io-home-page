<?php
/**
 * References:
 *  - https://www.filamentgroup.com/lab/load-css-simpler/
 *  - https://css-tricks.com/how-to-load-fonts-in-a-way-that-fights-fout-and-makes-lighthouse-happy/
 *  - https://web.dev/fast/#lazy-load-images-and-video
 *  - https://web.dev/lazy-loading-video/
 * 
 */
// ResourceLoader::add(
//     $hook,
//     $resource,
//     $type = "default",
//     $options = "default",
//     $embed = false,
//     $active = true,
//     $priority = 99,
//     $route = [],
//     $kind = "auto"
// );

# Generate random number and invalidate some resources from here
$random = rand(1, 10000);
// $version = $random;
$version = 1111;

ResourceLoader::add( # Favicon.ico
    "head",
    "favicon.ico?v=$version",
    "image/x-icon",
    "rel=\"shortcut icon\"",
    true,
    false,
    1
);

ResourceLoader::add( # Normalize.css
    "head",
    "assets/css/dist/normalize.min.css?v=$version",
    "default",
    "rel=\"stylesheet\"",
    true,
    true,
    5
);

ResourceLoader::add( # Normalize-after.js
    "head",
    "assets/js/dist/normalize-after.min.js?v=$version",
    "default",
    "default",
    true,
    true,
    6
);

ResourceLoader::add( # Normalize-after.css
    "head",
    "assets/css/dist/normalize-after.min.css?v=$version",
    "default",
    "rel=\"stylesheet\"",
    true,
    true,
    7
);

ResourceLoader::add( # Google Fonts
    "head",
    "https://fonts.googleapis.com",
    "default",
    false,
    true,
    false,
    10
);
ResourceLoader::add( # Google Fonts
    "head",
    "https://fonts.gstatic.com",
    "default",
    "rel=\"preconnect\" crossorigin",
    true,
    false,
    11
);

ResourceLoader::add( # Google Fonts
    "head",
    "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
    "default",
    "rel=\"preload\" as=\"style\"",
    true,
    false,
    12
);
ResourceLoader::add( # Google Fonts
    "head",
    "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
    "default",
    "rel=\"stylesheet\" media=\"print\" onload=\"this.media='all'\"",
    true,
    false,
    13
);

ResourceLoader::add( # FontAwesome
    "head",
    "assets/vendor/fontawesome/css/hyperzon.selected.min.css?display=swap",
    "default",
    "rel=\"preload\" as=\"style\"",
    true,
    false,
    15
);
ResourceLoader::add( # FontAwesome
    "head",
    "assets/vendor/fontawesome/css/hyperzon.selected.min.css?display=swap",
    "default",
    "rel=\"stylesheet\" media=\"print\" onload=\"this.media='all'\"",
    true,
    false,
    16
);

ResourceLoader::add( # CSS for production
    "head",
    "assets/css/dist/style.min.css?v=$version",
    "default",
    "rel=\"stylesheet\"",
    true,
    true,
    20
);

ResourceLoader::add( # LESS for dev tests
    "head",
    "assets/css/src/style.less?v=$random#!watch",
    "default",
    "rel=\"stylesheet/less\"",
    false,
    false,
    25
);

ResourceLoader::add( # jQuery 
    "head",
    "assets/vendor/jquery.min.js",
    "default",
    "rel=\"preconnect\"",
    true,
    false,
    2
);

ResourceLoader::add( # jQuery.Easing 
    "head",
    "assets/vendor/jquery.easing.min.js",
    "default",
    "defer",
    true,
    false,
    36
);

ResourceLoader::add( # External Libraries @slick-carousel.css
    "head",
    "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
    "default",
    "rel=\"preload\" as=\"style\"",
    true,
    false,
    40,
);
ResourceLoader::add( # External Libraries @slick-carousel.css
    "head",
    "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
    "default",
    "rel=\"stylesheet\" media=\"print\" onload=\"this.media='all'\"",
    true,
    false,
    41,
);

ResourceLoader::add( # External Libraries @slick.css
    "head",
    "//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css?display=swap",
    "default",
    "rel=\"preload\" as=\"style\"",
    true,
    false,
    43,
);
ResourceLoader::add( # External Libraries @slick.css
    "head",
    "//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css?display=swap",
    "default",
    "rel=\"stylesheet\" media=\"print\" onload=\"this.media='all'\"",
    true,
    false,
    44,
);

ResourceLoader::add( # External Libraries @slick-carousel.js
    "head",
    "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
    "default",
    "defer",
    true,
    false,
    45,
);

ResourceLoader::add( # External Libraries @jQuery.matchHeight.js
    "head",
    "https://cdnjs.cloudflare.com/ajax/libs/jquery.matchHeight/0.7.2/jquery.matchHeight-min.js",
    "default",
    "crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" integrity=\"sha512-/bOVV1DV1AQXcypckRwsR9ThoCj7FqTV2/0Bm79bL3YSyLkVideFLE3MIZkq1u5t28ke1c0n31WYCOrO01dsUg==\" defer",
    true,
    false,
    46,
);

ResourceLoader::add( # External Libraries @anime.js (moved from Footer.php)
    "head",
    "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js",
    "default",
    "crossorigin=\"anonymous\" defer",
    true,
    false,
    47,
);

ResourceLoader::add( # JavaScript: main.js
    "head",
    // "assets/js/dist/main.min.js?v=$version",
    "assets/js/src/main.js?v=$version",
    "default",
    "defer",
    true,
    false,
    70,
);

ResourceLoader::add( # JavaScript: hero-counter.js
    "hero-after",
    "assets/js/dist/hero-counter.min.js?v=$version",
    "default",
    "defer",
    true,
    false,
    72,
);

ResourceLoader::add( # External Libraries @Calendly.css wigged (Book a Call)
    "body-bottom",
    "https://assets.calendly.com/assets/external/widget.css",
    "default",
    "rel=\"preload\" as=\"style\"",
    true,
    false,
    107,
);
ResourceLoader::add( # External Libraries @Calendly.css wigged (Book a Call)
    "body-bottom",
    "https://assets.calendly.com/assets/external/widget.css",
    "default",
    "rel=\"stylesheet\" media=\"print\" onload=\"this.media='all'\"",
    true,
    false,
    108,
);
ResourceLoader::add( # External Libraries @Calendly.js wigged (Book a Call)
    "body-bottom",
    "https://assets.calendly.com/assets/external/widget.js",
    "default",
    "async",
    true,
    false,
    109,
);

