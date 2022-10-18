/**
* Hyperzon.io main.js, miscellaneous functions
*/
// function closeInfoModal() {
//     $.featherlight.close();
// }
// function openCookiesModal() {
//     $.featherlight(base_url + "info/cookies");
// }
// function resizeWindow() {
//     $(".measure").css("height", window.innerHeight);
// }
// resizeWindow();
// $(window).on("resize", function () {
//     resizeWindow();
// });
// ---

/**
 * Hyperzon.io original content, functions.js
 */

function closeInfoModal() {
    $.featherlight.close();
}

function openCookiesModal() {
    $.featherlight(base_url + 'info/cookies');
}

/* Scroll To */
$('.js-scroll-to').on('click', function (e) {
    e.preventDefault();
    let aid = $(this).attr('data-scroll-to');
    let aid_pos = $(aid).offset().top - 50;

    let aid_time = Math.round(aid_pos / 3);

    $('html, body').animate({ scrollTop: aid_pos }, aid_time);
});

let mobile_menu_opened = 0;

$('.nav-trigger, .js-nav-close').on('click', function (e) {
    e.preventDefault();

    if (mobile_menu_opened == 0) {
        mobile_menu_opened = 1;
        $(this).addClass('nav-trigger--active');
        $('.menu__mobile').addClass('opened');
        $('.header').addClass('opened');
        $('.body-wrapper').hide();
    }
    else {
        mobile_menu_opened = 0;
        $(this).removeClass('nav-trigger--active');
        $('.menu__mobile').removeClass('opened');
        $('.header').removeClass('opened');
        $('.body-wrapper').show();
    }

    // 	$('.header').toggleClass('opened');
});

$('.menu-dropdown > a').on('click', function (e) {
    if (window.innerWidth < 768) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    }
});

/**
 * Hyperzon.io original content, Footer.php
 */
resizeWindow()

$(window).resize(function () {
    resizeWindow();
});

function resizeWindow() {
    $('.measure').css('height', window.innerHeight);
}


$('.js-book-a-call').on('click', function (e) {
    e.preventDefault();
    Calendly.initPopupWidget({
        url: 'https://calendly.com/hyperzon/30-minute-call-website?hide_gdpr_banner=1'
    });
    return false;
});

/*
$(window).load(function(){
    $('.blog__single__wrap').matchHeight();
})
*/

setTimeout(function () {
    $('.latest-blog-posts__grid').slick({
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

    $('.testimonials__slider').slick({
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
}, 500)

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

$(function () {
    lastScrollTop = 17;
    var $pageHeader = $('.header');

    $(window).on('scroll', function () {
        let st = $(this).scrollTop();

        if (st * 1 > lastScrollTop) {
            var vid = document.getElementById("video-backgr");
            vid.play();

            // console.log('true');
            if (!$pageHeader.hasClass('white')) {
                $pageHeader.addClass('white');
                // $('.nav-trigger-backgr').addClass('scrolling-down');
            }
        } else {
            if ($pageHeader.hasClass('white')) {
                $pageHeader.removeClass('white');
                // $('.nav-trigger-backgr').removeClass('scrolling-down');
            }
        }
        // lastScrollTop = st;
    });
});


resizeWindow()

$(window).resize(function () {
    resizeWindow();
});

function resizeWindow() {
    $('.measure').css('height', window.innerHeight);
}

/*
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height()/2;
    
    $('.logo').css({
        'opacity': ((height - scrollTop) / height)
    }); 
    
    $('.arrow-down').css({
        'opacity': ((30 - scrollTop) / 30)
    }); 
});
*/

$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({
        countNum: $this.text()
    }).animate({
        countNum: countTo
    },

        {

            duration: 3000,
            easing: 'easeOutCubic',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }

        });
});