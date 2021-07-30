$(function(){



//랜덤 슬라이드 function
$.fn.randomize = function (selector) {
	var $elems = selector ? $(this).find(selector) : $(this).children(),
	    $parents = $elems.parent();
   
	$parents.each(function () {
	    $(this).children(selector).sort(function (childA, childB) {
		 // * Prevent last slide from being reordered
		 if($(childB).index() !== $(this).children(selector).length - 1) {
		     return Math.round(Math.random()) - 0.5;
		 }
	    }.bind(this)).detach().appendTo(this);
	});
   
	return this;
   };



// .randomize(); << 첫번째 img 위치 랜덤 기능
$(".slide-wrap").randomize().slick({
       autoplay : true,                //자동
       arrows : true,                   // 다음 배너 버튼
       dots : true,                       // 페이지 네비게이션
       infinite: true,                    // 루프
       autoplaySpeed : 5000,   // active 대기 시간 
       speed:800,                       //넘어갈때 속도
	pauseOnHover : true,	    // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
       vertical : false,		     // 세로 방향 슬라이드 옵션
       slidesToShow : 4,		// 한 화면에 보여질 컨텐츠 개수
       slidesToScroll : 1,		  //스크롤 한번에 움직일 컨텐츠 개수
       slide: 'div',		                //슬라이드 되어야 할 태그 ex) div, li 
	responsive: [                    // 반응형
		{
		breakpoint:800,
			settings: {
				arrows: false,
			}
		},
	],
});

//    재생/일시정지 버튼 생성 후 작업 

$(".btn-stop").on("click",function(){	// 중지버튼 눌렀을때 
       $(".slide-wrap").slick('slickPause'); //slick 슬라이드 멈춤 기능
              $(".btn-stop").hide(); 
              $(".btn-play").show(); 
              return false; 

}); 
$(".btn-play").on("click",function(){	//시작버튼 눌렀을때 
       $(".slide-wrap").slick('slickPlay'); //slick 슬라이드 재생 기능
       $(".btn-play").hide(); 
       $(".btn-stop").show(); 
       return false;        
}); 

// slick 파괴
$('#slider-div').slick("unslick")


//현재 보여지는 슬라이더가 몇번째 슬라이더인지 확인하기
$('#slider-div').slick('slickCurrentSlide');   // 가장 첫번째에 있는 슬라이드는 0번이다. 
 


});