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
                echo "<div class=\"main-menu__logo\">\n\t\t\t";
                echo "<a href=\"{$item["uri"]}\" class=\"" . implode(" ", $item["class"]) . "\" aria-label=\"Back to home button\">\n\t\t\t\t";
                echo "<img width=\"304\" height=\"56\" alt=\"Hyperzon logo\" src=\"/public/images/svg/logo_full.svg\" />\n\t\t\t";
                echo "</a>\n\t\t";
                echo "</div>\n";
            }
        }
        ?>
        <div class="main-menu__menu">
            <a role="button" class="main-menu__call js-book-a-call mobile" area-label="Open the calendar widget and book a call">
                Book a call
            </a>

            <?php
            foreach ($menu_items as $item) {
                if ($item["item_id"] != 0) {
                    echo "<div class=\"main-menu__item\">";
                    echo "<a href=\"{$item["uri"]}\" class=\"" . implode(" ", $item["class"]) . "\" aria-label=\"{$item["label_mobile"]}\">";
                    echo "<span class=\"label-desktop\">{$item["label"]}</span><span class=\"label-mobile\">{$item["label_mobile"]}</span>";
                    echo "</a>";
                    echo "</div>";
                }
            }
            echo "\n";
            ?>

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