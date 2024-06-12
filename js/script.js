document.addEventListener('DOMContentLoaded', function () {
	var swiperArrowNext = document.querySelector('.wrapper__next');
	var mySwiper = new Swiper('.wrapper__slider', {
	  loop: true,
	  autoplay: false,
	  effect: 'fade',
	  speed: 0,
	  spaceBetween: 0,
	  slidesPerView: 1,
	  mousewheel:true,
	  allowSlidePrev:false,
	  navigation:{
	  	nextEl: swiperArrowNext,
	  },
	  on: {
	    slideChangeTransitionStart: function () {
	      var activeSlide = this.slides[this.activeIndex];
	      var video = activeSlide.querySelector('video');
	      if (video) {
	        mySwiper.allowSlideNext = false;
	        video.play();
	        swiperArrowNext.classList.add('hide'); 
	        video.onended = function() {
	        	mySwiper.allowSlideNext = true; 
	        	mySwiper.slideNext();
	        	swiperArrowNext.classList.remove('hide'); 
	        };
	      }
	    },
	  }
	});
	var preloader = document.querySelector('.preloader');
	window.onload = function() {
	   preloader.classList.add('hide');
	};
});
