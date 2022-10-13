<?php

/**
 * Construct the menu: this list must be synchronized with 'Routes.php'!
 * 
 *  Menu::AddItem(
 *      $item_id,       // Menu item order number, 0 has special priority, null not a menu item,
 *      $label,         // Menu item label,
 *      $label_mobile,  // Menu item label for mobile devices, null for default,
 *      $uri            // URI of the page behind the menu item
 * );
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

Menu::addItem(0, "home",                        "Home",               "Hyperzon home page" );
Menu::addItem(1, "amazon-account-management",   "Account Management", "Amazon Full Account Management");
Menu::addItem(2, "amazon-ppc-management",       "Advertising",        "Amazon PPC Management");
Menu::addItem(3, "branding-and-package-design", "Design",             "Branding & Package Design");
Menu::addItem(4, "photo-and-video-content",     "Photo & Video",      "Photo & Video Content");
// Menu::addItem(5, "hyperzon-blog",               "Blog",               "Hyperzon Blog");
