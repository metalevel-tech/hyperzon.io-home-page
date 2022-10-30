<?php

/**
 * Menu generator
 *  Menu::addItem(),  invoked by Routes.php
 *  Menu::getItems(), invoked by includes/Menu.php
 */

class Menu
{
    public static $menu_items = [];

    public static function addItem($item_id, $uri, $label, $label_mobile = null, $classes = [])
    {
        self::$menu_items[] = [
            "item_id" => $item_id,
            "uri" => $uri,
            "label" => $label,
            "label_mobile" => $label_mobile ?? $label,
            "class_list" => ["spa-menu-item", ...$classes]
        ];
    }

    public static function getItems()
    {
        global $REQUEST;

        // Sort the array by item_id
        usort(self::$menu_items, function ($current, $next) {
            // return ($current["item_id"] <= $next["item_id"]) ? -1 : 1;
            return ($current["item_id"] <=> $next["item_id"]);
        });

        // Parse the selected item
        foreach (self::$menu_items as $index => $item) {
            // Add classes "home-item"
            if ($item["item_id"] == 0) {
                if (!in_array("home-item", self::$menu_items[$index]["class_list"])) {
                    self::$menu_items[$index]["class_list"][] = "home-item";
                }
            }

            // Add classes "selected-item"
            if ($REQUEST["route"] == $item["uri"]) {
                self::$menu_items[$index]["class_list"][] = "selected-item";
            }
        }

        // The actual menu is constructed by includes/Menu.php
        return self::$menu_items;
    }

    public static function getUriById($item_id)
    {
        array_filter(self::$menu_items, function ($item) use ($item_id) {
            if ($item["item_id"] == $item_id) {
                return escape_html_output(
                    printf("%s", $item["uri"])
                );
            }
        });
    }

    public static function getLabelById($item_id)
    {
        array_filter(self::$menu_items, function ($item) use ($item_id) {
            if ($item["item_id"] == $item_id) {
                return escape_html_output(
                    printf("%s", $item["label"])
                );
            }
        });
    }

    public static function getClassesById($item_id)
    {
        array_filter(self::$menu_items, function ($item) use ($item_id) {
            if ($item["item_id"] == $item_id) {
                return escape_html_output(
                    printf("%s", implode(" ", $item["class_list"]))
                );
            }
        });
    }

    public static function getLabelMobileById($item_id)
    {
        array_filter(self::$menu_items, function ($item) use ($item_id) {
            if ($item["item_id"] == $item_id) {
                return escape_html_output(
                    printf("%s", $item["label_mobile"])
                );
            }
        });
    }

    // Deprecated
    public static function getUriByLabel($label)
    {
        array_filter(self::$menu_items, function ($item) use ($label) {
            if ($item["label"] == $label) {
                return escape_html_output(
                    printf("%s", $item["uri"])
                );
            }
        });
    }
}
