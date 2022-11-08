<div class="testimonials-wrapper">
    <div class="testimonials">
        <?php
        $dir_thumb = "/public/testimonials/webp-thumb";
        $dir_big =  "/public/testimonials/webp";
        $dir_video = "/public/testimonials/webm";
        $images = scandir(APP_ROOT . $dir_thumb);

        // Tidy up the array ---
        // https://stackoverflow.com/questions/7225070/php-array-delete-by-value-not-key
        $images = array_diff($images, array('.', '..'));
        shuffle($images);

        // If some of the items related to the gallery,
        // doesn't exist remove it from the $images array
        foreach ($images as $image) {
            $thumb = "$dir_thumb/$image";
            $big = "$dir_big/$image";
            $video = "$dir_video/" . str_replace(".webp", ".webm", $image);

            if (!is_file(APP_ROOT . $thumb) || !is_file(APP_ROOT . $big) || !is_file(APP_ROOT . $video)) {
                $images = array_diff($images, array($image));
            }
        }
        shuffle($images);

        // Output the gallery
        foreach ($images as $index => $image) {
            $thumb = "$dir_thumb/$image";
            $big = "$dir_big/$image";
            $video = "$dir_video/" . str_replace(".webp", ".webm", $image);

            // Set the default classes for the thumb images
            $thumb_container_classes = "testimonials__thumb__single" . " ";

            if ($index === 0) {
                // Output the first big image
                printf(
                    '<div class="%s">
                        <a class="testimonials-image-item" href="%s" area-label="%s">
                            <img class="%s" width="%u" height="%u" loading="lazy" decoding="async" src="%s" alt="%s" />
                        </a>
                    </div>
                    <div class="testimonials__thumb__wrapper"><div class="testimonials__slider">', // Open the thumb slider
                    "testimonials__selected",
                    $video,
                    "Testimonials video",
                    "testimonials-image-effect",
                    996,
                    560,
                    $big,
                    "Testimonials HQ image"
                );

                // Add the active class to the first thumb image
                $thumb_container_classes .= "testimonials__thumb__selected";
            }

            printf(
                '<div class="%s">
                    <a class="testimonials-image-item" href="%s" area-label="%s">
                        <img class="%s" width="%u" height="%u" loading="lazy" decoding="async" src="%s" alt="%s" />
                    </a>
                </div>',
                $thumb_container_classes,
                $big,
                "Testimonials HQ image",
                "",
                200,
                113,
                $thumb,
                "Testimonials thumb image"
            );

            if ($index === count($images) - 1) {
                printf('</div></div>'); // Close the thumb slider
            }
        }
        ?>
    </div>
</div>