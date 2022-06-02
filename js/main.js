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
  let swiper = new Swiper(".mySwiper", {
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
  let contentN;
  $("#contents .banner_top .tabs .list ul").eq(0).addClass("current");
  $("#contents .banner_top .tabs .label li").click(function(e){
    e.preventDefault();
    let contentN = $(this).index();
    $("#contents .banner_top .tabs .list ul").removeClass("current");
    $("#contents .banner_top .tabs .list ul").eq(contentN).addClass("current");
    $("#contents .banner_top .tabs .label li").removeClass("active");
    $(this).addClass("active");
  });
    
    
    //  banner slider
  let listN;
  $("#contents .banner_bottom .pagination li:first-child").addClass("current")
  $("#contents .banner_bottom .photo li:first-child").addClass("current")
  $("#contents .banner_bottom .media .label li:first-child").addClass("current")
  
  $("#contents .banner_bottom .pagination li").click(function(e){
      e.preventDefault();
      listN = $(this).index();
      
      $("#contents .banner_bottom .pagination li").removeClass("current");
      $(this).addClass("current");
      $("#contents .banner_bottom .photo li").removeClass("current");
      $("#contents .banner_bottom .photo li").eq(listN).addClass("current");
      $("#contents .banner_bottom .media .label li").removeClass("current");
      $("#contents .banner_bottom .media .label li").eq(listN).addClass("current");
  });
})