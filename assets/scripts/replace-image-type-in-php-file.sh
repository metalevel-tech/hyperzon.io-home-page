#!/bin/bash -e

# @author    Spas Z. Spasov <spas.z.spasov@metalevel.tech>
# @copyright 2022 Spas Z. Spasov
# @license   https://www.gnu.org/licenses/gpl-3.0.html GNU General Public License, version 3 (or later)
#
# Desc:      Replace '${src_ext}' with '${tgt_ext}' in '${INPUT_FILE}'
#
# Usage:     From the project's root: 
#            assets/scripts/replace-image-type-in-php-file.sh <file.php>
#            assets/scripts/replace-image-type-in-php-file.sh views/01.Home.php
#            assets/scripts/replace-image-type-in-php-file.sh views/01.Home.php 'webp' 'png'

# $1 = in-file.php
# $2 = <source extension> <png> (optional)
# $3 = <target extension> <webp> (optional)

[[ -z "$1" ]] && { echo "Usage: $0 <file.php> [<source extension> <png>] [<target extension> <webp>]" && exit 1; }
[[ -z "${2+x}" ]] && src_ext=".png" || src_ext=".${2}"
[[ -z "${3+x}" ]] && tgt_ext=".webp" || tgt_ext=".${3}"

declare INPUT_FILE="$1"

## Replace the file extensions
function replace_img_extensions() {
    echo -e "--- \nCreate backup:\n---"

    BAK_MARKER="$(date +%Y%m%d_%H-%M-%S).replace-img-type-${src_ext}-${tgt_ext}.php"
    BAK_FILE="backup/${INPUT_FILE##*/}_${BAK_MARKER}"

    cp -v "$INPUT_FILE" "$BAK_FILE"

    echo -e "--- \nProcess the file:\n--- \n${INPUT_FILE}\n---"

    sed "s#${src_ext}#${tgt_ext}#g" "$INPUT_FILE" -i

    echo -e "---\nDone.\n"
}

function user_dialog() {
    echo -ne "Do you want to replace '${src_ext}' with '${tgt_ext}' in '${INPUT_FILE}'? [y/N] "
    read  -p ' ' INPUT
    case $INPUT in
    [Yy]* ) replace_img_extensions;;
    [Nn]* ) echo -e "---\nExit!";;
    * ) echo -e "---\nExit!";;
  esac
}
user_dialog
