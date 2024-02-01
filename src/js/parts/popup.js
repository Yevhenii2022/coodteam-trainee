document.addEventListener("DOMContentLoaded", function () {
	let contactsBtn = document.querySelectorAll(".button--contacts");
	let popup = document.querySelector(".popup");
	let closeBtn = document.querySelectorAll(".popup--close");

	if (contactsBtn.length > 0) {
		contactsBtn.forEach(function (button) {
			button.addEventListener("click", function () {
				popup.classList.add("popup--show");
				document.body.classList.add("body--popup");
			});
		});
	}

	if (closeBtn.length > 0) {
		closeBtn.forEach(function (button) {
			button.addEventListener("click", function () {
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
