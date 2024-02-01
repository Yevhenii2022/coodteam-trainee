document.addEventListener("DOMContentLoaded", function () {
	const wpcf7Elm = document.querySelector(".wpcf7");
	const submitButton = document.querySelector(".form__button");

	if (wpcf7Elm) {
		wpcf7Elm.addEventListener(
			"wpcf7beforesubmit",
			event => {
				if (submitButton) {
					submitButton.setAttribute("disabled", "disabled");
				}
			},
			false,
		);

		wpcf7Elm.addEventListener(
			"wpcf7mailsent",
			event => {
				const form = event.target;
				form.reset();
			},
			false,
		);

		wpcf7Elm.addEventListener(
			"wpcf7submit",
			event => {
				if (submitButton) {
					submitButton.removeAttribute("disabled");
				}
			},
			false,
		);
	}
});
