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

### Get the image's dimensions

```bash
FILE="Input_image.png"
identify -format "%h x %w \n" "$FILE"
```
