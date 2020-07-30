(function ($) {
    // loading
    $(window).load(function () {
        $("#loading").hide();
        $("body").removeClass("noScroll");
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


    // cont
    var articleTab = $(".title ul li");
    var articleCont = $(".cont > div");

    articleCont.hide().eq(0).show();

    articleTab.click(function (e) {
        e.preventDefault();
        var index = $(this).index();
        articleTab.removeClass("active");
        $(this).addClass("active");
        articleCont.css("display", "none");
        articleCont.eq(index).css("display", "block");
    });   
})(jQuery);