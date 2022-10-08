<?php

/**
 * Req - require/load parts from includes/*.php and views/*.php
 */

class Req
{
    // Require a file from "views/" or "includes/"
    public static function resource($resource, $paths = ["views", "includes"])
    {
        $file = self::findRecursive($resource, $paths);
        self::requireFile($file);
    }
    
    // Require a file from "includes/" only
    public static function include($resource, $paths = ["includes"])
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
        if (file_exists($file)) {
            require($file);
            echo "\n";
        } else {
            echo "Error: File not found: $resource";
        }
    }

    // The current method in use
    private static function findRecursive($resource, $paths = ["views", "includes"])
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

    // A method that works for exact matches, but is not in use
    private static function findExact($resource, $paths = ["views", "includes"])
    {
        foreach ($paths as $path) {
            $file = "$path/$resource";

            if (file_exists($file)) {
                return $file; // break; the foreach loop and exit the function
            }
        }
    }
}
