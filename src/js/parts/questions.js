document.addEventListener(
	'DOMContentLoaded',
	function () {
		let accordionList =
			document.querySelectorAll(
				'.questions__block',
			);
		if (
			accordionList.length >
			0
		) {
			accordionList.forEach(
				item => {
					let question =
						item.querySelector(
							'.questions__question',
						);
					question.addEventListener(
						'click',
						() => {
							let content =
								item.querySelector(
									'.questions__answear',
								);
							let isActive =
								item.classList.contains(
									'active',
								);
							document
								.querySelectorAll(
									'.questions__block',
								)
								.forEach(
									block => {
										if (
											block !==
												item &&
											block.classList.contains(
												'active',
											)
										) {
											block.classList.remove(
												'active',
											);
											block.querySelector(
												'.questions__answear',
											).style.maxHeight =
												null;
										}
									},
								);
							if (
								!isActive
							) {
								item.classList.add(
									'active',
								);
								content.style.maxHeight =
									content.scrollHeight +
									'px';
							} else {
								item.classList.remove(
									'active',
								);
								content.style.maxHeight =
									null;
							}
						},
					);
				},
			);
		}
	},
);
