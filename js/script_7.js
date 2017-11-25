//Занятие 7 (слайдер)

(function ($) {
    $(document).ready(function () {
        $(".lp-slider3").owlCarousel({
            items: 1
        });
        $(".lp-slider4").owlCarousel({
            items: 3
        });

        $('.owl-item').on('click', function () {
            $(this).addClass('clicked');
            var indexImage = $('.lp-slider4 div.owl-item').index($('.clicked'));
            $('.lp-slider3').trigger('to.owl.carousel', indexImage);
            if ($('.lp-slider4 div.active.owl-item.active').index($('.clicked')) == 2) {

                $(this).trigger('next.owl.carousel');
                console.log($('.lp-slider4 div.owl-item.active').index($('.clicked')));
                $(this).removeClass('clicked');
            } else if ($('.lp-slider4 div.owl-item.active').index($('.clicked')) == 0) {
                $(this).trigger('prev.owl.carousel');
                console.log($('.lp-slider4 div.owl-item.active').index($('.clicked')));
                $(this).removeClass('clicked');
            } else {
                $(this).removeClass('clicked');
            }
        });
    });
})(jQuery);
