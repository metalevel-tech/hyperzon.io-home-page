<div class="gallery">
    <div class="gallery__title style-03">
        Recent Projects
    </div>

    <div class="gallery__subtitle style-05 style-05--size-01">
        Branding
    </div>

    <div class="gallery__items_wrapper">
        <?php
        $images = scandir('public/gallery/branding/1x1/thumb');

        foreach ($images as $index => $image) {
            if (in_array($image, array('.', '..'))) {
                unset($images[$index]);
            } else {
                $images[$index] = array('public/gallery/branding/1x1/big/' . $image, 'public/gallery/branding/1x1/thumb/' . $image);
            }
        }
        ?>

        <div class="gallery__items" data-featherlight-gallery data-featherlight-filter="a">
            <div class="gallery__items-sizer"></div>
            
            <?php foreach ($images as $image) : ?>
                <div class="gallery__items-item">
                    <a href="<?php echo $image[0] ?>" area-label="View the full brand design image" >
                        <img src="<?php echo $image[1] ?>" width="235" height="225" alt="Brand design image" loading="lazy" decoding="async" />
                    </a>
                </div>
            <?php endforeach; ?>

        </div>
    </div>

    <div class="gallery__subtitle style-05 style-05--size-01">
        Package Design
    </div>
    <div class="gallery__items_wrapper">
        <?php
        $images = scandir('public/gallery/package_design/1x1/thumb');

        foreach ($images as $index => $image) {
            if (in_array($image, array('.', '..'))) {
                unset($images[$index]);
            } else {
                $images[$index] = array('public/gallery/package_design/1x1/big/' . $image, 'public/gallery/package_design/1x1/thumb/' . $image);
            }
        }
        ?>

        <div class="gallery__items" data-featherlight-gallery data-featherlight-filter="a">
            <div class="gallery__items-sizer"></div>

            <?php foreach ($images as $image) : ?>
                <div class="gallery__items-item">
                    <a href="<?php echo $image[0] ?>" area-label="View the full brand design image" >
                        <img src="<?php echo $image[1] ?>" width="235" height="225" alt="Brand design image" loading="lazy" decoding="async" />
                    </a>
                </div>
            <?php endforeach; ?>

        </div>
    </div>

    <div class="gallery__subtitle style-05 style-05--size-01">Logo Design</div>
    <div class="gallery__items_wrapper">
        <?php
        $images = scandir('public/gallery/logo_design/1x1/thumb');

        foreach ($images as $index => $image) {
            if (in_array($image, array('.', '..'))) {
                unset($images[$index]);
            } else {
                $images[$index] = array('public/gallery/logo_design/1x1/big/' . $image, 'public/gallery/logo_design/1x1/thumb/' . $image);
            }
        }
        ?>

        <div class="gallery__items" data-featherlight-gallery data-featherlight-filter="a">
            <div class="gallery__items-sizer"></div>

            <?php foreach ($images as $image) : ?>
                <div class="gallery__items-item">
                    <a href="<?php echo $image[0] ?>" area-label="View the full brand design image" >
                        <img src="<?php echo $image[1] ?>" width="235" height="225" alt="Brand design image" loading="lazy" decoding="async" />
                    </a>
                </div>
            <?php endforeach; ?>

        </div>
    </div>
</div>