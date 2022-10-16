<div class="bullets bullets--no-margin">
    <div class="bullets__title style-03">
        OUR SPECIALTIES
    </div>
    <div class="bullets__list">
        <div class="bullets__list__grid">
            <?php
            $bullets = [
                [
                    "src" => "icon_1.webp",
                    "srcset" => "",
                    "title" => "Products on white <br /> background",
                    "text" => ""
                ],
                [
                    "src" => "icon_2.webp",
                    "srcset" => "",
                    "title" => "Lifestyle photos",
                    "text" => "",
                ],
                [
                    "src" => "icon_3.webp",
                    "srcset" => "",
                    "title" => "Catalogue photos",
                    "text" => "",
                ],
                [
                    "src" => "icon_4.webp",
                    "srcset" => "",
                    "title" => "Product videos",
                    "text" => "",
                ],
                [
                    "src" => "icon_5.webp",
                    "srcset" => "",
                    "title" => "Lifestyle videos",
                    "text" => "",
                ],
                [
                    "src" => "icon_6.webp",
                    "srcset" => "",
                    "title" => "Motion graphic <br />videos",
                    "text" => "",
                ]
            ];

            foreach ($bullets as $index => $bullet) {
                // We need CSS Grid not columns like these
                if ($index == 0) {
                    printf('<div class="bullets__list__grid__col">');
                } else if ($index == count($bullets) / 2) {
                    printf('</div><div class="bullets__list__grid__col">');
                }

                printf(
                    '<div class="bullets__single">
                        <div class="bullets__single__image">
                            <img src="%s/%s" width="%u" height="%u" alt="Icon image" loading="lazy" decoding="async" />
                        </div>
                        <div class="bullets__single__text">
                            <span>%s</span>
                            <div>%s</div>
                        </div>
                    </div>',
                    "/public/images/icons/video",
                    $bullet["src"],
                    100,
                    100,
                    $bullet["title"],
                    $bullet["text"]
                );

                if ($index == count($bullets) - 1) {
                    printf('</div>');
                }
            }
            ?>

        </div>
    </div>
</div>