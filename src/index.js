import './fonts/stylesheet.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Accordion from 'accordion-js';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'accordion-js/dist/accordion.min.css';
import './scss/styles.scss';
import StickyHeader from "@oveleon/sticky-header"
import { disablePageScroll, enablePageScroll } from 'scroll-lock';



document.addEventListener('DOMContentLoaded', function () {
	new StickyHeader({
		selector: 'header',             // Header or container selector
		linkSelector: 'a, strong',       // Default: null / Class selector for links (to change their colors when shrinking)
		scrollSettings: {
			startHeight: 130,           // Starting height for the container
			stopHeight: 130,             // StopHeight for the container after reaching the stopPosition
			stopPosition: 400,          // Container will shrink to stopHeight until reaching this position
			breakPosition: 600,         // Hide position
		},
		classes: {
			useClasses: true,          // Toggle classes on or off
			isOpen: 'sh-open',          // Visible and fully open
			onStop: 'sh-stop'           // stopHeight reached
		},
	});

	const gritItems = document.querySelectorAll('.advantages__item')
	gritItems.forEach((item, i) => {
		item.style.gridArea = `ga${i}`
	})

	const swiper1 = new Swiper('.swiper-gallery', {
		modules: [Navigation, Pagination],
		slidesPerView: 2,
		centeredSlides: true,
		centeredSlidesBounds: true,
		loop: true,
		spaceBetween: 24,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-gallery .swiper-pagination',
			type: 'bullets',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			0: {
				slidesPerView: 1,
			}
		}
	})

	//scroll top
	function scrollToTop() {
		setTimeout(function () {
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		});
	}

	const btnTop = document.querySelector('#topScroll')
	btnTop.addEventListener('click', function () {
		scrollToTop()
	})


	if (window.innerWidth < 768) {
		const wrap = document.querySelector('.footer__wrap')
		const copy = document.querySelector('.footer__copy')
		wrap.appendChild(copy)
	}

	const burger = document.querySelector('.burger')
	const menu = document.querySelector('header .nav-menu')
	const body = document.querySelector('body')
	burger.addEventListener('click', function () {
		this.classList.toggle('active')
		menu.classList.toggle('show')
		body.classList.toggle('menu-open')
	})

	if (document.querySelector('#play')) {
		const btnPlay = document.querySelector('#play')
		btnPlay.addEventListener('click', function () {
			playVideo()
			btnPlay.classList.add('hidden')
		})
		function playVideo() {
			if (video.paused) {
				video.play()
			}
		}
	}


	if (document.querySelector('.pictures')) {
		const picturesWrap = document.querySelector('.pictures')
		const els = picturesWrap.querySelectorAll('img')
		const showBtn = document.querySelector('#showMore')
		els.forEach((el, i) => {
			if (i > 5) {
				el.classList.add('hidden')
			}
		})
		showBtn.addEventListener('click', function () {
			this.remove()
			els.forEach(el => {
				el.classList.remove('hidden')
			})
		})
	}

})
