jQuery(document).ready(function ($) {
    let scroll = $(this).scrollTop();
    (scroll > 50) ? $ ('#header').addClass('bg-brown') : $('#header').removeClass('bg-brown');

    $(window).on('scroll',function (e) {
        let scroll = $(this).scrollTop();
        (scroll > 50) ? $ ('#header').addClass('bg-brown') : $('#header').removeClass('bg-brown');
    })

    $("#burger").click(function () {
        $(this).toggleClass('active');
       $("#navigation").toggleClass('active');

    });
    
    $('.trigger').click(function (e) {
        e.preventDefault();
        $("#form").addClass('active');
        
    });

    $('#close').click(function (e) {
        e.preventDefault();
        $("#form").removeClass('active');

    });
});