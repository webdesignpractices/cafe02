$(function(){
    $('.scroll-btn').click(function(){
        var id=$(this).attr('href');
        var position=$(id).offset().top;

        $('html,body').animate({
            'scrollTop':position-25
        } ,600);
    });

    $(window).scroll(function(){
        $('.grid').each(function(){

            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            var target = $(this).offset().top;

            if(scroll > target - windowHeight + 250){
                $('.grid-item1').addClass('grid-animation1');
                $('.grid-item2').addClass('grid-animation1').css('animation-delay','.5s');
                $('.grid-item3').addClass('grid-animation1').css('animation-delay','1s');
            }
        }); 
    });
});
