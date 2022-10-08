#!/bin/bash -e

# @author    Spas Z. Spasov <spas.z.spasov@metalevel.tech>
# @copyright 2022 Spas Z. Spasov
# @license   https://www.gnu.org/licenses/gpl-3.0.html GNU General Public License, version 3 (or later)
#
# Desc:      Generate list of 'complete' <img> tags for all <img> tags in a given PHP file, then ask for replace
#
# Usage:     From the project's root:
#            assets/scripts/generate-and-replace-img-tags.sh <file.php>
#            assets/scripts/generate-and-replace-img-tags.sh views/01.Home.php
#
# Refers:    https://unix.stackexchange.com/questions/288184/how-do-i-grab-image-dimensions-using-imagemagick-cli
#            https://stackoverflow.blog/2022/03/28/picture-perfect-images-with-the-modern-element/
#            https://web.dev/browser-level-image-lazy-loading/#avoid-lazy-loading-images-that-are-in-the-first-visible-viewport
#            https://web.dev/browser-level-image-lazy-loading/#the-loading-attribute
#            https://web.dev/priority-hints/

# $1 = in-file.php
[[ -z "$1" ]] && { echo "Usage: $0 <file.php>" && exit 1; }

declare INPUT_FILE="$1"
declare -a IMAGE_LIST
declare -a ORIG_TAG_LIST
declare -a NEW_TAG_LIST

## Get the list of the images within the <img> tags in the PHP file
PARSE_IMAGE_LIST=("$(grep -Po '(?<=img src=").*?(?=")' "$INPUT_FILE")")
SAVE_IFS=$IFS
IFS=$'\n'
IMAGE_LIST=($PARSE_IMAGE_LIST)
IFS=$SAVE_IFS
# List the images along with their size
echo -e "List of the images along with their size:\n---"
for IMG_FILE in "${IMAGE_LIST[@]}"; do
    printf '%s\t\t%s\n' "$(identify -format "%wx%h" "$IMG_FILE")" "$(du -sh "$IMG_FILE")"
done
echo -e "---\n"

## Get the list of the original <img> tags in the PHP file
PARSE_ORIG_TAG_LIST=("$(grep -Po '<img src=".*?/>' "$INPUT_FILE")")
SAVE_IFS=$IFS
IFS=$'\n'
ORIG_TAG_LIST=($PARSE_ORIG_TAG_LIST)
IFS=$SAVE_IFS
#List the images along with their size
echo -e "List of the original <img> tags in the PHP file:\n---"
for IMG_TAG in "${ORIG_TAG_LIST[@]}"; do
    echo -e "$IMG_TAG"
done
echo -e "---\n"

## Get the list of the new  <img> tags
echo -e "List of the new <img> tags:\n---"
for IMG in "${IMAGE_LIST[@]}"; do
    NEW_TAG_LIST+=(
        "$(
            printf '<img src="%s" width="%s" height="%s" alt="Media File %s" loading="lazy" decoding="async" />' \
                "$IMG" "$(identify -format "%w" "$IMG")" "$(identify -format "%h" "$IMG")" ""${IMG##*/}""
        )"
    )
    echo -e "${NEW_TAG_LIST[-1]}"
done
echo -e "---\n"

## Replace the original <img> tags with the new <img> tags
function replace_img_tags() {
    echo -e "--- \nCreate backup:\n---"

    BAK_MARKER="$(date +%Y%m%d_%H-%M-%S).gen-img-tags.php"
    BAK_FILE="backup/${INPUT_FILE##*/}_${BAK_MARKER}"

    cp -v "$INPUT_FILE" "$BAK_FILE"

    echo -e "--- \nProcess the file:\n--- \n${INPUT_FILE}\n---"

    for ((i = 0; i < ${#IMAGE_LIST[@]}; i++)); do
        sed "s#${ORIG_TAG_LIST[i]}#${NEW_TAG_LIST[i]}#g" "$INPUT_FILE" -i &&
            echo "${i}: '${ORIG_TAG_LIST[i]}' -> '${NEW_TAG_LIST[i]}'"
    done
    echo -e "---\nDone.\n"
}

function user_dialog() {
    echo -ne "Do you want to replace the original <img> tags with the new <img> tags? [y/N] "
    read -p ' ' INPUT
    case $INPUT in
    [Yy]*) replace_img_tags ;;
    [Nn]*) echo -e "---\nExit!" ;;
    *) echo -e "---\nExit!" ;;
    esac
}
user_dialog
