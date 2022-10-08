<?php

echo "\n\t\t<h1>Posts!</h1>\n";

$posts = BlogPosts::QueryPosts(); 

if ($posts) {
    $div = "+-------+---------------+-------------------------------+-----------------------------------------------+\n";
    
    echo "\t\t<pre>\n";
    echo $div;
    echo "| Id\t| Title\t\t| Description\t\t\t| Content\t\t\t\t\t|\n";
    echo $div;
    
    foreach ($posts as $row) {
        $post_id = $row["post_id"];
        $post_title = $row["post_title"];
        $post_descr = $row["post_descr"];
        $post_content = $row["post_content"];
        echo "| $post_id\t| $post_title\t| $post_descr\t| $post_content\t|\n";
        echo $div;
    }
    echo "\t\t</pre>\n";
}
