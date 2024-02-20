document.addEventListener(
	'DOMContentLoaded',
	function () {
		const versionsList =
			document.querySelectorAll(
				'.versions__block',
			);
		if (
			versionsList.length >
			0
		) {
			versionsList.forEach(
				item => {
					item.addEventListener(
						'click',
						() => {
							const content =
								item.querySelector(
									'.versions__answear',
								);
							const isActive =
								item.classList.contains(
									'active',
								);
							document
								.querySelectorAll(
									'.versions__block',
								)
								.forEach(
									block => {
										if (
											block.classList.contains(
												'active',
											)
										) {
											block.classList.remove(
												'active',
											);
											block.querySelector(
												'.versions__answear',
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
							}
						},
					);
				},
			);
		}
	},
);
