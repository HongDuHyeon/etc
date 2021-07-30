$(function(){


// bx slider 는 ({  xxx  })  << 여기 안에 기능 작성 ex)  onSlideAfter: function()

       var main_visual = $('.slide-box').bxSlider({
              mode: 'horizontal',// 가로 방향 수평 슬라이드
              randomStart: true,    // 슬라이드 api중 아직 유일한 랜덤 기능
              auto: true,                  // 자동 재생
              pager: true,                // 페이지 네비게이션
              responsive:true,     
              autoHover: false,      //슬라이드에 마우스 호버시 애니메이션 정지 여부 
              controls: false,          //이전/다음 버튼 노출 여부
              speed: 800,                // 넘어가는 속도
              maxSlides: 1,             // 최대 보여지는 슬라이드 갯수
              minSlides: 1,              // 최소 보여지는 슬라이드 갯수
              moveSlides: 0,           //숫자 슬라이드 이동시 개수 
              slideWidth: 0,             //숫자 슬라이드 너비 
              slideMargin: 0,           //숫자 슬라이드 사이 여백
              nextSelector: '.next-slide',
              nextText: '>', 
              prevSelector: '.prev-slide',
              prevText: '<',
              autoControls:true,
              pause: 3000,
              autoDelay:3000,
//랜덤값 뽑아오기
              onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject,slide, oldIndex, newIndex) {
              $('.slide-box > a').removeClass('active-slide');
              $('.slide-box > a').eq(currentSlideHtmlObject + 1).addClass('active-slide');
             
// 중지버튼 눌렀을때 
              $(".bx-stop").on("click",function(){	
                      main_visual.stopAuto();               // 재생 버튼
                     $(".bx-stop").hide(); 
                     $(".bx-start").show(); 
                     return false; 
              
              }); 

//시작버튼 눌렀을때 
              $(".bx-start").on("click",function(){
                     main_visual.startAuto();               // 재생 버튼
                     $(".bx-start").hide(); 
                     $(".bx-stop").show(); 
                     return false;        
              }); 

 // 이전 다음 버튼 누를때마다 강제 실행
              $(".bx-controls-direction .bx-next").on("click",function(){ 
                     main_visual.stopAuto();
                     main_visual.startAuto();
           })
              },

// 보여지는 화면에 맞게 addClass
              onSliderLoad: function (currentSlideHtmlObject) {
              $('.slide-box > a').removeClass('active-slide');
              $('.slide-box > a').eq(currentSlideHtmlObject + 1).addClass('active-slide')
              },
             
       });

// 슬라이드 제어 메소드 

       // 변수.goToSlide(숫자) 지정한 [숫자] 슬라이드로 이동 
       // 변수.goToNextSlide() 다음 슬라이드로 이동 
       // 변수.goToPrevSlide() 이전 슬라이드로 이동 
       // 변수.startAuto() 자동으로 슬라이드 전환 
       // 변수.stopAuto() 자동 슬라이드 전환 기능 정지




















});