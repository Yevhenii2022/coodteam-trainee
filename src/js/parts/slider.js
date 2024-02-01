document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".swiper__swiper", {
		loop: true,
		effect: "fade",

		// If we need pagination
		pagination: {
			el: ".swiper__pagination",
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper__nav--next",
			prevEl: ".swiper__nav--prev",
		},
	});

	let slides = document.querySelectorAll(".services__card");

	if (slides.length > 4 || window.innerWidth < 1024) {
		var services = new Swiper(".services__slider", {
			slidesPerView: 1.5,
			spaceBetween: 24,
			loop: true,
			speed: 1000,
			keyboard: {
				enabled: true,
			},
			pagination: {
				el: ".services__swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="services__swiper-pagination--span ' + className + '"></span>';
				},
			},
			breakpoints: {
				541: {
					slidesPerView: 4,
					pagination: false,
				},
			},
		});
	}

	var portfolio = new Swiper(".portfolio__slider", {
		slidesPerView: 1.5,
		spaceBetween: 53,
		loop: true,
		speed: 1000,
		keyboard: {
			enabled: true,
		},
		pagination: {
			el: ".portfolio__swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="portfolio__swiper-pagination--span ' + className + '"></span>';
			},
		},
		breakpoints: {
			541: {
				slidesPerView: 3.5,
				pagination: false,
			},
		},
	});

	var clients = new Swiper(".clients__slider", {
		slidesPerView: 1.5,
		spaceBetween: 24,
		loop: true,
		speed: 1000,
		keyboard: {
			enabled: true,
		},
		pagination: {
			el: ".clients__swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="clients__swiper-pagination--span ' + className + '"></span>';
			},
		},
		breakpoints: {
			541: {
				slidesPerView: 4.5,
			},
		},
	});

	if (window.innerWidth < 1025) {
		var about = new Swiper(".about__slider", {
			slidesPerView: 4,
			loop: true,
			speed: 1000,
			keyboard: {
				enabled: true,
			},
			pagination: {
				el: ".about__swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="about__swiper-pagination--span ' + className + '"></span>';
				},
			},
			breakpoints: {
				768: {
					slidesPerView: 6,
				},
			},
		});
	}
});

// breakpoints: {
//     // when window width is >= 320px
//     320: {
//         slidesPerView: 1,
//         spaceBetween: 0,
//         slideToClickedSlide: true,
//     },
//     // when window width is >= 640px
//     640: {
//         slidesPerView: 4,
//         spaceBetween: 0,
//         slideToClickedSlide: true,
//     }
// }
