$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1500,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png" alt="prevArrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png" alt="nextArrow"></button>'
    });
});
