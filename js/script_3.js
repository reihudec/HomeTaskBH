(function ($){
    $(document).ready(function (){
        $('#go').on('click',function(){
            $('div').addClass('main');
            $('div.main').append('<ul>123</ul>');
            for (var i=1; i<=10; i++){
            $('div.main ul').append('<li>Пункт</li>');
            }
            for (i=0; i<10; i++){
            $('div.main li').eq(i).append(' ').append(i+1);
            }
            $('div.main li').wrap('<span></span>');
            for (i=0; i<10; i++){
                if ((i+1)%2!=0){
                  $('div.main li').eq(i).append(' ').addClass('second'); 
                }
            }
            for (i=0; i<10; i++){
            $('div.main li').eq(i).attr('order',i+1);
            }
            $('div.main li').eq(9).remove();
            $('div.main').prepend('<h3>Перечень работ</h3>');
        });
    });
})(jQuery);
      
/*(function ($){
    $(document).ready(function (){
       $('#go').on('click',function(){
            $('h2').append('!');
            $('h3').addClass('red');
            $('h2').css('color','#8bd0fc').css('font-size','30px');
        }) 
    })   
})(jQuery);   
(function (){
    $(document).ready(function (){
        
    })
})(jQuery);
