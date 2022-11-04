<div id="main-menu" class="main-menu">
    <div class="wrapper-1366 menu-wrapper">
        <!-- Main menu / Mobile menu - Logo Home button-->
        <?php
        $menu_items = Menu::getItems();

        foreach ($menu_items as $item) {
            /**
             * Structure of each $item in the array:
             * $item = [
             *      "item_id" => $item_id,
             *      "label" => $label,
             *      "uri" => $uri,
             *      "label_mobile" => $label_mobile ?? $label,
             *      "class_list" => ["menu-item", "selected-item", "home-item", ...]
             * ];
             */
            if ($item["item_id"] == 0) {
                printf(
                    '<div class="main-menu__logo">
                        <a href="%s" class="%s" aria-label="Back to home button">
                            <img width="%u" height="%u" alt="%s" src="%s" />
                        </a>
                    </div>',
                    $item["uri"],
                    implode(" ", $item["class_list"]),
                    304,
                    56,
                    "Hyperzon logo",
                    "/public/images/svg/logo_full.svg"
                );
            }
        }
        ?>
        <!-- Main menu / Mobile menu - Menu items -->
        <div class="main-menu__menu">
            <!-- Book a call button Mobile -->
            <a role="button" class="main-menu__call js-book-a-call mobile" area-label="Open the calendar widget and book a call">
                Book a call
            </a>

            <?php
            foreach ($menu_items as $item) {
                if ($item["item_id"] != 0) {
                    printf(
                        '<div class="main-menu__item">
                            <a href="%s" class="%s" aria-label="%s">
                            <span class="label-desktop">%s</span><span class="label-mobile">%s</span>
                            </a>
                        </div>',
                        $item["uri"],
                        implode(" ", $item["class_list"]),
                        $item["label_mobile"],
                        $item["label"],
                        $item["label_mobile"]
                    );
                }
            }
            printf("\n");
            ?>

            <!-- Book a call button Desktop -->
            <a role="button" class="main-menu__call js-book-a-call desktop" area-label="Open the calendar widget and book a call">
                Book a call
            </a>
        </div>

        <!-- mobile menu button -->
        <div id="mobile-menu-button">
            <div class="button-3x">
                <span></span>
                <!-- Don't remove this span and the span tags -->
                <span></span>
                <!-- They generate the mobile menu button -->
                <span></span>
            </div>
        </div>
    </div>
    <div id="scroll-to-top-button">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
            <g>
                <path d="M10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490c0-270.6-219.4-490-490-490C229.4,10,10,229.4,10,500z M549.5,310.5l198,198c27.3,27.3,27.3,71.7,0,99c-27.3,27.3-71.7,27.3-99,0L500,459L351.5,607.5c-27.3,27.3-71.7,27.3-99,0c-27.3-27.3-27.3-71.7,0-99l198-198c13.7-13.7,31.6-20.5,49.5-20.5C517.9,290,535.8,296.8,549.5,310.5z" />
            </g>
        </svg>
    </div>

</div>