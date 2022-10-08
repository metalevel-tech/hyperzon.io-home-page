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
        // Sort the array by item_id
        usort(self::$menu_items, function ($a, $b) {
            return ($a["item_id"] <= $b["item_id"]) ? -1 : 1;
        });

        // Parse the selected item
        foreach (self::$menu_items as $key => $item) {
            // Add classes "home-item"
            if ($item["item_id"] == 0) {
                self::$menu_items[$key]["class"][] = "home-item";
            }
            
            // Add classes "selected-item"
            if ($_GET["url"] == $item["uri"]) {
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
                echo $item["uri"]; return;
            }
        });
    }
    
    public static function getUriById($item_id)
    {
        array_filter(self::$menu_items, function ($item) use ($item_id) {
            if ($item["item_id"] == $item_id) {
                echo $item["uri"]; return;
            }
        });
    }
    
    public static function getLabelById($item_id)
    {
        array_filter(self::$menu_items, function ($item) use ($item_id) {
            if ($item["item_id"] == $item_id) {
                echo $item["label"]; return;
            }
        });
    }
    
    public static function getLabelMobileById($item_id)
    {
        array_filter(self::$menu_items, function ($item) use ($item_id) {
            if ($item["item_id"] == $item_id) {
                echo $item["label_mobile"]; return;
            }
        });
    }
}
