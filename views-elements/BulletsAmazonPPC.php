<div class="bullets bullets--02">
    <div class="bullets__title style-03">
        Amazon PPC Management<br /> Includes
    </div>
    <div class="bullets__list">
        <div class="bullets__list__grid">
            <?php
            $bullets = [
                [
                    "src" => "icon_1.webp",
                    "srcset" => "",
                    "title" => "Custom-Tailored <br /> Marketing Strategy",
                    "text" => ""
                ],
                [
                    "src" => "icon_2.webp",
                    "srcset" => "",
                    "title" => "Amazon Sponsored <br /> Products Ads",
                    "text" => "",
                ],
                [
                    "src" => "icon_3.webp",
                    "srcset" => "",
                    "title" => "Amazon Sponsored <br /> Brands Management",
                    "text" => "",
                ],
                [
                    "src" => "icon_4.webp",
                    "srcset" => "",
                    "title" => "Reporting & Analysis",
                    "text" => "",
                ],
                [
                    "src" => "icon_5.webp",
                    "srcset" => "",
                    "title" => "Extensive Competitor <br /> Analysis & Keyword Research",
                    "text" => "",
                ],
                [
                    "src" => "icon_6.webp",
                    "srcset" => "",
                    "title" => "Amazon Video Ads",
                    "text" => "",
                ],
                [
                    "src" => "icon_7.webp",
                    "srcset" => "",
                    "title" => "Amazon Display Ads",
                    "text" => ""
                ],
                [
                    "src" => "icon_8.webp",
                    "srcset" => "",
                    "title" => "Machine Learning <br /> Bid Management",
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
                    "/public/images/icons/ppc",
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