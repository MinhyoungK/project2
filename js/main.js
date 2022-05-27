$(function(){
    // header gnb
      $("#header .menu").hover(
        function(){
          $(this).addClass("over");
        },
        function(){
          $(this).removeClass("over");
        }
      );
    
      $("#gnb > ul > li:first-child > a").focusin(function(){
        $("#header .menu").addClass("over");
      });
      $("#gnb li:last-child li:last-child a").focusout(function(){
        $("#header .menu").removeClass("over");
      });
      $('#gnb > ul > li  > a').focusin(function(){
        $(this).parent().addClass("over");  
      });
      $('#gnb li li:last-child a').focusout(function(){
        $(this).parent().parent().parent().removeClass("over");  
      }); 
    
    
    // main slider
        var swiper = new Swiper(".mySwiper", {
          pagination: {
            el: ".swiper-pagination",
            clickable:true,
          },
          loop:true,
          autoplay:{
              delay:5000,
          },
        });
    
    // tabs
        $("#contents .banner_top .tabs .list ul").eq(0).addClass("current");
        $("#contents .banner_top .tabs .label li").click(function(e){
          e.preventDefault();
          var number = $(this).index();
          $("#contents .banner_top .tabs .list ul").removeClass("current");
          $("#contents .banner_top .tabs .list ul").eq(number).addClass("current");
          $("#contents .banner_top .tabs .label li").removeClass("active");
          $(this).addClass("active");
        });
    
    
    //  banner slider
        var n;
        $("#contents .banner_bottom .pagination li:first-child").addClass("current")
        $("#contents .banner_bottom .photo li:first-child").addClass("current")
        $("#contents .banner_bottom .media .label li:first-child").addClass("current")
        
        $("#contents .banner_bottom .pagination li").click(function(e){
            e.preventDefault();
            n = $(this).index();
            
            $("#contents .banner_bottom .pagination li").removeClass("current");
            $(this).addClass("current");
            $("#contents .banner_bottom .photo li").removeClass("current");
            $("#contents .banner_bottom .photo li").eq(n).addClass("current");
            $("#contents .banner_bottom .media .label li").removeClass("current");
            $("#contents .banner_bottom .media .label li").eq(n).addClass("current");
        });
      })