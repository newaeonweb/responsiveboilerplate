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

<<<<<<< HEAD
// Rb Tabs, Depends on ui-tabs.less/or use ui-tab.css on a separate environment
(function () {
    'use strict';

    $.extend($.fn, {
        Rbtabs: function () {

            $(this).find('div').eq(0).addClass('listTabs');
            $(this).find('div').eq(1).addClass('contentTabs');

            var tabsList = '.listTabs';
            var tabContent = '.contentTabs';

            $(tabContent + ' div').hide();
            $(tabContent + ' div:first-child').show();

            $(tabsList + ' a').on('click', function () {
                $(tabsList + ' a').removeClass('selected');
                $(this).addClass('selected');

                $(tabContent + ' div').hide();

                $(tabContent + ' ' + $(this).attr('href')).show();
                return false;
            });
        }
    });
})(jQuery);
// To initiate this function use $('some element').Rbtabs(); Check the custom.js for a better understand.

=======
>>>>>>> Rb-package--beta-0.0.1
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
<<<<<<< HEAD

// Rb Modal, Depends on ui-modal.less/ or use ui-modal.css on a separate environment
(function () {
    'use strict';

    $.extend($.fn, {
        Rbmodal: function () {
            //$('.Rb-modal').hide();
            $('#open-modal').on('click', function () {
                $('<div id="overlay" style="width:1269px;height:780px; background-color:rgba(0,0,0,0.3); position: fixed; top:0;left:0; z-index:2000"></div>').appendTo('body');
                $(".Rb-modal").animate({
                    top: '+50'
                }, 100);
            });
            $('#close-modal').on('click', function () {
                $('#overlay').remove();
                $(".Rb-modal").animate({
                    top: '-500'
                }, 100);
            });
        }
    });
})(jQuery);
// To initiate this function use $('some element').Rbmodal(); Check the custom.js for a better understand.
=======
>>>>>>> Rb-package--beta-0.0.1
