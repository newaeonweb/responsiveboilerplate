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
