# Production setup

Here are the steps how to prepare the site for production:

- [x] Run `npm run build` to build the Scripts and the Styles.
- [x] Edit [`index.php`](../index.php) and switch from `ResourcesDev.php` to `Resources.php`.
- [x] Edit [`Resources.php`](../Resources.php) and change the value of the variable `$version`.
- [ ] Edit [`views/00.Header.php`](../views/00.Header.php) and enable Google Tag Manager.
- [x] Edit [`.htaccess`](../.htaccess) and enable the compression and file caching.

Test the site with:

- [ ] [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) and
- [ ] [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/).
