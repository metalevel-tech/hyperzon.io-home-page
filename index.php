<?php
/**
 * Auto load classes from "classes/" and "controllers/"
 * 
 * Refs:
 * - https://blog.magepsycho.com/is_file-vs-file_exists/
 */
spl_autoload_register(function ($class_name) {
    if (is_file("classes/$class_name.php")) {
        require_once "./classes/$class_name.php";
    } elseif (is_file("controllers/$class_name.php")) {
        require_once "./controllers/$class_name.php";
    }
});
require_once "./helpers/EscapeFunctions.php";

/**
 * The page Header, Content and Footer are loaded via
 * Routes.php > class Controller::CreateView("...")
 */
// require_once "./Config.php";
// define('DB_HOST', 'your-host');
// define('DB_USER', 'your-username');
// define('DB_PASS', 'your-password');
// define('DB_NAME', 'your-db-name');

// define('APP_ROOT', __FILE__);
// Define APP_ROOT as the root of the application
define('APP_ROOT', dirname(__FILE__));
define('URL_ROOT', '/');

require_once "./Menu.php";
// require_once "./ResourcesDev.php";
require_once "./Resources.php";
require_once "./Routes.php";

/**
 * Debug options
 */
// ResourceLoader::debug();
// Route::debug();
