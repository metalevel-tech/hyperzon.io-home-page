<link href="//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.min.css" type="text/css" rel="stylesheet" />
<link href="//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.gallery.min.css" type="text/css" rel="stylesheet" />

<div class="backgr-blue-svg backgr-blue-svg--01 section-home-01">
    <div class="backgr-blue-svg__content">
        <?php
        Req::element("AsSeenOnWhite");
        VideoPlayer::vimeo("721342097?h=ae5ac7bcaf", "Hyperzon Showreel - Design work");
        ?>
    </div>
</div>

<div class="backgr-white-svg text-dark">
    <div class="backgr-white-svg__content section-home-02 section-home-02--white">
        <div class="wrapper-1366">
            <?php
            Req::element("SloganGoodDesignGoodBusiness");
            // Req::element("BulletsAmazonPPC");
            ?>

        </div>


        <div class="wrapper-1366">
            <div class="bullets bullets--no-margin">
                <div class="bullets__title style-03">OUR SPECIALTIES</div>
                <div class="bullets__list">
                    <div class="bullets__list__grid">
                        <div class="bullets__list__grid__col">
                            <div class="bullets__single">
                                <div class="bullets__single__image">
                                    <img src="public/images/icons/design/icon_1.png" />
                                </div>
                                <div class="bullets__single__text">Logo Design</div>
                            </div>

                            <div class="bullets__single">
                                <div class="bullets__single__image">
                                    <img src="public/images/icons/design/icon_2.png" />
                                </div>
                                <div class="bullets__single__text">Full Corporate<br /> Identity & Brandbook</div>
                            </div>

                            <div class="bullets__single">
                                <div class="bullets__single__image">
                                    <img src="public/images/icons/design/icon_3.png" />
                                </div>
                                <div class="bullets__single__text">Mascot /<br /> Character Design</div>
                            </div>

                            <div class="bullets__single">
                                <div class="bullets__single__image">
                                    <img src="public/images/icons/design/icon_4.png" />
                                </div>
                                <div class="bullets__single__text">Social Media<br /> Moodboards</div>
                            </div>

                        </div>

                        <div class="bullets__list__grid__col">

                            <div class="bullets__single">
                                <div class="bullets__single__image">
                                    <img src="public/images/icons/design/icon_5.png" />
                                </div>
                                <div class="bullets__single__text">Labels</div>
                            </div>

                            <div class="bullets__single">
                                <div class="bullets__single__image">
                                    <img src="public/images/icons/design/icon_6.png" />
                                </div>
                                <div class="bullets__single__text">Product Design</div>
                            </div>

                            <div class="bullets__single">
                                <div class="bullets__single__image">
                                    <img src="public/images/icons/design/icon_7.png" />
                                </div>
                                <div class="bullets__single__text">Package Design &<br /> Printing Files</div>
                            </div>

                            <div class="bullets__single">
                                <div class="bullets__single__image">
                                    <img src="public/images/icons/design/icon_8.png" />
                                </div>
                                <div class="bullets__single__text">3D Visualisations<br /> Renders</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="wrapper-1366">
            <div class="gallery">
                <div class="gallery__title style-03">Recent Projects</div>
                <div class="gallery__subtitle style-05 style-05--size-01">Branding</div>
                <div class="gallery__items_wrapper">

                    <?php
                    $images = scandir('public/gallery/branding/1x1/thumb');
                    foreach ($images as $index => $image)
                        if (in_array($image, array('.', '..')))
                            unset($images[$index]);
                        else
                            $images[$index] = array('public/gallery/branding/1x1/big/' . $image, 'public/gallery/branding/1x1/thumb/' . $image);
                    ?>

                    <div class="gallery__items" data-featherlight-gallery data-featherlight-filter="a">
                        <div class="gallery__items-sizer"></div>

                        <?php foreach ($images as $image) : ?>

                            <div class="gallery__items-item"><a href="<?php echo $image[0] ?>"><img src="<?php echo $image[1] ?>" /></a></div>

                        <?php endforeach; ?>
                    </div>
                </div>


                <div class="gallery__subtitle style-05 style-05--size-01">Package Design</div>
                <div class="gallery__items_wrapper">
                    <?php
                    $images = scandir('public/gallery/package_design/1x1/thumb');
                    foreach ($images as $index => $image)
                        if (in_array($image, array('.', '..')))
                            unset($images[$index]);
                        else
                            $images[$index] = array('public/gallery/package_design/1x1/big/' . $image, 'public/gallery/package_design/1x1/thumb/' . $image);
                    ?>

                    <div class="gallery__items" data-featherlight-gallery data-featherlight-filter="a">
                        <div class="gallery__items-sizer"></div>

                        <?php foreach ($images as $image) : ?>

                            <div class="gallery__items-item"><a href="<?php echo $image[0] ?>"><img src="<?php echo $image[1] ?>" /></a></div>

                        <?php endforeach; ?>
                    </div>
                </div>

                <div class="gallery__subtitle style-05 style-05--size-01">Logo Design</div>
                <div class="gallery__items_wrapper">
                    <?php
                    $images = scandir('public/gallery/logo_design/1x1/thumb');
                    foreach ($images as $index => $image)
                        if (in_array($image, array('.', '..')))
                            unset($images[$index]);
                        else
                            $images[$index] = array('public/gallery/logo_design/1x1/big/' . $image, 'public/gallery/logo_design/1x1/thumb/' . $image);
                    ?>

                    <div class="gallery__items" data-featherlight-gallery data-featherlight-filter="a">
                        <div class="gallery__items-sizer"></div>

                        <?php foreach ($images as $image) : ?>
                            <div class="gallery__items-item"><a href="<?php echo $image[0] ?>"><img src="<?php echo $image[1] ?>" /></a></div>
                        <?php endforeach; ?>

                    </div>
                </div>
            </div>
        </div>

        <!-- <?php
        require_once('includes/book_a_call.php');
        ?>

        <br /><br /><br /><br /><br />

        <div class="wrapper-1366">
            <?php
            require_once('includes/brands_we_boosted.php');
            ?>
        </div>

        <br /><br /><br /><br /><br /> -->
    </div>
</div>

<script src="//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.min.js" type="text/javascript" charset="utf-8"></script>
<script src="//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.gallery.min.js" type="text/javascript" charset="utf-8"></script>