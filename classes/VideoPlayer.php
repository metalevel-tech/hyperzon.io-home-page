<?php

/**
 * Will be updated with lazy loading feature.
 * 
 * Here are generated placeholders, which provides data for the video to be embed.
 * The actual embedding is done via the function 'videoLoader()' from 'main.js'.
 * 
 */

class VideoPlayer
{
    public static function vimeo($video_id, $title = "Hyperzon video on Vimeo", $app_id = "58479")
    {
        echo "
        <div class=\"video-main-wrapper\">
			<div class=\"video-main\">
				<div class=\"video-container vimeo-embed\" data-video-id=\"$video_id\" data-video-title=\"$title\" data-video-app-id=\"$app_id\">
                    <img src=\"public/images/interface/vimeo-splash.webp\" alt=\"Video Splash\" class=\"video-embed-splash\" width=\"976\" height=\"549\">
                </div>
            </div>
        </div>";
    }

    // This is the ugly solution, but it works.
    // public static function generateUgly($video_id, $title, $app_id = "58479")
    // {
    //     echo "
    //     <div class=\"video-main-wrapper\">
    //         <div class=\"video-main\">
    //             <div style=\"padding:56.25% 0 0 0;position:relative;\">
    //                 <iframe src=\"https://player.vimeo.com/video/$video_id&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=$app_id\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"$title\"></iframe>
    //             </div>
    //             <script src=\"https://player.vimeo.com/api/player.js\"></script>
    //         </div>
    //     </div>";
    // }
}
