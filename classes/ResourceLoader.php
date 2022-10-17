<?php

/**
 * Lod frontend resources as: min.js, min.css [js, css, less] and other.
 * The resources to be loaded should be declared in Resources.php,
 * then they will be loaded via views/* and includes/*,
 * with respect of the chosen hook.
 *
 * $hooks
 *   The hooks are user defined. However in the project are defined the following hooks:
 *   > "head"   - the resource is loaded at the end of the <head> tag via includes/Header.php
 *   > "body"   - the resource is loaded at the begging of the <body> tag via includes/Header.php
 *   > "footer" - the resource is loaded at the end of the <body> tag via includes/Footer.php
 *
 *   You can define your own Hooks and by placing `ResourceLoader::hook("hook-name");` somewhere in the code,
 *   Then attach resources to them by `ResourceLoader::add("hook-name");` within `Resources.php`.
 *
 * $resource
 *   In this parameter should be defined the resource file to be loaded with its full path.
 *   Or HTTP/S address.
 *
 * $options
 *   The HTML tag <script>/<style> loading options. See also: https://wiki.metalevel.tech/wiki/JavaScript_Course_8:_DOM_and_Browser
 *
 * $type
 *   [text/css] - the default value for <link type=...>, see https://www.w3schools.com/tags/att_link_type.asp
 *   [text/javascript] - the default value for <script type=...>, see https://www.w3schools.com/tags/tag_script.asp
 *
 * $embed
 *   true  - load the resource as inline style/script
 *   false - [default] load the resource as link/script
 *
 * $active
 *   true  - [default] load the resource
 *   false - don't load the resource
 *
 * $priority
 *   [99] - you can use integer number to define the priority (order) of the resource within a hook,
 *          lower number -> higher priority
 *
 * $kind
 *    [auto] - automatically determinate it is CSS/LESS or JavaScript, and choose the relevant HTML <tag>
 *    script,style,link - override the auto generated value,
 *
 *    Note: 'link' and 'style' will produce the same output <link> tag, but the keyword
 *          'link' is used in the logic below to distinct .scc/.less from the other resources as .ico, etc.
 *
 * Examples of usage:
 *   Examples are provided in the file Resources.php within the root directory of the project.
 */

class ResourceLoader
{
    // This is our accumulator of resource definitions
    private static $available_resources = [];

    /**
     * Options:
     *   'less' - when there is invoked .less resource this will be changed to 'true'
     *
     *    @self::addLessSupport(), @self::add()
     */
    private static $options = [
        "less" => false
    ];

    /**
     *  Add a resource to the list, see Resources.php
     */
    public static function add(
        $hook,
        $resource,
        $type = "default",
        $options = "default",
        $active = true,
        $embed = false,
        $priority = 99,
        $kind = "auto"
    ) {
        if (!$active) return;

        // Defaults: $kind
        if ($kind = "auto") {
            $file = explode("?", $resource);
            $file = reset($file);
            $ext = explode(".", $file);
            $ext = end($ext);

            // fallback for resources as href="https://fonts.googleapis.com"
            $kind = "link";
            if ($ext == "js") {
                $kind = "script";
            } elseif ($ext == "css") {
                $kind = "style";
            } elseif ($ext == "less") {
                $kind = "style";
                if (!self::$options["less"]) {
                    self::$options["less"] = true;
                    self::addLessSupport();
                }
            }
        }

        // Defaults: $type
        if ($kind == "script" && $type == "default") {
            $type = "text/javascript";
        } elseif ($kind == "style" && $type == "default") {
            $type = "text/css";
        } elseif ($kind == "link" && $type == "default") {
            $type = false;
        }

        // Defaults: $options
        if ($kind == "script" && $options == "default") {
            $options = "defer";
        } elseif ($kind == "style" && $options == "default") {
            $options = false;
        } elseif ($kind == "link" && $options == "default") {
            $options = "defer crossorigin";
        }

        // Override the 'embed' option if the resource is web address
        if (preg_match("/^(http|\/\/)/", $resource)) {
            $embed = false;
        }

        self::$available_resources[] = [
            "hook" => $hook,
            "resource" => $resource,
            "options" => $options,
            "type" => $type,
            "embed" => $embed,
            "active" => $active,
            "priority" => $priority,
            "kind" => $kind
        ];
    }

