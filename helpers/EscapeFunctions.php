<?php
/**
 * References:
 *  - https://phpisset.com/php-escape-output
 *  - https://www.php.net/manual/en/function.htmlspecialchars.php
 *  - https://www.php.net/manual/en/function.htmlentities.php
 */

 function escape_html_output($string) {
    return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
 };
