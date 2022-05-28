window.addEventListener("load",()=>{
	let html = document.querySelector("html");
	let slideFlag = false;
	let height;
	let w;
	let body = document.querySelector("body");
	let header = document.querySelector("#header");
	let tabBtn = header.querySelector(".tab");
	let gnb = header.querySelector("#gnb");
	let gnbLi = gnb.firstElementChild.children;
	let mainSlider = document.querySelector("#main_slider");
	let main_swiper = mainSlider.querySelector(".swiper");
	let letter =mainSlider.querySelector(".letter");
	let member =mainSlider.querySelector(".member");
	let letterBtn = mainSlider.querySelector(".letter_btn").firstElementChild;
	let memberBtn = mainSlider.querySelector(".member_btn").firstElementChild;
	let letterCloseBtn = mainSlider.querySelectorAll(".close a")[0];
	let memberCloseBtn = mainSlider.querySelectorAll(".close a")[1];
	let donorSlider= document.querySelector("#donor_slider");
	let donor_swiper= donorSlider.querySelector(".mySwiper");
	let eventSlider= document.querySelector("#event_slider");
	let event_swiper= eventSlider.querySelector(".mySwiper");
	let vh = window.innerHeight;

	main_swiper.style.height=vh+"px";

	// main swiper
	let mainSwiper = new Swiper(main_swiper, {
    speed:1200,
		effect: "fade",
    fadeEffect:{
      crossFade:true
    },
		loop:true,
		autoplay:{
			delay:4000,
		},
    
	});

	tabBtn.addEventListener("click", e=>{
		e.preventDefault();
		e.currentTarget.classList.toggle("active");
		body.classList.toggle("fixed");
		gnb.classList.toggle("active");

	});
	// gnb interface
	for(let i=0; i<gnbLi.length; i++){
		gnbLi[i].index=i;
		gnbLi[i].addEventListener("click", e=>{
			e.preventDefault();
			let index = e.currentTarget.index;

			for(let j=0; j<gnbLi.length; j++){
				let n = index;
				let ul = gnbLi[j].lastElementChild;
				if(n == j){
					ul.classList.add("actvie");
					ul.style.display="block";
					gsap.to(ul,{duration:0.3, opacity:1})
				}else{
					ul.classList.remove("actvie");
					ul.style.display="none";
					gsap.to(ul,{duration:0.3, opacity:0})
				}
			}
		})
	}

	letterBtn.addEventListener("click",e=>{
		e.preventDefault();
		height= window.pageYOffset;
		
		if(height > 1) {
			html.scrollTo({
				top:0,
				behavior:"smooth"
			})
		};

		letter.classList.add("active");
		body.classList.add("fixed");
		body.style.touchAction="none";
	});

	memberBtn.addEventListener("click",e=>{
		e.preventDefault();
		height= window.pageYOffset;
		
		if(height > 1) {
			html.scrollTo({
				top:0,
				behavior:"smooth"
			})
		};

		member.classList.add("active");
		body.classList.add("fixed");
		body.style.touchAction="none";
	});

	letterCloseBtn.addEventListener("click", e=>{
		e.preventDefault();
		close();
	});
	memberCloseBtn.addEventListener("click",e=>{
		e.preventDefault();
		close();
	})
	
	function close(){
		letter.classList.remove("active");
		member.classList.remove("active");
		body.classList.remove("fixed");
		body.style.touchAction="auto";
	}

	let donorSwiper = new Swiper(donor_swiper, {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let eventSwiper=new Swiper(event_swiper, {
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
})