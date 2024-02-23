document.addEventListener(
	'DOMContentLoaded',
	function () {
		const wpcf7Elm =
			document.querySelector(
				'.wpcf7',
			);
		const submitButton =
			document.querySelector(
				'.form__button',
			);
		let popupSuccess =
			document.querySelector(
				'.success',
			);

		if (wpcf7Elm) {
			wpcf7Elm.addEventListener(
				'wpcf7beforesubmit',
				() => {
					if (
						submitButton
					) {
						submitButton.setAttribute(
							'disabled',
							'disabled',
						);
					}
				},
				false,
			);

			wpcf7Elm.addEventListener(
				'wpcf7mailsent',
				// "wpcf7mailfailed",
				// "wpcf7submit",
				event => {
					popupSuccess.classList.add(
						'success--show',
					);
					document.body.classList.add(
						'body--popup',
					);
					const form =
						event.target;
					form.reset();
				},
				false,
			);

			wpcf7Elm.addEventListener(
				'wpcf7submit',
				() => {
					if (
						submitButton
					) {
						submitButton.removeAttribute(
							'disabled',
						);
					}
				},
				false,
			);
		}

		// input file
		let inputFile =
			document.querySelector(
				"input[type='file']",
			);
		let fileNameDisplay =
			document.querySelector(
				'.form__file-text',
			);
		let inputClear =
			document.querySelector(
				'.button__delete',
			);
		let icons = {
			pdf: '/wp-content/themes/pointer-theme/assets/images/icon-pdf.jpg',
			doc: '/wp-content/themes/pointer-theme/assets/images/icon-doc.jpg',
			img: '/wp-content/themes/pointer-theme/assets/images/icon-img.jpg',
		};

		if (inputFile) {
			inputFile.addEventListener(
				'change',
				function () {
					let fileName =
						this
							.files[0]
							.name;
					let fileType =
						this
							.files[0]
							.type;

					let iconName;
					if (
						fileType.includes(
							'pdf',
						)
					) {
						iconName =
							icons.pdf;
					} else if (
						fileType.includes(
							'doc',
						)
					) {
						iconName =
							icons.doc;
					} else if (
						fileType.includes(
							'png',
						) ||
						fileType.includes(
							'jpeg',
						)
					) {
						iconName =
							icons.img;
					} else {
						iconName =
							'';
					}

					fileNameDisplay.innerHTML =
						iconName
							? `<img class="form__file-icon" src=${iconName} /><span> ${fileName}</span>`
							: 'Прикріпити файл';
				},
			);
		}

		//clear input
		if (
			inputClear
		) {
			inputClear.addEventListener(
				'click',
				function () {
					if (
						inputFile
							.files
							.length >
						0
					) {
						inputFile.value =
							'';
						fileNameDisplay.innerText =
							'Прикріпити файл';
					}
				},
			);
		}
	},
);
