// *global $ , alert, console 

$(function(){
    'use strict';

    //adjust header height

    $('.header').height($(window).height());
    $(window).resize(function(){
        $('.header').height($(window).height());
    });

    //links add active class

    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    

    //Adjust slider list items center

    $('.slider').each(function(){
        $(this).css('paddingTop', ($(window).height() - $('.slider div').height()) / 2);
    });

    //Trigger the px slider

    $('.slider').bxSlider({
        pager: false 
    });

    //Smooth scroll to div

    $('.links li a').click(function(){
        $('html ,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top 
        }, 1000);
    });

    //Our auto slide code 
    (function autoSlider() {
        $('.slide .activ').each(function(){
            if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('activ').next().addClass('activ').fadeIn();
                    autoSlider()
                });
            }else{
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('activ');
                    $('.slide div').eq(0).addClass('activ').fadeIn();
                    autoSlider();
                });
            }
        });
    }());

    //Trigger Mixitup
    $('#Container').mixItUp();

    //Adjust shuffle links

    $('.shuffle li').click(function(){
        $(this).addClass('sellected').siblings().removeClass('sellected');
    }); 
});