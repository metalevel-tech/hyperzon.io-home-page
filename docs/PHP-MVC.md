# PHP Model View Controller (MVC)

Sample example of PHP MVC. It is like a tutorial and follows the tutorial ["Simple MVC in PHP"](#references) provided by howCode at YouTube, but it is updated and __compatible with PHP 8.1__. Also some other features are added. However, despite it is little bit outdated, I strongly recommend you to watch the tutorial ["Simple MVC in PHP"](#references) which is just 20 minutes long.

The branches are named `Stage-X...` and they represent the consequential steps that lead to the final state. In the following sections of this read-me are provided the reverences about certain things I've researched while studying this technique.

## References

* howCode at YouTube: [Simple MVC in PHP (1/4) - Routing](https://youtu.be/DpbUqJcch0Y)
* howCode at YouTube: [Simple MVC in PHP (2/4) - Classes](https://youtu.be/04aTM01Y3uQ)
* howCode at YouTube: [Simple MVC in PHP (3/4) - Views](https://youtu.be/aUvfzHHTKJU)
* howCode at YouTube: [Simple MVC in PHP (4/4) - Databases](https://youtu.be/DpbUqJcch0Y)
* howCode at GitHub: [how - helper classes](https://github.com/howCodeORG/how)
* PHP Documentation: [The PDO class](https://www.php.net/manual/en/class.pdo.php#89019). Represents a connection between PHP and a database server.

## AJAX Menu References

* Stack Overflow: [__How do I modify the URL without reloading the page?__](https://stackoverflow.com/a/3354511/6543935)
* Stack Overflow: [Get local href value from anchor (a) tag](https://stackoverflow.com/a/15439946/6543935)
* Metalevel.tech on GitHub: [Extended example of `Promise` `fetch`, `async` and `await`](https://github.com/metalevel-tech/js-promises-typewriter/blob/master/app/public/main-two-speed-params.js#L451)
* Babel on GitHub: [Uncaught Reference Error: regenerator Runtime is not defined](https://github.com/babel/babel-loader/issues/484) Solution: `babel --plugins @babel/plugin-transform-regenerator ...`

## ResourceLoader References

* W3S at GitHub: [Clarify `preload` with relation to `async` and `defer`?](https://github.com/w3c/resource-hints/issues/13)

## Create database

In the directory [`assets/sql`](assets/sql/) are available two manual like SQL files. We can suppress the comments and use them as SQL scrips to create or remove the `sample_db` MySQL database used in this tutorial.

```bash
sed -r '/^(-- |$)/d' sample_db_create.sql | sudo mysql
sed -r '/^(-- |$)/d' sample_db_remove.sql | sudo mysql
```

According to the documentation these comments shouldn't make a problem, but in my case the do.

### References about MySQL

* [MySQL Documentation](https://dev.mysql.com/doc/)
* MySQL 8.0 Reference Manual: [Creating and Using a Database](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
* MySQL 8.0 Reference Manual: [Data Types](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)
* Learn SQL: [An Overview of MySQL Data Types](https://learnsql.com/blog/mysql-data-types/)
* Stack Overflow: [How much UTF-8 text fits in a MySQL "Text" field?](https://stackoverflow.com/a/4420195/6543935)

## Tweak .htaccess

The example provided in the beginning of the tutorial [Simple MVC in PHP (1/4) - Routing](https://youtu.be/DpbUqJcch0Y) is incomplete, because sometimes we need to change some other options and also to serve some static files and avoid unnecessary additional processing. In the first section of the current [.htaccess](./.htaccess) file some of these requirements are covered.

### References about .htaccess

* Stack Overflow [Note about the `-MultiViews` option](https://stackoverflow.com/a/20685686/6543935)

## Auto load Classes

`__autoload()` is no longer supported, use `spl_autoload_register()` instead.

```log
[Fri Sep 30 13:26:51.015401 2022] [proxy_fcgi:error] [pid 2629300] [client 192.168.1.110:41546] AH01071: Got error 'PHP message: PHP Fatal error:  __autoload() is no longer supported, use spl_autoload_register() instead in /var/www/php-mvc.example.com/index.php on line 16'
```

The relevant code of [Simple MVC in PHP (1/4) - Routing](https://youtu.be/DpbUqJcch0Y) should be changed to:

```php
spl_autoload_register(function($class) {
    include 'classes/' . $class . '.php';
});
```

### References about `spl_autoload_register()`

* PHP Manual: [Autoloading Classes](https://www.php.net/manual/en/language.oop5.autoload.php)
* PHP Manual: [SPL Functions > spl_autoload_register](https://www.php.net/manual/en/function.spl-autoload-register.php)
* Stack Overflow: [How to fix: Cannot redeclare spl_autoload_register()?](https://stackoverflow.com/a/59049684/6543935)
* Stack Overflow: [How to use spl_autoload() instead of __autoload()](https://stackoverflow.com/a/10687888/6543935)
* W3School: [PHP `include` and `require` Statements](https://www.w3schools.com/php/php_includes.asp)