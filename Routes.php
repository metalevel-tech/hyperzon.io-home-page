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

if (!isset($_GET["uri"])) {
    $ROUTE = "home";
} else {
    $PATH = explode("/", $_GET["uri"]);
    $ROUTE = array_shift($PATH);
}

Route::set("index.php",                   function () { Controller::CreateView("Home"); });
Route::set("home",                        function () { Controller::CreateView("Home"); });
Route::set("amazon-account-management",   function () { Controller::CreateView("AmazonAM"); });
Route::set("amazon-ppc-management",       function () { Controller::CreateView("AmazonPPC"); });
Route::set("branding-and-package-design", function () { Controller::CreateView("BrandDesign"); });
Route::set("photo-and-video-content",     function () { Controller::CreateView("PhotoVideo"); });
Route::set("hyperzon-blog",               function () { BlogPosts::CreateView("Blog"); });

if (!in_array($ROUTE, Route::list())) { 
    Controller::CreateView("HTTP404"); 
}
