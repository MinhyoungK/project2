$(function(){

	var slideFlag=false;

  var mainSwiper = new Swiper("#main_slider .swiper", {
    speed:1200,
		effect: "fade",
    fadeEffect:{
      crossFade:true
    },
		navigation: {
			nextEl: "#main_slider .swiper-button-next",
			prevEl: "#main_slider .swiper-button-prev",
		},
		pagination: {
          el: "#main_slider .swiper-pagination",
        },
		loop:true,
		autoplay:{
			delay:4000,
		},
    on:{
		touchEnd:function(){
			if(slideFlag){
				$("#pause_play").removeAttr("class");
				$("#pause_play").addClass("play");
				slideFlag=true;
			}
			else{
				return false;
			}
		},
		sliderMove:function(){
			if(slideFlag == false) slideFlag=true;
		}
	 },
	});
  $("#pause_play").click(function(e){
    e.preventDefault();

    if($(this).hasClass("play")==true){
      $(this).removeAttr("class");
      $(this).addClass("pause");
      mainSwiper.autoplay.start();
    }else{
      $(this).removeAttr("class");
      $(this).addClass("play");
      mainSwiper.autoplay.stop();
    }
  });

	var height;
	$(window).scroll(function(){
		height=$(window).scrollTop();
		if(height>60){
			$("#header").addClass("fixed");
		}else{
			$("#header").removeClass("fixed");
		}
	});


	var w;
	$(".tab").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$("#gnb").toggleClass("active");
		$("body").toggleClass("fixed"); 
    $("#gnb ul ul").slideUp();
		
		if($('#gnb ul ul').hasClass("active")==true){
			$("#gnb ul ul").removeClass("active");
		}
		if($(".book").hasClass("active")==true){
			$(".book").removeClass("active");
			$(".main_text").removeClass("active");
		}
	});
	// $(window).resize(function(){
	// 	w=window.innerWidth;
	// 	if(w > 600 && $("#gnb").hasClass("active")){
	// 		$("#gnb").removeClass("active");
	// 		$("#header .tab").removeClass("active");
	// 	}
	// });
	$("#gnb>ul>li").click(function(e){
		e.preventDefault();

		if($(this).find("ul").is(":visible") == false){
			$("#gnb ul ul").slideUp();
			$(this).find("ul").slideDown();
		}
		else{
			$(this).find("ul").slideUp();
		}
	});


  $(".utils .button .letter_btn a").click(function(e){
    e.preventDefault();
	height=$(window).scrollTop();
	if(height >1){
		$("html").animate({scrollTop: 0},100);
	}
    $(".utils .form .letter").addClass("active");
	$("body").addClass("fixed");
	
  });
  $(".utils .button .member_btn a").click(function(e){
    e.preventDefault();
	height=$(window).scrollTop();
	if(height >1){
		$("html").animate({scrollTop: 0},100);
	}
    $(".utils .form .member").addClass("active");
	$("body").addClass("fixed"); 
  });
  $(".utils .form .close a").click(function(e){
    e.preventDefault();
    $(".utils .form .member").removeClass("active");
    $(".utils .form .letter").removeClass("active");
	$("body").removeClass("fixed"); 
  });
	




  var donorSwiper = new Swiper("#donor_slider .mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var event_swiper=new Swiper("#event_slider .mySwiper", {
		slidesPerView: 1.5,
		spaceBetween: 10,
		pagination: {
			el: "#event_slider .swiper-pagination",
			type: "progressbar"
		},
		breakpoints: {
			640: {
				slidesPerView: 2.5,
				spaceBetween: 10
			},
			820: {
				slidesPerView: 3,
				spaceBetween: 10
			},
		},
	});
	function initMap(){
		const myLatLng={lat: -25.363, lng: 131.044};
		const map=new google.maps.Map(document.getElementById("map"), {
			zoom: 18,
			center: myLatLng,
		});
		new google.maps.Marker({
			position: myLatLng,
			map,
			title: "Hello World!",
		});
	}
	let vh = window.innerHeight;
	$("#main_slider .swiper").css({height:vh});
})