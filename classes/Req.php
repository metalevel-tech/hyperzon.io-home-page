<?php

/**
 * Req - require/load parts from views-elements/*.php and views/*.php
 */

class Req
{
    // Require a file from "views/" or "views-elements/"
    public static function resource($resource, $paths = ["views", "views-elements"])
    {
        $file = self::findRecursive($resource, $paths);
        self::requireFile($file);
    }

    // Require a file from "views-elements/" only
    public static function element($resource, $paths = ["views-elements"])
    {
        $file = self::findRecursive($resource, $paths);
        self::requireFile($file);
    }

    // Require a file from "views/" only
    public static function view($resource, $paths = ["views"])
    {
        $file = self::findRecursive($resource, $paths);
        self::requireFile($file);
    }

    // Require file if exists
    private static function requireFile($file)
    {
        if (is_file($file)) {
            require "./$file";
            return printf("\n");
        } else {
            error_log("Error: Req::File() not found!", 0);
        }
    }

    // The current find method in use
    private static function findRecursive($resource, $paths = ["views", "views-elements"])
    {
        foreach ($paths as $path) {
            $iterator = new RecursiveDirectoryIterator("$path");

            foreach (new RecursiveIteratorIterator($iterator) as $file) {
                if (strpos($file, "$resource.php") !== false) {
                    return $file; // break; the foreach loop and exit the function
                }
            }
        }
    }

    /**
     * A find method that works for exact matches, but is not in use
     * 
    private static function findExact($resource, $paths = ["views", "views-elements"])
    {
        foreach ($paths as $path) {
            $file = "$path/$resource";

            if (is_file($file)) {
                return $file; // break; the foreach loop and exit the function
            }
        }
    }
    */
}
