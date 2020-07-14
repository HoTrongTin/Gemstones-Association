var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 7000,
        disableOnInteraction: false
    },
    //speed: 2500,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: "fade",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(window).resize(function () {
    //update stuff
});

$(function () {
    var navbar = $('.navbar');
    var navDropdown = $('.dropdown-menu');

    $(window).scroll(function () {
        if ($(window).scrollTop() <= 40) {
            if (!$('.navbar-collapse').hasClass('show')) {
                navbar.removeClass('navbar-scroll');
                navDropdown.removeClass('nav-dropdown-scroll');
                $('.top').hide();
            }

        } else {
            navbar.addClass('navbar-scroll');
            navDropdown.addClass('nav-dropdown-scroll');
            $('.top').show();
        }
    });
    $('.navbar-toggler').click(function () {
        if ($(window).scrollTop() <= 40) {
            navbar.addClass('navbar-scroll');
            // navDropdown.addClass('nav-dropdown-scroll');
        }
    });
});