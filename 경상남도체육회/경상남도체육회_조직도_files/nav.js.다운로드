//<![CDATA[ 
jQuery(function ($) {
   $.fn.topmenu = function (options) {
      var opts = $.extend(options);
      var topmenu = $(this);
      var topmenuList = topmenu.find('>ul>li');
      var submenu = topmenu.find('.submenu');
      var submenuList = submenu.find('>ul>li');

      function showMenu() {
         t = $(this).parent('li');
         if (!t.hasClass('on')) {
            topmenuList.removeClass('on');
            t.addClass('on');
            submenu.slideUp(0);
            t.find('.submenu').css({top: 47, opacity:0}).slideDown(0).animate({
               top: 47,
               opacity: 1
            }, 0)
         }
      }
      function hideMenu() {
         topmenuList.removeClass('on');
         submenu.slideUp(0);
         onMenu()
      }

      function onMenu() {
         if (opts.d1) {
            t = topmenuList.eq(opts.d1 - 1);
            t.addClass('on');
            t.find('.submenu').css({top: 47, opacity:0}).slideDown(0).animate({
               top: 47,
               opacity: 1
            }, 0);
            if (opts.d2) {
               t.find('.submenu>ul>li').eq(opts.d2 - 1).find('a').addClass('on')
            }
         }
      }
      return this.each(function () {
         onMenu();
         topmenuList.find('>a').mouseover(showMenu).focus(showMenu);
         topmenu.mouseleave(hideMenu)
      })
   }
});


$(document).ready(function(){
	var len = $('#topmenu > ul > li').length;
	for(var i=0; i < len; i++){
		//$('.s_menu_0' + (i+1) + ' > .menu_area > ul > li:nth-child(4)').css({'text-decoration':'underline'});
		$('.s_menu_0' + (i+1) + ' > .menu_area > ul:nth-child(3)').addClass('second');
		$('.s_menu_0' + (i+1) + ' > .menu_area > ul:nth-child(4)').addClass('third');
	}
	$('.submenu ul li ul li:last-child').addClass('last');
});
//]]>