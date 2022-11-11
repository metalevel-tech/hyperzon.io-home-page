<?php
$dir_thumb = "/public/testimonials/webp-thumb";
$dir_big =  "/public/testimonials/webp";
$dir_video = "/public/testimonials/webm";
$testimonials = scandir(APP_ROOT . $dir_thumb);

// Tidy up the items array ---
// https://stackoverflow.com/questions/7225070/php-array-delete-by-value-not-key
$testimonials = array_diff($testimonials, array('.', '..'));
shuffle($testimonials);

// If some of the items related to the gallery doesn't exist,
// remove the $item from the $testimonials array
foreach ($testimonials as $item) {
    $file_thumb = "$dir_thumb/$item";
    $file_big = "$dir_big/$item";
    $file_video = "$dir_video/" . str_replace(".webp", ".webm", $item);

    if (
        !is_file(APP_ROOT . $file_thumb) ||
        !is_file(APP_ROOT . $file_big) ||
        !is_file(APP_ROOT . $file_video)
    ) {
        $testimonials = array_diff($testimonials, array($item));
    }
}
?>
<div class="testimonials">
    <div class="testimonials__gallery">
        <?php
        // Output the gallery with the big images

        foreach ($testimonials as $index => $item) {
            $uri_thumb = "$dir_thumb/$item";
            $uri_big = "$dir_big/$item";
            $uri_video = "$dir_video/" . str_replace(".webp", ".webm", $item);

            // Set the default classes for the thumb images
            $container_classes = "testimonials__gallery__item";
            // Add the __selected class to the first image or __hidden to the rest
            if ($index === 0) {
                $container_classes .= " selected";
            } else {
                $container_classes .= " hidden";
            }

            printf(
                '<div data-id="testimonial-%u" class="%s">
                    <a href="%s" class="video-anchor" area-label="Testimonials video">
                        <img 
                            width="%u" height="%u" src="%s"
                            class="image-big"
                            loading="lazy" decoding="async"
                            alt="Testimonials HQ image" 
                        />
                    </a>
                </div>',
                $index,
                $container_classes,
                $uri_video,
                996,
                560,
                $uri_big
            );
        }
        ?>
        <div class="testimonials__slider">
            <div class="testimonials__slider__wrapper">
                <?php
                // Output the slider gallery with the thumb images

                foreach ($testimonials as $index => $item) {
                    $uri_thumb = "$dir_thumb/$item";
                    $uri_big = "$dir_big/$item";
                    $uri_video = "$dir_video/" . str_replace(".webp", ".webm", $item);

                    // Set the default classes for the thumb images
                    $container_classes = "testimonials__slider__item";
                    // Add the .selected class to the first image
                    if ($index === 0) {
                        $container_classes .= " selected";
                    }

                    // All thumb images are ~50kb, these options are disabled at the moment
                    // loading="lazy" decoding="async" -- id="testimonials-%u-thumb-%u"
                    printf(
                        '<div data-id="testimonial-%u" class="%s">
                            <a href="%s" class="hq-image-anchor" area-label="Testimonials HQ image">
                                <img
                                    width="%u" height="%u" src="%s" 
                                    class="image-thumb" 
                                    alt="Testimonials thumb image"
                                />
                            </a>
                        </div>',
                        $index,
                        $container_classes,
                        $uri_big,
                        200,
                        113,
                        $uri_thumb
                    );
                }
                ?>
            </div>
        </div>
    </div>
</div>