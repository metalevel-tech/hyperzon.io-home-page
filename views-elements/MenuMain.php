<div id="main-menu" class="main-menu">
    <!-- Mobile menu rest items, see below for the home button -->
    <div class="wrapper-1366 main-menu__wrapper">
        <div class="menu__mobile measure">
            <div class="menu__mobile__wrapper">

                <div>
                    <?php /* <a href="#" class="main-menu__call js-book-a-call" area-label="Open the calendar widget and book a call">Book a call</a> */ ?>
                    <a role="button" class="main-menu__call js-book-a-call" area-label="Open the calendar widget and book a call">Book a call</a>
                </div>

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
                    if ($item["item_id"] != 0) {
                        echo "<div class=\"main-menu__item\">\n\t\t\t";
                        echo "<a href=\"{$item["uri"]}\" class=\"" . implode(" ", $item["class"]) . "\" aria-label=\"{$item["label_mobile"]}\">{$item["label_mobile"]}</a>\n\t\t";
                        echo "</div>\n\t\t";
                    }
                }
                echo "\n";
                ?>
            </div>
        </div>

        <!-- Main menu / Mobile menu - Logo Home button-->
        <?php
        foreach ($menu_items as $item) {
            if ($item["item_id"] == 0) {
                echo "<div class=\"main-menu__logo\">\n\t\t\t";
                echo "<a href=\"{$item["uri"]}\" class=\"" . implode(" ", $item["class"]) . "\" aria-label=\"Back to home button\">\n\t\t\t\t";
                echo "<img width=\"304\" height=\"56\" alt=\"Hyperzon logo\" src=\"/public/images/svg/logo_full.svg\" />\n\t\t\t";
                echo "</a>\n\t\t";
                echo "</div>\n";
            }
        }
        ?>

        <!-- Main menu rest items -->
        <div class="main-menu__menu">
            <?php
            foreach ($menu_items as $item) {
                if ($item["item_id"] != 0) {
                    echo "<div class=\"main-menu__item\">\n\t\t\t\t";
                    echo "<a href=\"{$item["uri"]}\" class=\"" . implode(" ", $item["class"]) . "\" aria-label=\"{$item["label_mobile"]}\">{$item["label"]}</a>\n\t\t\t";
                    echo "</div>\n\t\t\t";
                }
            }
            echo "\n";
            ?>

            <?php /* <a href="#" class="main-menu__call js-book-a-call" area-label="Open the calendar widget and book a call">Book a call</a> */ ?>
            <a role="button" class="main-menu__call js-book-a-call" area-label="Open the calendar widget and book a call">Book a call</a>
        </div>

        <!-- mobile menu button -->
        <div class="main-menu__menu-mobile">
            <?php /*  <a href="#" class="mobile-menu-button" aria-label="Mobile menu button"> */ ?>
            <a role="button" class="mobile-menu-button" aria-label="Mobile menu button">
                <span></span>
                <!-- Don't remove this span and the span tags -->
                <span></span>
                <!-- They generate the mobile menu button -->
                <span></span>
            </a>
        </div>
    </div>
</div>
