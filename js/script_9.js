        //Домашнее задание
        $('.ajax-popup-link').magnificPopup({
            type: 'ajax'
        });

        $('.video').magnificPopup({
            type: 'iframe',
            iframe: {
                vimeo: {
                    index: 'youtube.com/',
                    id: '/',
                    src: '/watch?v=BQ0mxQXmLsk'
                }
            },

            srcAction: 'iframe_src'
        });
        
        $('a.test').on('click', function () {
            $('#lp-srv5 p').empty();
            var a = $(this).text();
            $('#lp-srv5').addClass('lp-modal');
            $('#lp-srv5 p').append(a)
        })
        $('.test.lp-mfp-inline').magnificPopup({
            items: {
                type: 'inline',
                src: $('#lp-srv5')
            }
        })
        
        $('a.link-gallery').magnificPopup({
            items: [
                {
                    src: 'img/1.jpg'
      },
                {
                    src: 'img/2.jpg'
      },
                {
                    src: 'https://www.youtube.com/watch?v=BQ0mxQXmLsk',
                    type: 'iframe'
      },
                {
                    src: 'page-1.html',
                    type: 'ajax'
      }
    ],
            gallery: {
                enabled: true
            },
            type: 'image' // this is default type
        });
