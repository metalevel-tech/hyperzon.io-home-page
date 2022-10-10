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
                    "title" => "Logo Design",
                    "text" => ""
                ],
                [
                    "src" => "icon_2.webp",
                    "srcset" => "",
                    "title" => "Full Corporate <br /> Identity & Brandbook",
                    "text" => "",
                ],
                [
                    "src" => "icon_3.webp",
                    "srcset" => "",
                    "title" => "Mascot / <br /> Character Design",
                    "text" => "",
                ],
                [
                    "src" => "icon_4.webp",
                    "srcset" => "",
                    "title" => "Social Media <br /> Moodboards",
                    "text" => "",
                ],
                [
                    "src" => "icon_5.webp",
                    "srcset" => "",
                    "title" => "Labels",
                    "text" => "",
                ],
                [
                    "src" => "icon_6.webp",
                    "srcset" => "",
                    "title" => "Product Design",
                    "text" => "",
                ],
                [
                    "src" => "icon_7.webp",
                    "srcset" => "",
                    "title" => "Package Design & <br /> Printing Files",
                    "text" => ""
                ],
                [
                    "src" => "icon_8.webp",
                    "srcset" => "",
                    "title" => "3D Visualisations <br /> Renders",
                    "text" => "",
                ]
            ];

            foreach ($bullets as $index => $bullet) {
                // We need CSS Grid not columns like these
                if ($index == 0) {
                    echo "<div class=\"bullets__list__grid__col\">";
                } else if ($index == count($bullets) / 2) {
                    echo "</div><div class=\"bullets__list__grid__col\">";
                }

                echo "<div class=\"bullets__single\">\n\t";
                echo "<div class=\"bullets__single__image\">\n\t\t";
                // echo "<img src=\"public/images/icons/design/{$bullet["src"]}\" srcset=\"public/images/icons/design/{$bullet["srcset"]}\" width=\"100\" height=\"100\" alt=\"Icon image\" loading=\"lazy\" decoding=\"async\" />\n\t";
                echo "<img src=\"public/images/icons/design/{$bullet["src"]}\" width=\"100\" height=\"100\" alt=\"Icon image\" loading=\"lazy\" decoding=\"async\" />\n\t";
                echo "</div>\n\t";
                echo "<div class=\"bullets__single__text\">\n\t";
                echo "<span>{$bullet["title"]}</span>";
                // echo "<div>{$bullet["text"]}</div>\n\t";
                echo "</div>\n";
                echo "</div>";

                if ($index == count($bullets) - 1) {
                    echo "</div>";
                }
            }

            // <div class="bullets__single">
            //     <div class="bullets__single__image">
            //         <img src="public/images/icons/management/icon_10.webp" srcset="public/images/icons/management/icon_10@2x.webp 2x" />
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