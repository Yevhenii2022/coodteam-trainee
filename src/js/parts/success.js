document.addEventListener("DOMContentLoaded", function () {
	let popup = document.querySelector(".success");
	let closeBtn = document.querySelectorAll(".success--close");

	if (closeBtn.length > 0) {
		closeBtn.forEach(function (button) {
			button.addEventListener("click", function () {
				if (popup.classList.contains("success--show")) {
					popup.classList.remove("success--show");
				}
				if (document.body.classList.contains("body--popup")) {
					document.body.classList.remove("body--popup");
				}
			});
		});
	}
});
