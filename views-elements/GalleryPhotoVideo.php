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

        foreach ($images as $index => $image) {
            if (in_array($image, [".", ".."])) {
                unset($images[$index]);
            } else {
                $images[$index] = [
                    "$dir_videos/" . str_replace(".webp", ".webm", $image),
                    "$dir_covers/" . $image,
                    //  $vimeo[str_replace(".png", "", $image)]
                ];
            }
        }
        ?>

        <?php foreach ($images as $image) : ?>
            <div class="item-wrapper">
                <video class="video-item" preload="none" loop muted playsinline poster="<?php echo $image[1] ?>" width="317" height="178">
                    <source src="<?php echo $image[0] ?>" type="video/webm">
                </video>
            </div>
        <?php endforeach; ?>
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

        foreach ($images as $index => $image) {
            if (in_array($image, [".", ".."])) {
                unset($images[$index]);
            } else {
                $images[$index] = [
                    "$dir_videos/" . str_replace(".webp", ".webm", $image),
                    "$dir_covers/" . $image,
                    //  $vimeo[str_replace(".png", "", $image)]
                ];
            }
        }
        ?>

        <?php foreach ($images as $image) : ?>
            <div class="item-wrapper">
                <video class="video-item" preload="none" loop muted playsinline poster="<?php echo $image[1] ?>" width="317" height="178">
                    <source src="<?php echo $image[0] ?>" type="video/webm">
                </video>
            </div>
        <?php endforeach; ?>
    </div>

    <?php /* Galleri section */ ?>
    <div class="gallery__subtitle style-05 style-05--size-01">
        Photography
    </div>

    <?php /*
    <div class="image-gallery grid-3-2-1-1"> </div>
    */ ?>
    <div class="image-gallery grid-4-3-2-2">
        <?php
        $dir_thumb = "/public/gallery/photos/1x1/webp-thumb";
        $dir_big =   "/public/gallery/photos/1x1/webp-big";

        $images = scandir(APP_ROOT . $dir_thumb);

        foreach ($images as $index => $image) {
            if (in_array($image, [".", ".."])) {
                unset($images[$index]);
            } else {
                $images[$index] = [
                    "$dir_big/" . $image,
                    "$dir_thumb/" . $image
                ];
            }
        }
        ?>

        <?php foreach ($images as $image) : ?>
            <div class="item-wrapper">
                <a class="image-item" href="<?php echo $image[0] ?>" area-label="Photography presentation FHD">
                    <img class="zoom-rotate" width="235" height="225" loading="lazy" decoding="async" src="<?php echo $image[1] ?>" alt="Photography presentation" />
                    <?php /*
                    <img width="235" height="225" /> @grid-4-3-2-2
                    <img width="317" height="178" />
                    <img width="330" height="186" /> @grid-3-2-1-1
                    */ ?>
                </a>
            </div>
        <?php endforeach; ?>
    </div>
</div>
