<?php
/**
 * References:
 *  - https://phpisset.com/php-escape-output
 *  - https://www.sitepoint.com/community/t/escape-function/49498/20
 *  - https://stackoverflow.com/questions/129677/how-can-i-sanitize-user-input-with-php
 *  - https://bobby-tables.com/php
 *  - https://www.php.net/manual/en/function.htmlspecialchars.php
 *  - https://www.php.net/manual/en/function.htmlentities.php
 */

 function escape_html_output($string) {
    return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
 };
