// Rb Menu, Depends on ui-menu.less/ or use ui-menu.css on a separate environment
(function () {
    'use strict';

    $.extend($.fn, {
        Rbmenu: function () {
            $("#nav").before('<div id="menu"> <span>&#9776</span> </div>');

            $("#menu").on('click', function () {
                $("#nav").toggle();
            });

            $(window).resize(function () {
                if (window.innerWidth > 768) {
                    $("#nav").removeAttr("style");
                }
            });
        }
    });
})(jQuery);
// To initiate this function use $('some element').Rbmenu(); Check the custom.js for a better understand.

// Rb Accordion, Depends on ui-accordion.less/or use ui-accordion.css on a separate environment
(function () {
    'use strict';

    $.extend($.fn, {
        Rbaccordion: function () {

            $('.RbaccordionHeading').on('click', function () {
                $('.RbaccordionHeading').removeClass('Rbactive');
                $('.Rbcontent').slideUp();

                if ($(this).next().is(':hidden') === true) {
                    $(this).addClass('Rbactive');
                    $(this).next().slideDown();
                }

            });
            $('.Rbcontent').hide();
        }
    });
})(jQuery);
// To initiate this function use $('some element').Rbaccordion(); Check the custom.js for a better understand.
