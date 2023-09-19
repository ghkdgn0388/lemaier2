$(document).ready(function(){
    // 풀페이지
    // width 1000 이하일떼 풀페이지 중지
    
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
    });
    
    media();
    function media(){
        const ww = $(window).width();
        if(ww >= 1800){
            new fullpage('#wrap',{
                scrollBar : true,
                normalScrollElements: '.sec-4, .sec-5, .footer',
                fitToSection: false,
                scrollingSpeed: 300,
            })
            // 스크롤 위치값을 섹션 상단에 맞춰서 클래스 제어
            $(window).scroll(function(){
                  const sct = $(window).scrollTop();
                  console.log(sct);

                  // 섹션별로 상단 위치값 변수에 저장
                  const banner = $('.banner').offset().top;
                  const sec1 = $('.sec-1').offset().top;
                  const sec2 = $('.sec-2').offset().top;
                  const sec5 = $('.sec-5').offset().top;

                  // 조건문으로 섹션별 위치 조건 걸어서 .sec1에서 header-area           스타일링 변경 / sec2 에서 다시 변경 / sec5에서 다시 또 변경

                  if(sct >= banner && sct < sec1){
                      // banner
                      $('.header-area, .header-logo, .header-logo svg').removeClass         ('active');
                  }else if(sct >= sec1 && sct < sec2){
                      // sec1
                      $('.header-area, .header-logo, .header-logo svg').addClass        ('active');
                  }else if(sct >= sec2 && sct < sec5){
                      // sec2,sec3,sec4
                      $('.header-area, .header-logo svg').removeClass('active');
                  }else if(sct >= sec5){
                      // sec5 이상
                      $('.header-area, .header-logo svg').addClass('active');
                  }
            });
        }else{
            
        }
    }

    

    // sub-menu
    $('.main-menu li').mouseenter(function(){
        let result = $(this).attr('data-tab')
        $('.sub-menu').removeClass('active');
        $(`#${result}`).addClass('active')

        // 서브메뉴박스 보이기
        $('.sub-menu-box').addClass('active');

        // 헤더 색상 변경
        $('.header-area, .header-logo svg').addClass('active');
    });
    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');
        $('.header-area, .header-logo svg').removeClass('active');
    });

    // sec-4 swiper
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        speed: 500,
        slidePerView: "auto",
        autoplay:{
          dealy: 1000,
          disableOnInteraction: false,
        },
        direction : 'vertical',
    });

    //top-btn
    let btn = $('.top-btn');
    $(window).scroll(function(){
        if($(window).scrollTop() >= 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });
    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });

    
});