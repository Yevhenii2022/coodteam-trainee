document.addEventListener("DOMContentLoaded", function () {
	const header = document.querySelector(".header__wrapper");
	const headerButton = document.querySelector(".header__button");
	const listIcons = document.querySelectorAll(".header__list-icon");

	listIcons.forEach(function (listIcon) {
		listIcon.addEventListener("mouseenter", function () {
			header.style.height = "4rem";
		});

		listIcon.addEventListener("mouseleave", function () {
			header.style.height = "3.333rem";
		});
	});

	headerButton.addEventListener("mouseenter", function () {
		header.style.height = "4rem";
	});

	headerButton.addEventListener("mouseleave", function () {
		header.style.height = "3.333rem";
	});
});
