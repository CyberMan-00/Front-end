$(document).ready(function(){
    // slick slider 
    $('.carousel__inner').slick({
        speed: 1500,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png" alt="prevArrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png" alt="nextArrow"></button>'
    });
    // catalog - tabs switch 
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    // catalog - items descr switch
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // modal windows
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultaion').fadeIn("slow");
    });
    
    $('.button__catalog').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subheader').eq(i).text());
            $('.overlay, #order').fadeIn("slow");
        });
    });

    $('.close__sign').on('click', function(e) {
        e.preventDefault();
        $('.overlay, #consultaion, #thanks, #order').fadeOut("slow");
    });

    // validating forms - simple method
    // $('#consultaion-form').validate();
    // $('#order form').validate();
    
    // validating using own function
    function validateForms(form) {
        $(form).validate({
            // simple rule
            rules: {
                name: {
                    required: true,
                    minlength: 2 // min number of characters allowed
                },
                phone: {
                    required: true
                },
                // compound rule
                email: {
                    required: true,
                    email: true
                }
            },
            // custom messages
            messages: {
                name: {
                    required: "Specify your name, please",
                    minlength: jQuery.validator.format("At least {0} characters required!")
                },
                phone: "We need your phone number to contact you",
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of example@example.com"
                }
            }
        });
    }

    validateForms('#consultaion-form');
    validateForms('#consultaion form');
    validateForms('#order form');

    // phone mask 
    $('input[name=phone]').mask("+48-999-999-999");
});
