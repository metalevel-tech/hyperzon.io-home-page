<?php

/**
 * This is the base controller,
 * all controllers/*.php inherit this class.
 */

class Controller extends Database
{
    public static function createView(
        $view = "Home",
        $header = "Header",
        $footer = "Footer"
    ) {
        if (isset($_GET["content"])) {
            Req::view($view);
        } else {
            Req::view($header);
            Req::view($view);
            Req::view($footer);
        }
    }
}
