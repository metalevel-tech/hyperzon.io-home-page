<?php
/**
 * Route::set(
 *      $uri,       // URI of the page, same as the $uri in Menu::AddItem()
 *      function()  // Function which produces the output of the page
 * );
 *
 * Controller::CreateView(
 *      $view,      // Page view name,
 * );
 */

$REQUEST = [];

if (isset($_GET)) {
    foreach ($_GET as $key => $value) {
        $REQUEST[stripslashes($key)] = stripslashes($value);
    }
}

if (!isset($REQUEST["uri"]) || !$REQUEST["uri"]) {
    $REQUEST["route"] = "home";
} else {
    $REQUEST["path"] = explode("/", $REQUEST["uri"]);
    $REQUEST["route"] = array_shift($REQUEST["path"]);
    unset($REQUEST["uri"]);

    // echo "<span style='color: black; height: 80px'>";
    // print_r($REQUEST);
    // echo "</span>";
}

Route::set("index.php",                   function () { Controller::CreateView("Home"); });
Route::set("home",                        function () { Controller::CreateView("Home"); });
Route::set("amazon-account-management",   function () { Controller::CreateView("AmazonAM"); });
Route::set("amazon-ppc-management",       function () { Controller::CreateView("AmazonPPC"); });
Route::set("branding-and-package-design", function () { Controller::CreateView("BrandDesign"); });
Route::set("photo-and-video-content",     function () { Controller::CreateView("PhotoVideo"); });
Route::set("hyperzon-blog",               function () { BlogPosts::CreateView("Blog"); });

if (!in_array($REQUEST["route"], Route::list())) { 
    Controller::CreateView("HTTP404"); 
}
