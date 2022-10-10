
<div class="gallery">
    <div class="gallery__title style-03">
        Recent Projects
    </div>

    <div class="gallery__subtitle style-05 style-05--size-01">
        Product Videos
    </div>

    <div class="video-gallery">
        <?php

        $images = scandir('public/gallery/videos/webp');

        foreach ($images as $index => $image) {
            if (in_array($image, array('.', '..'))) {
                unset($images[$index]);
            } else {
                $images[$index] = [
                    'public/gallery/videos/webm/' . str_replace('.webp', '.webm', $image),
                    'public/gallery/videos/webp/' . $image,
                    //  $vimeo[str_replace('.png', '', $image)]
                ];
            }
        }
        ?>

        <?php foreach ($images as $image) : ?>
            <div class="item-wrapper">
                <video class="video-item" preload="none" loop muted playsinline poster="<?php echo $image[1] ?>" width='317' height='178'>
                    <source src="<?php echo $image[0] ?>" type="video/webm">
                </video>
            </div>
        <?php endforeach; ?>

    </div>

</div>