# Documentation

## Replace images in a PHP file

Example how to generate WebP images and replace the original images in a PHP file. Note ImageMagick package is required.

```bash
FILE="views/01.Home.php"
assets/scripts/webp-from-php-file-img-list.sh "$FILE" && \
assets/scripts/replace-image-type-in-php-file.sh "$FILE" && \
assets/scripts/generate-and-replace-img-tags.sh "$FILE"
```

What the scripts do:

* `webp-from-php-file-img-list.sh` generates WebP images from the list of images in the PHP file, doesn't have a confirmation dialogue and replaces the existing WebP images;
* `replace-image-type-in-php-file.sh [png] [webp]` replaces the image type in the PHP file, has confirmation dialogue and creates a backup file;
* `generate-and-replace-img-tags.sh` generates the image tags and replaces the existing ones in the PHP file, has confirmation dialogue and creates a backup file;

Note the WebP files are generated with `webp:lossless=true` and `-quality 80`, thus we saving only about 35%. With `webp:lossless=false` and `-quality 70` in use we will save over 70% of the original image size.

Here is a statistic:

```text
286K MicrosoftTeams-image-85_x630.png
115K MicrosoftTeams-image-85_x230.png
 78K MicrosoftTeams-image-85_x230_lossless_q80.webp
  8K MicrosoftTeams-image-85_x230__q70.webp
```

## ImageMagic hints

### Create favicon.ico

Note ImageMagick package is required. From the root of the project run:

```bash
LOGO="assets/resources/hz_logo.png"
convert -background transparent "$LOGO" -clone 0 -resize 32x32  favicon.ico
```

* <https://gist.github.com/azam/3b6995a29b9f079282f3>
* <https://www.imagemagick.org/discourse-server/viewtopic.php?t=33646>
* <https://stackoverflow.com/questions/11423711/recipe-for-creating-windows-ico-files-with-imagemagick>
* <https://github.com/dlemstra/Magick.NET/issues/30>

### Resize an image

```bash
FILE="Input_image.png"
HEIGHT="230"
convert -resize "x${HEIGHT}" "$FILE" "${FILE%.*}_${HEIGHT}.png"
```

### Convert an image to WebP

```bash
FILE="Input_image.png"
convert "$FILE" -quality 80 -strip -define webp:lossless=true -define webp:method=4 "${FILE%.*}.webp"
convert "$FILE" -quality 70 -strip -define webp:lossless=false -define webp:method=4 "${FILE%.*}.webp"
```

### Convert all images in the current directory to WebP

```bash
for FILE in *.png;
do
    convert "$FILE" -quality 80 -strip -define webp:lossless=true -define webp:method=4 "${FILE%.*}.webp"
done
```

```bash
for FILE in *.png;
do
    convert -resize "x300" "$FILE" -quality 80 -strip -define webp:lossless=true -define webp:method=4 "../webp-thumb/${FILE%.*}.webp"
done
```

### Get the image's dimensions

```bash
FILE="Input_image.png"
identify -format "%h x %w \n" "$FILE"
```

## FFmpeg hints

### Check the resolution and fps of all videos in a directory

```bash
for FILE in *.mp4;
do
    echo "$FILE"
    ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "$FILE"
    ffmpeg -i "$FILE" 2>&1 | sed -n "s/.*, \(.*\) fp.*/\1/p"
done
```

### Trim first "n.x" seconds from a video

```bash
FILE="Input_video.mp4"
ffmpeg -ss 1.90 -i "$FILE" -c copy "${FILE%.*}_trimmed.mp4"
```

```bash
ffmpeg -ss 2 -i "mp4/COCOSOLIS - Stretch Mark.mp4" -c:v libvpx-vp9 -b:v 0 -crf 30 -c:a libopus "webm/COCOSOLIS - Stretch Mark.webm"
```

### Convert all videos in a directory to Full HD

```bash
mkdir mp4/

for i in *mp4; 
# do ffmpeg -i "$i" "mp4/${i}"; 
# do ffmpeg -i "$i" -vf scale=1920:1080 "mp4/${i}"; 
do ffmpeg -i "$i" -vf scale=-1:1080 "mp4/${i}"; 
# do ffmpeg -i "$i" -vf scale=-1:720 -c:v libx264 -crf 18 -preset veryslow -c:a copy "mp4/${i}"
done
```

### Convert all videos in a directory to WebM

```bash
mkdir webm/

for i in *mp4;
do ffmpeg -i "$i" -c:v libvpx-vp9 -b:v 0 -crf 30 -c:a libopus "webm/${i%.*}.webm";
done
```

References:

* <https://superuser.com/questions/714804/converting-video-from-1080p-to-720p-with-smallest-quality-loss-using-ffmpeg>
* <https://stackoverflow.com/questions/48341629/ffmpeg-4k-bluray-to-1080p-x264>
* <https://askubuntu.com/questions/110264/how-to-find-frames-per-second-of-any-video-file>
* <https://forum.videohelp.com/threads/397196-Best-FFmpeg-command-for-downscaling-h264-video-from-2160p-1080p>
* <https://superuser.com/questions/841235/how-do-i-use-ffmpeg-to-get-the-video-resolution>
