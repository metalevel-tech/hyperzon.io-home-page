/* Documentation and source: https://en.wikipedia.org/wiki/User:Rezonansowy/SimpleLightbox */

/* I'v made some customization. In general I'v changed the exit event from .click to .on */
$(document).on("ready", function () {
  $('body').append('<div id="lightbox" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(a,a,a,0.7);text-align:center;z-index:9999"></div>');
  $('a.image').on("click", function (e) {
    e.preventDefault();

    if ($(this).find('img').attr('src').match('/thumb/')) {
      var src = 'http:' + $(this).find('img').attr('src').replace('/thumb', '').replace(/\/[\-_.%\w]*$/, '');
    } else {
      var src = $(this).find('img').attr('src');
    }

    $('#lightbox').html('<img src="' + src + '" style="padding:14px;background:#fdfdfd;border: 1px solid #ccc;border-bottom-width: 5px;box-shadow: 0 0 30px #222;max-height:70%;max-width:70%;margin-left:170px;margin-bottom:20px;vertical-align:bottom;cursor:pointer;" />').css('line-height', $(window).height() + 'px').fadeIn('slow').on('click', function () {
      $(this).fadeOut('fast');
    });
  });
});