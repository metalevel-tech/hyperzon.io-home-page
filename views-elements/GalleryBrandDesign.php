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
        $dir_thumb = "/public/gallery/branding/1x1/webp-thumb";
        $dir_big =  "/public/gallery/branding/1x1/webp-big";
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
                    "zoom-only",
                    235,
                    225,
                    $thumb,
                    "Photography presentation"
                );
            }
        }
        ?>
    </div>

    <?php /* Galleri section */ ?>
    <div class="gallery__subtitle style-05 style-05--size-01">
        Package Design
    </div>

    <div class="image-gallery grid-4-3-2-2">
        <?php
        $dir_thumb = "/public/gallery/package_design/1x1/webp-thumb";
        $dir_big = "/public/gallery/package_design/1x1/webp-big";
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

    <?php /* Galleri section */ ?>
    <div class="gallery__subtitle style-05 style-05--size-01">
        Logo Design
    </div>

    <div class="image-gallery grid-4-3-2-2">
        <?php
        $dir_thumb = "/public/gallery/logo_design/1x1/webp-thumb";
        $dir_big = "/public/gallery/logo_design/1x1/webp-big";
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
                    "zoom-only",
                    235,
                    225,
                    $thumb,
                    "Photography presentation"
                );
            }
        }
        ?>
    </div>
</div>