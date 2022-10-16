<div class="gallery">
    <?php /* Galleri section */ ?>
    <div class="gallery__title style-03">
        Recent Projects
    </div>

    <div class="gallery__subtitle style-05 style-05--size-01">
        Product Videos
    </div>

    <div class="video-gallery grid-3-2-1-1">
        <?php
        $dir_covers =  "/public/gallery/videos/webp";
        $dir_videos =  "/public/gallery/videos/webm";
        $images = scandir(APP_ROOT . $dir_covers);

        foreach ($images as $image) {
            if (in_array($image, [".", ".."])) continue;

            $cover = "$dir_covers/$image";
            $video = "$dir_videos/" . str_replace(".webp", ".webm", $image);

            if (is_file(APP_ROOT . $cover) && is_file(APP_ROOT . $video)) {
                printf(
                    '<div class="item-wrapper">
                        <video class="video-item" preload="none" loop muted playsinline poster="%s" width="%u" height="%u">
                            <source src="%s" type="video/webm">
                        </video>
                    </div>',
                    $cover,
                    317,
                    178,
                    $video
                );
            }
        }
        ?>
    </div>

    <?php /* Galleri section */ ?>
    <div class="gallery__subtitle style-05 style-05--size-01">
        Motion Graphics
    </div>

    <div class="video-gallery grid-3-2-1-1">
        <?php
        $dir_covers = "/public/gallery/motion_graphics/webp";
        $dir_videos = "/public/gallery/motion_graphics/webm";
        $images = scandir(APP_ROOT . $dir_covers);

        foreach ($images as $image) {
            if (in_array($image, [".", ".."])) continue;

            $cover = "$dir_covers/$image";
            $video = "$dir_videos/" . str_replace(".webp", ".webm", $image);

            if (is_file(APP_ROOT . $cover) && is_file(APP_ROOT . $video)) {
                printf(
                    '<div class="item-wrapper">
                        <video class="video-item" preload="none" loop muted playsinline poster="%s" width="%u" height="%u">
                            <source src="%s" type="video/webm">
                        </video>
                    </div>',
                    $cover,
                    317,
                    178,
                    $video
                );
            }
        }
        ?>
    </div>

    <?php /* Galleri section */ ?>
    <div class="gallery__subtitle style-05 style-05--size-01">
        Photography
    </div>

    <div class="image-gallery grid-4-3-2-2">
        <?php
        $dir_thumb = "/public/gallery/photos/1x1/webp-thumb";
        $dir_big =   "/public/gallery/photos/1x1/webp-big";
        $images = scandir(APP_ROOT . $dir_thumb);

        foreach ($images as $image) {
            if (in_array($image, [".", ".."])) continue;

            $thumb = "$dir_thumb/$image";
            $big = "$dir_big/$image";

            if (is_file(APP_ROOT . $thumb) && is_file(APP_ROOT . $big)) {
                printf(
                    '<div class="item-wrapper">
                        <a class="image-item" href="%s" area-label="%s">
                            <img class="%s" width="%u" height="%u" loading="lazy" decoding="async" src="%s" alt="%s" />
                        </a>
                    </div>',
                    $big,
                    "Photography presentation HQ",
                    "zoom-rotate",
                    235,
                    225,
                    $thumb,
                    "Photography presentation"
                );
            }
        }
        ?>
    </div>
    <?php /* 
    // Tested Image galleries styles
    <div class="image-gallery grid-3-2-1-1">
        // ...
        <img width="235" height="225" /> @grid-4-3-2-2
        <img width="317" height="178" />
        <img width="330" height="186" /> @grid-3-2-1-1
    </div>
    */ ?>
</div>