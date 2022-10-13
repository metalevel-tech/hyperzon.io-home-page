<div class="gallery">
    <div class="gallery__title style-03">
        Recent Projects
    </div>

    <?php /* Galleri section */ ?>
    <div class="gallery__subtitle style-05 style-05--size-01">
        Branding
    </div>

    <div class="image-gallery grid-4-3-2-2">
        <?php
        $images = scandir("public/gallery/branding/1x1/webp-thumb");

        foreach ($images as $index => $image) {
            if (in_array($image, array('.', '..'))) {
                unset($images[$index]);
            } else {
                $images[$index] = [
                    "public/gallery/branding/1x1/webp-big/" . $image,
                    "public/gallery/branding/1x1/webp-thumb/" . $image
                ];
            }
        }
        ?>

        <?php foreach ($images as $image) : ?>
            <div class="item-wrapper">
                <a class="image-item" href="<?php echo $image[0] ?>" area-label="Photography presentation FHD">
                    <img class="zoom-only" width="235" height="225" loading="lazy" decoding="async" src="<?php echo $image[1] ?>" alt="Photography presentation" />
                </a>
            </div>
        <?php endforeach; ?>
    </div>

    <?php /* Galleri section */ ?>
    <div class="gallery__subtitle style-05 style-05--size-01">
        Package Design
    </div>

    <div class="image-gallery grid-4-3-2-2">
        <?php
        $images = scandir("public/gallery/package_design/1x1/webp-thumb");

        foreach ($images as $index => $image) {
            if (in_array($image, array('.', '..'))) {
                unset($images[$index]);
            } else {
                $images[$index] = [
                    "public/gallery/package_design/1x1/webp-big/" . $image,
                    "public/gallery/package_design/1x1/webp-thumb/" . $image
                ];
            }
        }
        ?>

        <?php foreach ($images as $image) : ?>
            <div class="item-wrapper">
                <a class="image-item" href="<?php echo $image[0] ?>" area-label="Photography presentation FHD">
                    <img class="zoom-rotate" width="235" height="225" loading="lazy" decoding="async" src="<?php echo $image[1] ?>" alt="Photography presentation" />

                </a>
            </div>
        <?php endforeach; ?>
    </div>

    <?php /* Galleri section */ ?>
    <div class="gallery__subtitle style-05 style-05--size-01">
        Logo Design
    </div>

    <div class="image-gallery grid-4-3-2-2">
        <?php
        $images = scandir("public/gallery/logo_design/1x1/webp-thumb");

        foreach ($images as $index => $image) {
            if (in_array($image, array('.', '..'))) {
                unset($images[$index]);
            } else {
                $images[$index] = [
                    "public/gallery/logo_design/1x1/webp-big/" . $image,
                    "public/gallery/logo_design/1x1/webp-thumb/" . $image
                ];
            }
        }
        ?>

        <?php foreach ($images as $image) : ?>
            <div class="item-wrapper">
                <a class="image-item" href="<?php echo $image[0] ?>" area-label="Photography presentation FHD">
                    <img class="zoom-only" width="235" height="225" loading="lazy" decoding="async" src="<?php echo $image[1] ?>" alt="Photography presentation" />

                </a>
            </div>
        <?php endforeach; ?>
    </div>


</div>