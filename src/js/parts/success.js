document.addEventListener("DOMContentLoaded", function () {
	let popup = document.querySelector(".popup");
	let popupSuccess = document.querySelector(".success");
	let closeBtn = document.querySelectorAll(".success--close");

	if (closeBtn.length > 0) {
		closeBtn.forEach(function (button) {
			button.addEventListener("click", function () {
				if (popupSuccess.classList.contains("success--show")) {
					popupSuccess.classList.remove("success--show");
				}
				if (popup.classList.contains("popup--show")) {
					popup.classList.remove("popup--show");
				}
				if (document.body.classList.contains("body--popup")) {
					document.body.classList.remove("body--popup");
				}
			});
		});
	}
});
