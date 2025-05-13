$(function () {
    init();
    scroll();
    tab_menu();
    slick();

    const childElement = document.querySelector('.child');

    function updateBlendMode() {
      const bodyTransform = getComputedStyle(document.querySelector('#smooth-content')).transform;
      childElement.style.transform = `translate(-${bodyTransform})`;
      requestAnimationFrame(updateBlendMode);
    }

    //updateBlendMode(); // 시작시 한 번 호출


});



$scroll_obj = ".smooth-scroll";
let current_time;



const throttledScrollPlayer = _.throttle((time) => {
  scroll_player(time);
}, 100); // Set the throttling interval in milliseconds (e.g., 100ms)


const mobile_check = function () {
    var temp = window.outerWidth;
    if (temp <= 640) {
        temp = true;
    } else {
        temp = false;
    }
    return temp;
}

const scroll = function() {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    

    

    if(!mobile_check()){

      ScrollTrigger.normalizeScroll(true)      
      // create the smooth scroller FIRST!
      let smoother = ScrollSmoother.create({
        smooth: mobile_check() ? 1 : 2,
        effects: true,
        ignoreMobileResize : true,
        // onUpdate: (self) => console.log("progress", self.direction),

      });
    }
    gsap.to(".main__top", {
        scrollTrigger: {
          trigger: ".main__top",
          scrub: true,
          start: "0%",
          end: mobile_check() ? "100%" : "40%",
          pin: mobile_check() ? false : true,
          pinType: mobile_check() ? "fixed" : "transform", // or "fixed"
          pinSpacing: false // 여백 삭제
        },
        opacity: 0,
        ease: "none"
    });

    gsap.to(".text__box", {
        scrollTrigger: {
          trigger: ".text1__trigger",
          scrub: true,
          start: "0%",
          end: "100%",
          pin: mobile_check() ? false : true,
          pinSpacing: false, // 여백 삭제
          pinType: mobile_check() ? "fixed" : "transform", // or "fixed"
          toggleClass: 'active',
          // onScrubComplete: function(e){                        
          //   $(e.trigger).addClass('leave');
          //   console.log(e.trigger);
          // },
          // onLeaveBack: function(){                        
          //   $(e.trigger).removeClass('leave');
          // },
        },
        opacity: 0,
        y: -50,
        ease: "none"
    });


    gsap.from("body", {
    scrollTrigger: {
        trigger: "section.main1 .text2",
        scrub: 1,
        start: "top top",
        end: "70% 70%",
    },
    background: "#F5EDED",
    ease: "none"
    });

    const frameCount = 60;
    gsap.from("#video1", {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            trigger: "section.main1",
            scrub: 1,
            start: "top top" ,
            end: "bottom bottom",
            onUpdate: (e) => {   video_progress(e)  }
        },
    });

    //console.clear();

    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    canvas.width = 1200;
    canvas.height = 1200;


    const currentFrame = index => (
        `https://sugarfish.co.kr/pnt/include/images/main/seq/${(index).toString().padStart(4, '0')}.png`
    );

    const images = []

    for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
    }


    images[0].onload = video_progress;



    var count=0;
    function video_progress(e){
    var frame = Math.floor(e.progress*60)
    if(frame < frameCount-1){
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[frame], 0, 0);
    }
    // if( e.progress.toFixed(2)*5 > 2.0 ) {
    //   current_time = 2;
    // } else {
    //   current_time = e.progress.toFixed(2)*5;
    // }
    // current_time = parseFloat(current_time.toFixed(2));
    }


    $('.header__top > .ham').click(function(){
        var toggle_cnt;
        if( $('body').hasClass('on')==true ) {
            toggle_cnt=1;
        } else {
            toggle_cnt=2;
        }

        scroll_toggle(toggle_cnt);
        });


        function scroll_toggle(idx) {

        console.log(idx);

        if(idx==1){
            smoother.paused(true);
            $('html').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
        } else if(idx==2){
            smoother.paused(false);
            $('html').off('scroll touchmove mousewheel');
        }



    }

}




const init = function() {

    var lotto = [];
    var t = $('.main__text1').text();
    var temp="";
    for(i=0; i< t.length; i++){
		var y = t.substr(i,1);
		if(y=="|"){
		temp+="<div></div>";
		}else{
		temp+="<span>"+y+"</span>";
		}
    }
    $('.main__text1').html(temp);
    while (lotto.length < t.length) {
		var num = parseInt(Math.random() * t.length + 1);
		if (lotto.indexOf(num) == -1) {
		lotto.push(num);
		}
    }
    $('.main__text1 span').each(function(e){
		var $_this =$(this);
		setTimeout( function(){
		$_this.addClass('active');
		}, lotto[e]*100+600 )
    });


      
      // setTimeout(function () {
      //   enableScroll();
      // }, 1500);
      
      // // 스크롤 이벤트를 막는 함수
      // function disableScroll() {
      //   window.addEventListener('scroll', noScroll);
      // }

      // // 스크롤 이벤트를 허용하는 함수
      // function enableScroll() {
      //   window.removeEventListener('scroll', noScroll);
      // }

      // // 스크롤 이벤트를 처리하는 함수
      // function noScroll() {
      //   window.scrollTo(0, 0);
      // }

      // // 초기에 스크롤 막기
      // disableScroll();

}

  //탭 메뉴 기본
const tab_menu = function(){
  $('.tab_header > ul > li').click(function(){
      var cnt = $(this).index();
      $('.tab_header > ul > li').removeClass('on');
      $(this).addClass('on');
      $('.tab_body ul li').removeClass('on');
      $('.tab_body ul li').eq(cnt).addClass('on');
  });
}


const slick = () => {
    $('.slick1').slick({
        infinite: true,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 5000,
        lazyLoad: 'progressive',
    });
}


const scroll_player = function(time) {
  $('#video1')[0].currentTime  = time;
}