    // Output the resources by a selected hook, see includes/{Header,Footer}.php
    public static function hook($hook)
    {
        $hooked_resources = [];

        foreach (self::$available_resources as $resource) {
            if (($resource["hook"] == $hook && $resource["active"])) {
                $hooked_resources[] = $resource;
            }
        }

        // Sort the array
        usort($hooked_resources, function ($current, $next) {
            return ($current["priority"] <= $next["priority"]) ? -1 : 1;
        });

        foreach ($hooked_resources as $resource) {
            self::tagGenerator($resource);
        }
    }

    /**
     * Generate the HTML tags
     *
     *   @self::hook()
     *
     *   $resource["kind"] = "style"|"script"|"link"
     *   $resource["embed"] = true|false
     */
    private static function tagGenerator($resource = [])
    {
        $output = '';

        if ($resource["kind"] == "style") {
            if ($resource["embed"]) {
                $output = printf("<style type=\"%s\">/* Src: %s */\n %s \n\t</style>\n\t", $resource["type"], $resource["resource"], self::readFile($resource["resource"]));
            } else {
                $output = printf("<link href=\"%s\" type=\"%s\" %s />\n\t", $resource["resource"], $resource["type"], $resource["options"]);
            }
        } elseif ($resource["kind"] == "script") {
            if ($resource["embed"]) {
                $output = printf("<script type=\"%s\">/* Src: %s */\n %s \n\t</script>\n\t", $resource["type"], $resource["resource"], self::readFile($resource["resource"]));
            } else {
                $output = printf("<script src=\"%s\" type=\"%s\" %s></script>\n\t", $resource["resource"], $resource["type"], $resource["options"]);
            }
        } elseif ($resource["kind"] == "link" && !$resource["embed"]) {
            if ($resource["type"]) {
                $output = printf("<link href=\"%s\" type=\"%s\" %s />\n\t", $resource["resource"], $resource["type"], $resource["options"]);
            } else {
                $output = printf("<link href=\"%s\" %s />\n\t", $resource["resource"], $resource["options"]);
            }
        }

        escape_html_output($output);
    }

    /**
     * Read the content of the local resources,
     * when we want to embed them in the HTML code.
     *
     *   @self::tagGenerator()
     */
    private static function readFile($resource)
    {
        $file = explode("?", $resource);
        $file = APP_ROOT . reset($file);

        if (is_file($file)) {
            // $fileRead = fopen($file, "r");
            // $fileContent = fread($fileRead, filesize($file));
            // fclose($fileRead);
            // return $fileContent;
            return file_get_contents($file);
        } else {
            error_log("Unable to open file '$file'!", 0);
        }
    }

    /**
     * Add online support for .less files
     *
     *   @self::add()
     */
    public static function addLessSupport()
    {
        /**
         * PHP 8.0+
         // if (self::$options["less"]) {
         self::add("head", "/assets/vendor/less.conf.js",  active:true, embed: true,  priority: 10001);
         self::add("head", "/assets/vendor/less.min.js",   active:true, embed: false, priority: 10002, options: false);
         self::add("head", "/assets/vendor/less.watch.js", active:true, embed: true,  priority: 10003);
         // }
         */

        self::add("head", "/assets/vendor/less.conf.js",   "default", "default", true, true,  10001);
        self::add("head", "/assets/vendor/less.min.js",    "default", false,     true, false, 10002);
        self::add("head", "/assets/vendor/less.watch.js",  "default", "default", true, true,  10003);
    }
}
