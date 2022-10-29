/**
 * Calculate the real height of the client window (for mobile devices)
 *
 * References:
 *  - https://github.com/metalevel-tech/metalevel-tech.home.page/blob/master/src/App.js#L31
 *  - https://github.com/metalevel-tech/metalevel-tech.home.page/blob/master/src/index.css#L265
 *  - https://stackoverflow.com/questions/29697883/100-height-on-mobile-browser-using-css
 *
 * Check "assets/css/src/normalize-after.css" for the CSS part of this snippet
 */

(function () {
  function calculateHWUnits() {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    let vmin = Math.min(vh, vw);
    vh = parseFloat(vh).toFixed(2);
    vw = parseFloat(vw).toFixed(2);
    vmin = parseFloat(vmin).toFixed(2);
    document.documentElement.style.setProperty("--mlt-vh", `${vh}px`);
    document.documentElement.style.setProperty("--mlt-vw", `${vw}px`);
    document.documentElement.style.setProperty("--mlt-vmin", `${vmin}px`);
  }
  calculateHWUnits();
  window.addEventListener("resize", calculateHWUnits);
})();