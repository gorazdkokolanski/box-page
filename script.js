(function ($) {
    "use strict";

    $(function () {

      var msie6 = $.browser == 'msie' && $.browser.version < 7;
      try {
        if (!msie6) {
          var top = $('#comment').offset().top - parseFloat($('#comment').css('margin-top').replace(/auto/, 0));
          $(window).scroll(function (event) {
            // what the y position of the scroll is
            var y = $(this).scrollTop();

            // whether that's below the form
            if (y >= top) {
              // if so, add the fixed class
              $('#comment').addClass('fixed');
            } else {
              // otherwise remove it
              $('#comment').removeClass('fixed');
            }
          });
        }
      } catch (error) { }
    });

    $(document).ready(function () {

      $('#submit').on('click', function () {
        $('#loading').css('display', 'block');
        $('#form').delay(2000).hide(0);
        $('.comment-thanks').delay(2200).show(0);
      });

      $('.header_search input[type="submit"]').attr('value', '');

      $('#responsive-menu-button').sidr({
        name: 'sidr-main',
        source: '.main-nav',
        side: 'right'
      });

      /* Existing commented-out code remains unchanged */

      setTimeout(function () {

        var thisUrl = window.location.href;
        try {
          if (thisUrl.indexOf('s1') > -1) {
            $('a').each(function () {
              var url = $(this).attr('href');

              if (url != '' && url != undefined && url != '#') {
                try {
                  if (url.indexOf('value') > -1) {
                    var url_value = $.urlParam('s1');
                    url = url.replace('{value}', url_value);
                    $(this).attr('href', url);
                  }
                } catch (error) { }
              }
            });
          } else if (thisUrl.indexOf('aff_sub') > -1) {
            $('a').each(function () {
              var url = $(this).attr('href');

              if (url != '' && url != undefined && url != '#') {
                try {
                  if (url.indexOf('value') > -1) {
                    var url_value = $.urlParam('aff_sub');
                    url = url.replace('{value}', url_value);
                    $(this).attr('href', url);
                  }
                } catch (error) { }
              }
            });
          } else if (thisUrl.indexOf('utm_campaign') > -1) {
            $('a').each(function () {
              var url = $(this).attr('href');

              if (url != '' && url != undefined && url != '#') {
                try {
                  if (url.indexOf('value') > -1) {
                    var url_value = $.urlParam('utm_campaign');
                    url = url.replace('{value}', url_value);
                    $(this).attr('href', url);
                  }
                } catch (error) { }
              }
            });
          } else if (thisUrl.indexOf('voluumdata') > -1) {
            $('a').each(function () {
              var url = $(this).attr('href');

              if (url != '' && url != undefined && url != '#') {
                try {
                  if (url.indexOf('value') > -1) {
                    var url_value = $.urlParam('voluumdata');
                    url = url.replace('{value}', url_value);
                    $(this).attr('href', url);
                  }
                } catch (error) { }
              }
            });
          } else if (thisUrl.indexOf('cep') > -1) {
            // Added code to handle 'cep' parameter
            $('a').each(function () {
              var url = $(this).attr('href');

              if (url != '' && url != undefined && url != '#') {
                try {
                  if (url.indexOf('value') > -1) {
                    var url_value = decodeURIComponent($.urlParam('cep'));
                    url = url.replace('{value}', url_value);
                    $(this).attr('href', url);
                  }
                } catch (error) { }
              }
            });
          }
        } catch (error) { }
      }, 100);

      try {
        new WOW().init();
      } catch (error) { }

      // Updated to handle cases where the parameter might not be found
      $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results ? results[1] : null;
      }

    });
})(jQuery);
