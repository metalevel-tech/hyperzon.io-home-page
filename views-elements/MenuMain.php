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
             *      "class" => ["menu-item", "selected-item", "home-item"]
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
                    implode(" ", $item["class"]),
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
                        implode(" ", $item["class"]),
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
</div>