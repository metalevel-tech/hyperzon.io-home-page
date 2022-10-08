# To do notes

## Text content

- [ ] **The numbers in Hero.php are not the same in the production and stag stage releases!**
- [ ] Optimisation ??
- [ ] optimisation ??
- [ ] converstion ??
- [ ] optimised ??
- [x] communucation > communication
- [x] Startegy > Strategy

## `04.BrandDesign.php`

- [ ] [1d] Deal with the **external gallery scripts** - **create own gallery** script
- [ ] [30m] Deal with the `<br /><br /><br /><br />` tags

## `GalleryBrandDesign.php`

- [ ] [2h] Improve the for-loops logic
- [ ] [1h] Reorganize the gallery directory structure: `.png` > `.webp` - according to the **own gallery** logic

## `MenuFooter.php`

- [ ] [5m] `<a href="#" onclick="return false;">` -> `<a role="button">`
- [ ] [5m] Suppress the HTML comments

## Google Tag Manager

- [ ] Create at least one tag!
- [ ] Enable the scripts via `00.Header.php`

## PHP MVC

- [ ] [4h] Create PHP filter to output pretty HTML code

## [Done!] Initial fixes of some issues

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
