<?php

/**
 * Routes generator, invoked by Routes.php
 */

class Route
{
    public static $valid_routes = [];

    public static function set($route, $function)
    {
        self::$valid_routes[] = $route;

        if ($_GET["url"] == $route) {
            $function->__invoke();
        }
    }

    public static function list()
    {
        return self::$valid_routes;
    }

    public static function debug()
    {
        echo "<p><b><code>Routes.php</code></b></p>";
        echo "<pre style='border: 1px solid lightgray; padding: 1em;'>";

        foreach (self::$valid_routes as $key => $value) {
            echo "$key     \t: ";
            if (is_array($value)) {
                foreach ($value as $element) {
                    echo "$element; ";
                }
                echo "\n";
            } else {
                echo "$value\n";
            }
        }
        echo "</pre>";
    }
}
