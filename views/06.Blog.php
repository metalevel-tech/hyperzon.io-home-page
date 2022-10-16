<div class="backgr-white backgr-white--end-01 section-home-01">
    <div class="backgr-white__content">
        <?php
        Req::element("AsSeenOnBlack");
        ?>
    </div>
</div>
<div class="backgr-white backgr-white--default" style="margin-top: -200px; padding-top: 280px;">
	<div class="backgr-white__content section-home-05">
        <div class="wrapper-1366">
            <?php
            Req::element("BlogPostsLatest");
            ?>
        </div>
   </div>
</div>
<?php
print_r("\n\t\t<h1>Posts!</h1>\n");

$posts = BlogPosts::queryPosts();

if ($posts) {
    $div = "+-------+---------------+-------------------------------+-----------------------------------------------+\n";

    print_r("\t\t<pre style=\"color: black;\">\n");
    print_r($div);
    print_r("| Id\t| Title\t\t| Description\t\t\t| Content\t\t\t\t\t|\n");
    print_r($div);

    foreach ($posts as $row) {
        $post_id = $row["post_id"];
        $post_title = $row["post_title"];
        $post_descr = $row["post_descr"];
        $post_content = $row["post_content"];
        print_r("| $post_id\t| $post_title\t| $post_descr\t| $post_content\t|\n");
        print_r($div);
    }
    print_r("\t\t</pre>\n");
}
