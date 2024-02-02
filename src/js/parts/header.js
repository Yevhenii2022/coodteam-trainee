document.addEventListener("DOMContentLoaded", function () {
	const header = document.querySelector(".header");
	scrollPrev = 0;

	window.addEventListener("scroll", function () {
		const scrolled = window.pageYOffset || this.document.documentElement.scrollTop;

		if (scrolled > 100 && scrolled > scrollPrev) {
			header.classList.add("header--hidden");
		} else {
			header.classList.remove("header--hidden");
		}
		scrollPrev = scrolled;
	});
});
