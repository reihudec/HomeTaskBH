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
            var slider3Length = $('.lp-slider3 div.owl-item').length;
            var slider4Length = $('.lp-slider4 div.owl-item').length;
            if (slider3Length == slider4Length) {
                $(this).addClass('clicked');
                var slides = $('.lp-slider4 div.active.owl-item').length;
                if (slides == 4) {
                    slides = slides - 2;
                } else slides = slides - 1;
                console.log(slides);
                var indexImage = $('.lp-slider4 div.owl-item').index($('.clicked'));
                $('.lp-slider3').trigger('to.owl.carousel', indexImage);
                if ($('.lp-slider4 div.active.owl-item.active').index($('.clicked')) == slides) {
                    console.log($('.lp-slider4 div.active.owl-item.active').index($('.clicked')));
                    $(this).trigger('next.owl.carousel');
                    $(this).removeClass('clicked');
                } else if ($('.lp-slider4 div.owl-item.active').index($('.clicked')) == 0) {
                    console.log($('.lp-slider4 div.active.owl-item.active').index($('.clicked')));
                    $(this).trigger('prev.owl.carousel');
                    $(this).removeClass('clicked');
                } else {
                    console.log($('.lp-slider4 div.active.owl-item.active').index($('.clicked')));
                    $(this).removeClass('clicked');
                }
            }
        });
    });
})(jQuery);
