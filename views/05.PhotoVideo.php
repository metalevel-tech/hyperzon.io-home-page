<?php /*
<link href="//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.min.css" type="text/css" rel="stylesheet" />
<link href="//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.gallery.min.css" type="text/css" rel="stylesheet" /> 
*/ ?>

<div class="backgr-blue-svg backgr-blue-svg--01 section-home-01">
    <div class="backgr-blue-svg__content">
        <?php
        Req::include("AsSeenOnWhite");
        VideoPlayer::vimeo("721341981?h=0a6cc70c66", "Hyperzon Showreel - Design work");
        ?>
    </div>
</div>

<div class="backgr-white-svg text-dark">
    <div class="backgr-white-svg__content section-home-02 section-home-02--white">
        <div class="wrapper-1366">

            <?php
            Req::include("SloganYouImagineWeCreate");
            Req::include("BulletsPhotoVideo");
            Req::include("GalleryPhotoVideo");
            ?>

        </div>

        <?php
        Req::include("BookACallGreen");
        ?>

        <br /><br /><br /><br /><br />

        <!-- The wrapper intentionally is not inside the module -->
        <div class="wrapper-1366 brands-on-right-gray">
            <?php
            Req::include("BrandsWeBoosted");
            ?>
        </div>

        <br /><br /><br /><br /><br />
    </div>
</div>

<?php /*
<div class="backgr-white backgr-white--default">
    <div class="backgr-white__content section-gallery-01">
    </div>
</div>
*/ ?>

<script>
    $('.gallery__videos-item__wrapper').hover(function() {
        $(this).find('video').get(0).play();
    }, function() {
        setTimeout(function() {
            if ($(this).find('video').get(0)) {
                $(this).find('video').get(0).pause();
                $(this).find('video').get(0).currentTime = 0;
            }
        }, 100);
    })
</script>

<?php /* 
<script src="//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.min.js" type="text/javascript" charset="utf-8"></script>
<script src="//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.gallery.min.js" type="text/javascript" charset="utf-8"></script>
*/ ?>