document.addEventListener("DOMContentLoaded", function () {
	const wpcf7Elm = document.querySelector(".wpcf7");
	const submitButton = document.querySelector(".form__button");
	let popup = document.querySelector(".success");

	if (wpcf7Elm) {
		wpcf7Elm.addEventListener(
			"wpcf7beforesubmit",
			() => {
				if (submitButton) {
					submitButton.setAttribute("disabled", "disabled");
				}
			},
			false,
		);

		wpcf7Elm.addEventListener(
			// "wpcf7mailsent",
			// "wpcf7mailfailed",
			"wpcf7submit",
			event => {
				popup.classList.add("success--show");
				document.body.classList.add("body--popup");
				const form = event.target;
				form.reset();
			},
			false,
		);

		wpcf7Elm.addEventListener(
			"wpcf7submit",
			() => {
				if (submitButton) {
					submitButton.removeAttribute("disabled");
				}
			},
			false,
		);
	}
});
