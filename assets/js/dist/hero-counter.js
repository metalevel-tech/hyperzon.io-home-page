/**
 * Hook 'hero'
 *  @ Resources.php
 *  @ includes/Hero.php
 */
(function () {
  $('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({
      countNum: $this.text()
    }).animate({
      countNum: countTo
    }, {
      duration: 3000,
      easing: 'easeOutCubic',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum); //alert('finished');
      }
    });
  });
})();