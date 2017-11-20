(function(){
    $(document).ready(function(){
        $('a.link').on('click', function(e){
            e.preventDefault();
            console.log($(this).attr('href'));
        });
	    $('a').click(function () {
        var a = $(this).attr("href");
        var b = $(a).offset().top;
        $('html').animate({ scrollTop: b}, 1500);
        });
        $(document).on('mousemove', function(event){
            var x = event.originalEvent.pageX,
                y = event.originalEvent.pageY;
                $('div.move').offset({top:y, left:x});      
            });
    });
})(jQuery);