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
