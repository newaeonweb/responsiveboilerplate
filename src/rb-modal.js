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
