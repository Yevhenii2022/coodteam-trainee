document.addEventListener(
	'DOMContentLoaded',
	function () {
		const swiper =
			new Swiper(
				'.swiper__swiper',
				{
					loop: true,
					effect:
						'fade',

					// If we need pagination
					pagination:
						{
							el: '.swiper__pagination',
							clickable: true,
						},

					// Navigation arrows
					navigation:
						{
							nextEl:
								'.swiper__nav--next',
							prevEl:
								'.swiper__nav--prev',
						},
				},
			);

		let slides =
			document.querySelectorAll(
				'.services__card',
			);

		if (
			slides.length >
				4 ||
			window.innerWidth <
				1024
		) {
			var services =
				new Swiper(
					'.services__slider',
					{
						slidesPerView: 1.11,
						spaceBetween: 10,
						loop: true,
						speed: 1000,
						keyboard:
							{
								enabled: true,
							},
						pagination:
							{
								el: '.services__swiper-pagination',
								clickable: true,
								renderBullet:
									function (
										index,
										className,
									) {
										return (
											'<span class="services__swiper-pagination--span ' +
											className +
											'"></span>'
										);
									},
							},
						breakpoints:
							{
								541: {
									slidesPerView: 4,
									spaceBetween: 24,
									pagination: false,
								},
							},
					},
				);
		}

		var portfolio =
			new Swiper(
				'.portfolio__slider',
				{
					slidesPerView: 1.17,
					spaceBetween: 10,
					loop: true,
					speed: 1000,
					keyboard:
						{
							enabled: true,
						},
					pagination:
						{
							el: '.portfolio__swiper-pagination',
							clickable: true,
							renderBullet:
								function (
									index,
									className,
								) {
									return (
										'<span class="portfolio__swiper-pagination--span ' +
										className +
										'"></span>'
									);
								},
						},
					breakpoints:
						{
							768: {
								spaceBetween: 40,
								slidesPerView: 2.5,
								pagination: false,
							},
							1024: {
								spaceBetween: 53,
								slidesPerView: 3.5,
								pagination: false,
							},
						},
				},
			);

		var clients =
			new Swiper(
				'.clients__slider',
				{
					slidesPerView: 1.35,
					spaceBetween: 10,
					loop: true,
					speed: 1000,
					keyboard:
						{
							enabled: true,
						},
					pagination:
						{
							el: '.clients__swiper-pagination',
							clickable: true,
							renderBullet:
								function (
									index,
									className,
								) {
									return (
										'<span class="clients__swiper-pagination--span ' +
										className +
										'"></span>'
									);
								},
						},
					breakpoints:
						{
							541: {
								spaceBetween: 16,
								slidesPerView: 3.5,
							},
							1024: {
								spaceBetween: 24,
								slidesPerView: 4.5,
							},
						},
				},
			);

		if (
			window.innerWidth <
			1025
		) {
			var about =
				new Swiper(
					'.about__slider',
					{
						slidesPerView: 4,
						loop: true,
						speed: 1000,
						keyboard:
							{
								enabled: true,
							},
						pagination:
							{
								el: '.about__swiper-pagination',
								clickable: true,
								renderBullet:
									function (
										index,
										className,
									) {
										return (
											'<span class="about__swiper-pagination--span ' +
											className +
											'"></span>'
										);
									},
							},
						breakpoints:
							{
								768: {
									slidesPerView: 6,
								},
							},
					},
				);
		}

		if (
			window.innerWidth <
			1025
		) {
			var technologies =
				new Swiper(
					'.technologies__slider',
					{
						slidesPerView: 4,
						loop: true,
						speed: 1000,
						keyboard:
							{
								enabled: true,
							},
						pagination:
							{
								el: '.technologies__swiper-pagination',
								clickable: true,
								renderBullet:
									function (
										index,
										className,
									) {
										return (
											'<span class="technologies__swiper-pagination--span ' +
											className +
											'"></span>'
										);
									},
							},
						breakpoints:
							{
								768: {
									slidesPerView: 6,
								},
							},
					},
				);
		}
	},
);

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
