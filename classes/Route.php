<?php

/**
 * Routes generator, invoked by Routes.php
 */

class Route
{
    public static $valid_routes = [];

    public static function set($route, $function)
    {
        global $REQUEST;

        self::$valid_routes[] = $route;

        if ($REQUEST["route"] == $route) {
            $function->__invoke();
        }
    }

    public static function list()
    {
        return self::$valid_routes;
    }
}
