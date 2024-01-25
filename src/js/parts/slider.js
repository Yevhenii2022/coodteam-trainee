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

	var portfolio = new Swiper(".portfolio__slider", {
		slidesPerView: 3.5,
		spaceBetween: 53,
		loop: true,
		speed: 1000,
		keyboard: {
			enabled: true,
		},
	});

	var clients = new Swiper(".clients__slider", {
		slidesPerView: 4.5,
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
	});
});
