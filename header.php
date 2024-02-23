<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pointer_theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php // This script uses for phone mask 
	?>
	<script src="https://unpkg.com/imask"></script>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page">
		<header class="header">
			<div class="container">
				<div class="header__wrapper">
					<?= the_custom_logo(); ?>

					<div class="header__contacts">
						<ul class="header__list">
							<?php while (have_rows('contacts_list', 'options')) : the_row();
								$image = get_sub_field('contacts_icon');
								$link = get_sub_field('contacts_icon_link') ?? '';
								$file_path = get_attached_file($image);
								$svg_content = file_get_contents($file_path);
							?>
								<li>
									<a href="<?= $link; ?>" target="_blank">
										<?php if ($svg_content !== false) {
											echo $svg_content;
										} ?>
									</a>
								</li>
							<?php endwhile; ?>
						</ul>

						<?php
						$btn_text = get_field('header_btn', 'options') ?? '';
						?>
						<div class="header__button button button--contacts">
							<?= $btn_text ?>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24" fill="none">
								<circle cx="11.5" cy="12" r="11.5" fill="#368B3C" />
								<path stroke="#fff" d="M6.838 11.69h9.013M12.432 7.96l3.73 3.73-3.73 3.729" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</header>