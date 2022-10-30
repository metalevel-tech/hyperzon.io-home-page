<?php

/**
 * Construct the menu: this list must be synchronized with 'Routes.php'!
 *
 *  Menu::AddItem(
 *     $item_id,                       // Menu item order number, 0 has special priority, null not a menu item,
 *     $uri,                           // URI of the page behind the menu item
 *     $label,                         // Menu item label,
 *     $label_mobile,                  // Menu item label for mobile devices, null for default,
 *     ["spa-menu-item", ...$classes]  // Menu item classes, "spa-menu-item" will be added automatically,
 * );                                     also "selected-item", and "home-item" for "item_id = 0"
 * 
 * Note in the files within "views/" and "includes/" the menu items are used via:
 *
 *      Menu::getUriById($id)         - to get the URI of the menu item, and
 *      Menu::getLabelById($id)       - to get the label of the menu item, or
 *      Menu::getLabelMobileById($id) - to get the the more descriptive label_mobile of the menu item
 *
 * In the command line use one of the following commands to get files where these methods are used:
 *      grep -rni "Menu::get.*By.*(" views/ includes/
 *      grep -rli "Menu::get.*By.*(" views/ includes/
 */

Menu::addItem(0, "home",                        "Home",               "Hyperzon home page", ["home-item"]);
Menu::addItem(1, "amazon-account-management",   "Account Management", "Amazon Full Account Management", ["service-item"]);
Menu::addItem(2, "amazon-ppc-management",       "Advertising",        "Amazon PPC Management", ["service-item"]);
Menu::addItem(3, "branding-and-package-design", "Design",             "Branding & Package Design", ["service-item"]);
Menu::addItem(4, "photo-and-video-content",     "Photo & Video",      "Photo & Video Content", ["service-item"]);
Menu::addItem(5, "hyperzon-blog",               "Blog",               "Hyperzon Blog", ["blog-item"]);
Menu::addItem(5, "blog-post",                   "Post",               "Blog post demo", ["blog-item"]);
