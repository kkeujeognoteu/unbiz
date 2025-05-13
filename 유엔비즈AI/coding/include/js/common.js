var clickType = "click";
if ("ontouchstart" in document.documentElement) {
    clickType = "touchstart";
}
$(function () {
    ham_btn();
    mobile_gnb();
    header_scroll();    

    if( window.outerWidth > 1280 ) {

        $('.header__top > ul').hover(function() {
            $('header').addClass('hover');
        }, function(){        
            $('header').removeClass('hover');
        });
    }

});

/*


$(window).bind("scroll", function () {
    var $_top = $(document).scrollTop();      
    var scroll_current = $(window).height();

      if(100 > $_top){
        $('header').addClass('top');
        $('.text1__trigger').addClass('top');
      }else{
        $('header').removeClass('top')
        $('header').addClass('reverse')
        $('.text1__trigger').removeClass('top');
      }
      if(scroll_current > $_top){
        $('header').addClass('show')
      }else{
        if(100 > $_top){
          $('header').addClass('show')
        }else{
        $('.language_sub').removeClass('active')
        $('header').removeClass('show')
        $('header').addClass('reverse')
        }
      }
      scroll_current =  $_top;
}).trigger('scroll');


const header_scroll = function () {
    
    let before = 0;
    let direction;
    const header = document.querySelector('header');

    document.addEventListener('scroll', function() {
        var currentScrollValue = document.documentElement.scrollTop;                
        if(before < window.scrollY) direction="down";
        else direction="up";
        before = window.scrollY;
    
        if (currentScrollValue > 200 && direction=="down" ) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }     
    });

    
}

const ham_btn = () => {
    $('.ham').on("click", function (e) {
        e.preventDefault();            
        $('header').toggleClass('on');
        $('body').toggleClass('on');
    });    
}

const ham_btn2 = () => {
    $('header .ham').click(function(){
        $(this).toggleClass('active');
        $('.header__bottom').toggleClass('open');
        $('header').toggleClass('on');
        $('body').toggleClass('open');        
    });

}

const mobile_gnb = () => {
    $('.header').click(function () {
        $('body').toggleClass('active');
        $(this).toggleClass('is-menuOpen');                
        $('header nav > ul > li').click(function(){
            $(this).siblings().removeClass('active');
            $(this).toggleClass('active');                 
        });        
        
    });
    
}
*/