<div class="gallery">
    <div class="gallery__title style-03">
        Recent Projects
    </div>

    <div class="gallery__subtitle style-05 style-05--size-01">
        Product Videos
    </div>

    <div class="gallery__videos_wrapper">
        <?php
        /*
                    $vimeo['Coninx - Poufs'] = '671200191';
                    $vimeo['Noobru'] = '';
                    $vimeo['Coninx - Spice Carousel'] = '';
                    $vimeo['StarPack - Sandwich Cutters'] = '';
                    $vimeo['Coninx - Knife Holder'] = '';
                    $vimeo['StarPack - Ice Container'] = '';
                    $vimeo['Skingasm - Don\'t Stop, Make Me Melt - Lipstick'] = '';
                    $vimeo['Kitett - Manual Pump'] = '';
                    $vimeo['NanoShield Unboxing'] = '';
                    */

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

        <div class="gallery__videos">

            <?php foreach ($images as $image) : ?>
                <div class="gallery__videos-item">
                    <div class="gallery__videos-item__wrapper">
                        <video loop muted preload="none">
                            <source src="<?php echo $image[0] ?>" type="video/webm">
                        </video>

                        <?php /* 
                                    <a data-featherlight="iframe"  data-featherlight-iframe-allowfullscreen="true" 
                                    data-featherlight-iframe-width="500" data-featherlight-iframe-height="281" 
                                    href="https://player.vimeo.com/video/<?php echo $image[2] ?>">
                                    */ ?>

                        <img width='317' height='178' loading="lazy" decoding="async" src="<?php echo $image[1] ?>" alt="Motion Graphics presentation" />

                        <?php /*
                                    </a>
                                    */ ?>
                    </div>
                </div>
            <?php endforeach; ?>

        </div>
    </div>

    <div class="gallery__subtitle style-05 style-05--size-01">
        Motion Graphics
    </div>
    <div class="gallery__videos_wrapper">
        <?php
        /*
                    $vimeo['Coninx - Poufs'] = '671200191';
                    $vimeo['Noobru'] = '';
                    $vimeo['Coninx - Spice Carousel'] = '';
                    $vimeo['StarPack - Sandwich Cutters'] = '';
                    $vimeo['Coninx - Knife Holder'] = '';
                    $vimeo['StarPack - Ice Container'] = '';
                    $vimeo['Skingasm - Don\'t Stop, Make Me Melt - Lipstick'] = '';
                    $vimeo['Kitett - Manual Pump'] = '';
                    $vimeo['NanoShield Unboxing'] = '';
                    */

        $images = scandir('public/gallery/motion_graphics/webp');

        foreach ($images as $index => $image) {
            if (in_array($image, array('.', '..'))) {
                unset($images[$index]);
            } else {
                $images[$index] = [
                    'public/gallery/motion_graphics/webm/' . str_replace('.webp', '.webm', $image),
                    'public/gallery/motion_graphics/webp/' . $image,
                    //  $vimeo[str_replace('.png', '', $image)]
                ];
            }
        }
        ?>

        <div class="gallery__videos">

            <?php foreach ($images as $image) : ?>
                <div class="gallery__videos-item">
                    <div class="gallery__videos-item__wrapper">
                        <video loop muted preload="none">
                            <source src="<?php echo $image[0] ?>" type="video/webm">
                        </video>
                        <img width='317' height='178' loading="lazy" decoding="async" src="<?php echo $image[1] ?>" alt="Motion Graphics presentation" />
                    </div>
                </div>
            <?php endforeach; ?>

        </div>
    </div>

    <div class="gallery__subtitle style-05 style-05--size-01">
        Photography
    </div>
    <div class="gallery__items_wrapper">
        <?php
        $images = scandir('public/gallery/photos/1x1/webp-thumb');

        foreach ($images as $index => $image) {
            if (in_array($image, array('.', '..'))) {
                unset($images[$index]);
            } else {
                $images[$index] = [
                    'public/gallery/photos/1x1/webp-big/' . $image,
                    'public/gallery/photos/1x1/webp-thumb/' . $image
                ];
            }
        }
        ?>

        <div class="gallery__items" data-featherlight-gallery data-featherlight-filter="a">
            <div class="gallery__items-sizer"></div>

            <?php foreach ($images as $image) : ?>
                <div class="gallery__items-item">
                    <a href="<?php echo $image[0] ?>">
                        <img width='235' height='225' loading="lazy" decoding="async" src="<?php echo $image[1] ?>" alt="Photography presentation" />
                    </a>
                </div>
            <?php endforeach; ?>

        </div>
    </div>
</div>