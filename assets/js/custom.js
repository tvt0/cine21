(function ($) {
    // 배너 이미지 슬라이드
    $(".slider").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
    });
    
    // 인터뷰 이미지 슬라이드
    $(".ps").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
    });
    
    // news 패럴랙스 효과
    $(window).scroll(function(){
        const scrollTop = parseInt($(window).scrollTop() + $(window).height() / 2);
        const news = $(".card_news > div");
        for(let i=0; i<news.length; i++){
            if(scrollTop >= news.eq(i).offset().top - $(window).height() / 3){
                news.eq(i).addClass('show');
            } else {
                news.eq(i).removeClass('show');
            }
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})(jQuery);