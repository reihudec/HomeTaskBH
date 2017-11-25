//Занятие 8 

(function ($) {
    $(document).ready(function () {
        $('.lp-tabs').each(function () {
            var tabs = $(this),
                tabsTitlesNames = [];
            console.log(tabsTitlesNames);
            tabs.find('div[data-tab-title]').each(function () {
                tabsTitlesNames.push($(this).attr('data-tab-title'));
            }).addClass('lp-tab');
            tabs.wrapInner('<div class="lp-tabs-content"></div>');

            tabs.prepend('<div class="lp-tabs-titles"><ul></ul></div>');
            var tabsTitles = tabs.find('.lp-tabs-titles'),
                tabsContent = tabs.find('.lp-tabs-content'),
                tabsContentTabs = tabsContent.find('div[data-tab-title]');

            tabsTitlesNames.forEach(function (value) {
                tabsTitles.find('ul').append('<li>' + value + '</li>');

            });

            var tabsTitelsItems = tabsTitles.find('ul li');

            tabsTitelsItems.eq(0).addClass('active');
            tabsContentTabs.eq(0).addClass('active').show();

            tabsContent.height(tabsContent.find('.active').outerHeight());

            //код домашнего задания
            tabs.append('<div class="lp-tabs-footer"><span id="1">Активная вкладка: </span><span id="2"></span></div>');
            var a = tabsContent.find('.active').attr('data-tab-title');
            $('.lp-tabs-footer span#2').append(a);
            var b = tabsContent.find('.active').index() + 1;
            $('.lp-tabs-footer span#2').append(' (' + b + '\\' + tabsTitlesNames.length + ')');


            tabsTitelsItems.on('click', function () {
                $('.lp-tabs-footer span#2').empty(); //код домашнего задания

                if (!tabs.hasClass('changing')) {

                    tabs.addClass('changing');
                    var curTab = tabsContent.find('.active'),
                        nextTab = tabsContentTabs.eq($(this).index());
                    tabsTitelsItems.removeClass('active');
                    $(this).addClass('active');
                    var curHeight = curTab.outerHeight();
                    nextTab.show();
                    var nextHeight = nextTab.outerHeight();
                    nextTab.hide();


                    if (curHeight < nextHeight) {
                        tabsContent.animate({
                            height: nextHeight
                        }, 500);
                    }
                    curTab.fadeOut(500, function () {
                        if (curHeight > nextHeight) {
                            tabsContent.animate({
                                height: nextHeight
                            }, 500);
                        }
                        nextTab.fadeIn(500, function () {
                            curTab.removeClass('active');
                            nextTab.addClass('active');
                            //код домашнего задания
                            a = tabsContent.find('.active').attr('data-tab-title');
                            b = tabsContent.find('.active').index() + 1;
                            $('.lp-tabs-footer span#2').append(a + ' ' + '(' + b + '\\' + tabsTitlesNames.length + ')');
                            tabs.removeClass('changing');

                        });

                    });
                }
            });

            // resize
            $(window).on('resize', function () {
                tabsContent.height(tabsContent.find('.active').outerHeight());
            })
        });
    });
})(jQuery);
