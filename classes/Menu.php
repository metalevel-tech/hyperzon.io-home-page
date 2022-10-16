<?php
/**
 * Menu generator
 *  Menu::addItem(),  invoked by Routes.php
 *  Menu::getItems(), invoked by includes/Menu.php
 */

class Menu
{
    public static $menu_items = [];

    public static function addItem($item_id, $uri, $label, $label_mobile = null)
    {
        self::$menu_items[] = [
            "item_id" => $item_id,
            "uri" => $uri,
            "label" => $label,
            "label_mobile" => $label_mobile ?? $label,
            "class" => ["main-menu-item"]
        ];
    }

    public static function getItems()
    {
        global $REQUEST;

        // Sort the array by item_id
        usort(self::$menu_items, function ($current, $next) {
            return ($current["item_id"] <= $next["item_id"]) ? -1 : 1;
        });

        // Parse the selected item
        foreach (self::$menu_items as $key => $item) {
            // Add classes "home-item"
            if ($item["item_id"] == 0) {
                self::$menu_items[$key]["class"][] = "home-item";
            }

            // Add classes "selected-item"
            if ($REQUEST["route"] == $item["uri"]) {
                self::$menu_items[$key]["class"][] = "selected-item";
            }
        }

        // The actual menu is constructed by includes/Menu.php
        return self::$menu_items;
    }

    public static function getUriByLabel($label)
    {
        array_filter(self::$menu_items, function ($item) use ($label) {
            if ($item["label"] == $label) {
                return printf("%s", $item["uri"]);
            }
        });
    }

    public static function getUriById($item_id)
    {
        array_filter(self::$menu_items, function ($item) use ($item_id) {
            if ($item["item_id"] == $item_id) {
                return printf("%s", $item["uri"]);
            }
        });
    }

    public static function getLabelById($item_id)
    {
        array_filter(self::$menu_items, function ($item) use ($item_id) {
            if ($item["item_id"] == $item_id) {
                return printf("%s", $item["label"]);
            }
        });
    }

    public static function getLabelMobileById($item_id)
    {
        array_filter(self::$menu_items, function ($item) use ($item_id) {
            if ($item["item_id"] == $item_id) {
                return printf("%s", $item["label_mobile"]);
            }
        });
    }
}
