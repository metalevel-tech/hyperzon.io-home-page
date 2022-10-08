<?php

class BlogPosts extends Controller
{
    public static function queryPosts() {
        return self::query("SELECT * FROM posts");
    }
}
