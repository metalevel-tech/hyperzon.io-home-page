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
        return print_r("
        <div class=\"video-main-wrapper\">
			<div class=\"video-main\">
				<div class=\"video-container vimeo-embed\" data-video-id=\"$video_id\" data-video-title=\"$title\" data-video-app-id=\"$app_id\">
                    <img src=\"public/images/interface/vimeo-splash.webp\" alt=\"Video Splash\" class=\"video-embed-splash\" width=\"976\" height=\"549\">
                </div>
            </div>
        </div>");
    }
}
