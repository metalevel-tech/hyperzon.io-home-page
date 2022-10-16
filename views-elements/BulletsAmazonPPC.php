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
                    print_r("<div class=\"bullets__list__grid__col\">");
                } else if ($index == count($bullets) / 2) {
                    print_r("</div><div class=\"bullets__list__grid__col\">");
                }

                print_r("<div class=\"bullets__single\">");
                print_r("<div class=\"bullets__single__image\">");
                // print_r("<img src=\"/public/images/icons/ppc/{$bullet["src"]}\" srcset=\"/public/images/icons/ppc/{$bullet["srcset"]}\" width=\"100\" height=\"100\" alt=\"Icon image\" loading=\"lazy\" decoding=\"async\" />");
                print_r("<img src=\"/public/images/icons/ppc/{$bullet["src"]}\" width=\"100\" height=\"100\" alt=\"Icon image\" loading=\"lazy\" decoding=\"async\" />");
                print_r("</div>");
                print_r("<div class=\"bullets__single__text\">");
                print_r("<span>{$bullet["title"]}</span>");
                // print_r("<div>{$bullet["text"]}</div>");
                print_r("</div>");
                print_r("</div>");

                if ($index == count($bullets) - 1) {
                    print_r("</div>");
                }
            }

            // <div class="bullets__single">
            //     <div class="bullets__single__image">
            //         <img src="/public/images/icons/management/icon_10.webp" srcset="/public/images/icons/management/icon_10@2x.webp 2x" />
            //     </div>
            //     <div class="bullets__single__text">
            //         Dedicated Account Manager
            //         <div>With active daily communication</div>
            //     </div>
            // </div>
            ?>

        </div>
    </div>
</div>
