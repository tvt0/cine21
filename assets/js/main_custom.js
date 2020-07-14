(function ($) {
    // top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#backToTop").css({
                'right': '5%'
            });
        } else {
            $("#backToTop").css({
                'right': '-100px'
            });
        }
    });
    $("#backToTop").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 200);
    });

    // mNav
    $(".mNav").click(function (e) {
        e.preventDefault();
        $(".ham").toggleClass('active');
        $(".side-menu").toggleClass('on');
        if ($(".side-menu").hasClass('on')) {
            $(".side-menu").animate({
                'right': '0'
            }, 300);
        } else {
            $(".side-menu").animate({
                'right': '-100%'
            }, 300);
        }
    });

    // article nav
    $("li.article > a").click(function (e) {
        e.preventDefault();
        $(".article-nav").slideToggle();
        $("li.article .btn").toggleClass("on");
        $(".side-menu .menu").toggleClass("on");
    });

    // 메인 슬라이드
    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });

    // news 패럴랙스 효과
    $(window).scroll(function () {
        const scrollTop = parseInt($(window).scrollTop() + $(window).height() / 2);
        const news = $(".card_news > div");
        for (let i = 0; i < news.length; i++) {
            if (scrollTop >= news.eq(i).offset().top - $(window).height() / 3) {
                news.eq(i).addClass('show');
            } else {
                news.eq(i).removeClass('show');
            }
        }
    });

    // 인터뷰 슬라이드
    $(".slider").slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 5,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1290,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 3
                }
                },
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                },

            ]
    });

    // sns공유
    $(".icon.s3").click(function (e) {
        e.preventDefault();
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
    });
    $(".icon.s2").click(function (e) {
        e.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' + encodeURIComponent(document.URL) + '%20-%20' + encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
    });
})(jQuery);