/**
 * Created by anastasia.markina on 2016-12-10.
 */
$(document).ready(function(){
    /*$('.WrapSliderLeftSide').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });*/

    $('.WrapSliderLeft').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
        speed: 500,
        infinite: true,
        asNavFor: '.WrapSliderRight'
    });

    $('.WrapSliderRight').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.WrapSliderLeft',
        dots: false,
        fade: true,
        infinity: true,
        focusOnSelect: true
    });
});
