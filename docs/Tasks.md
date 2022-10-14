# Tasks and To-do notes

## Text content

- [ ] **The numbers in Hero.php are not the same in the production and stag stage releases!**
- [ ] for **ecom** brand owners ??
- [ ] Optimisation ??
- [ ] optimisation ??
- [ ] converstion ??
- [ ] optimised ??
- [ ] utilise ??
- [x] communucation > communication
- [x] Startegy > Strategy

## Deploy the site at the stage server: Done

- [x] [2h] Apply backward compatibility for PHP 7.4. Now the site runs equally well on PHP 7.4 and PHP 8.0+.
- [x] [1h] Apply some changes related to LiteSpeed web server in `.htaccess` and the PHP code. Now the site runs equally well on Apache2 and LiteSpeed.
- [x] [1:30h] Manual testing and test with [Google PageSpeed Insights: https://website.hzstaging.com/](https://pagespeed.web.dev/report?url=https%3A%2F%2Fwebsite.hzstaging.com%2F&form_factor=mobile)
- [x] In conclusion: enabling the Google Tag Manager script causes 3-9% performance degradation. It adds more than a second to the loading time on mobile devices.

## Google Tag Manager

- [ ] Create at least one tag! Otherwise it will continue to throw errors in the browser's console.
- [x] Enable the scripts via `00.Header.php`. These are the only scripts on the site that are not managed via our ResourceLoader feature.

## Common issues

- [x] [1h] Suppress the HTML comments, use PHP comments instead.
- [x] [1h] Add the `aria-label` attribute to the `<a>` tags.
- [x] [1h] Add the `alt` attribute to the `<img>` tags.
- [ ] [1h] Extract CSS for Menu and Hero and load it separately to increase the first paint time.
- [ ] [2h] Lazy loading for the largest background images.
- [ ] [1h] Fix the layout shift for the counters.

## Gallery Optimization: Done

Reorganize the resources related to `04.BrandDesign.php` and `05.BrandDesign.php`:

- [x] [1h] Reorganize the gallery directory structure and create the `webp` versions of the images.
- [x] [1h] Convert all `mp4` videos to `h264.mp4` and `webm` videos:
  - [x] `public/gallery/videos/` from 329M (4K mp4) to 87M (FHD mp4)
  - [x] `public/gallery/videos/` from 87M (FHD mp4) to 67M (FHD webm)
  - [x] `public/gallery/motion_graphics/` from 104M (FHD mp4) to 84M (FHD mp4)
  - [x] `public/gallery/motion_graphics/` from 84M (FHD mp4) to 67M (FHD webm)
  - [x] `public/gallery/photos/1x1/` from 92M (png) to 55M (webp)
- [x] [2h] Convert all videos (max) to Full HD resolution

Improve the PHP code of the galleries - `GalleryBrandDesign.php` and `GalleryPhotoVideo.php`:

- [x] [1h] remove `<img>` tags an use video `<video poster="img.webp">`
- [x] [2h] change the HTML structure and some class names, apply the necessary Less styles changes.

Create JavaScript code for the galleries avoid using external galleries:

- [x] [8h] Create native JS handler for the video galleries - now when you click on the video full screen player appears; auto play; next and back buttons. Apply the necessary Less styles changes.
- [x] [4h] Create native JS handler for the photo galleries - now when you click on the photo full screen preview appears; auto play; next and back buttons.
- [x] [4h] Synchronize the two scripts, apply the necessary Less styles changes amd tidy up the code.

## MenuMain.php and related resources: Done

- [x] [4h] Rebuild the PHP code for the menu, and the relevant Less styles. Avoid all menu entries duplications in the mobile and desktop menus.
- [x] [2h] Rebuild the AJAX JavaScript. Set proper states for the browser window back and forward buttons.
- [x] [2h] Manual quality testing and behavior improvements.

## MenuFooter.php

- [x] [30m] `<a href="#" onclick="return false;">` -> `<a role="button">`
- [ ] [2h] Integrate the footer menu with the AJAX JavaScript.

## PHP MVC

- [ ] [1d*] **Create documentation** for the PHP MVC framework, fix all issues discovered by [Codacy](https://app.codacy.com/).
- [ ] [4h*] Create PHP filter to output pretty HTML code.

## PHP MVC and AJAX Java Script menu: Done

- [x] [16h] Create a new PHP framework for the site. The framework is based on the MVC pattern. The framework is not a full-fledged framework, but it is enough for the site. It is also absolute necessary for dynamic content as blog posts fetched from a database, etc.
- [x] [16h] Split the existing site code into the MVC framework.
- [x] [6h] Create a new AJAX JavaScript menu. And turn the site into a single page application.
- [x] [6h] Overall testing, bug fixing, performance tweaks.

## Initial fixes of some issues: Done

**1.** Replace all PHP short open tags `<?` -> `<?php`, because it is disabled by default in PHP 7+, and most of the host providers wont enable it. And fix some other PHP typos.

```bash
find . -type f -name '*.php' -print0 | xargs -0 sed 's/<? /<?php /g'  #-i
```

**2.** Fix a typo in `public/css/styles.less`. And tidy up the file.

```less
// body when (@mode = debug) or (@mode = resolution) 
body when ((@mode = debug) or (@mode = resolution)) {
```

**3.** Replace `lastest-blog` with `latest-blog`.

```bash
grep -rn 'lastest-blog'
grep -rlZ 'lastest-blog' | xargs -0 sed 's/lastest-blog/latest-blog/g' #-i
grep -rn 'latest-blog'
```

**4.** Rebuild the cover video. And change the relevant code it in the file `hero.php`.

- Load the video in Camtasia or other video editing tool.

- Crop the video to 15 seconds!

- Use the first 3 seconds to make 3 seconds transition (blur effect) at the end.

- Remove the first 3 seconds, thus the beginning of the video is the next frame at the end of the transition. The final length of the video is 12 seconds.

- Export the video in 720p (instead of 1080p).

- Trim the video to 12 seconds (once again) in CLI - [reference](https://stackoverflow.com/questions/23295278/looping-html5-video-flashes-a-black-screen-on-loop.)

- Extract a frame for cover image in the video tag - [reference](https://stackoverflow.com/questions/4425413/how-to-extract-the-1st-frame-and-restore-as-an-image-with-ffmpeg).

**5.** Fix the horizontal scroll-bar. By replacing `width: 100vw;` with `width: 100%;` in `public/css/styles.less`. In addition the script `normalize-after.js` and the style sheet `normalize-after.css` has been created.
