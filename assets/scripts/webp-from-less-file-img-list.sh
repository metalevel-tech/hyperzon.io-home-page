#!/bin/bash 

# @author    Spas Z. Spasov <spas.z.spasov@metalevel.tech>
# @copyright 2022 Spas Z. Spasov
# @license   https://www.gnu.org/licenses/gpl-3.0.html GNU General Public License, version 3 (or later)
#
# Desc:      Convert all PNG files listed ina given PHP file to WebP
#
# Usage:     From the project's root:
#            assets/scripts/webp-from-php-file-img-list.sh <file.php>
#            assets/scripts/webp-from-php-file-img-list.sh views/01.Home.php
#
# Refers:    https://stackoverflow.com/questions/55656137/is-webp-format-more-efficient-than-jpeg
#            https://imagemagick.org/script/webp.php

# $1 = in-file.php
# --- $2 = "relative path to images directory/" (optional)

[[ -z "$1" ]] && { echo "Usage: $0 <file.php> [\"relative path to images directory/\"]" && exit 1; }
# --- [[ -z "${2+x}" ]] && img_dir="assets/images/" || img_dir="${2}"

FILE="$1"

# Get the list of PNG files from the PHP file
# ' url(/public/images/shape_logo_left.png) '
IMAGE_FILES="$(grep -Po '(?<=url\().*?(?=\))' "$FILE" | grep -Pv '(^#|\.webp|\.svg)' | sed -e 's/\?.*$//' -e 's/"//g')"

echo $IMAGE_FILES

# List the PNG files along with their size
for IMG_FILE in $IMAGE_FILES
do
    du -sh "$IMG_FILE"
done
echo "---"

# Convert the PNG file to WebP
for IMG_FILE in $IMAGE_FILES
do
    # convert "$IMG_FILE" "${IMG_FILE%.*}.webp"
    convert "$IMG_FILE" -quality 80 -strip -define webp:lossless=true -define webp:method=4 "${IMG_FILE%.*}.webp"
done

for IMG_FILE in $IMAGE_FILES
do
    # Convert the PNG file to WebP
    du -sh "${IMG_FILE%.*}.webp"
done
echo -e "--- \nDone.\n"
