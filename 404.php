<?php

/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package pointer_theme
 */

get_header();

$title = get_field("404_title", "options");
$subtitle = get_field("404_text", "options");
$button = get_field("404_btn_text", "options");
$image = get_field("404_img", "options")
?>

<main>
	<section class="error-404">
		<div class="container">
			<div class="error-404__inner">
				<div class="error-404__wrapper">
					<?php if ($image) : ?>
						<div class="error-404__image">
							<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>">
						</div>
					<?php endif ?>

					<div class="error-404__content">
						<?php if ($title) : ?>
							<h1 class="error-404__title main__title"><?= $title; ?></h1>
						<?php endif ?>
						<?php if ($subtitle) : ?>
							<p class="error-404__text"><?= $subtitle; ?></p>
						<?php endif ?>
						<?php if ($button) : ?>
							<a href="<?php echo home_url(); ?>" class="error-404__button button">
								<span><?= $button; ?> </span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24" fill="none">
									<circle cx="11.5" cy="12" r="11.5" fill="#368B3C" />
									<path stroke="#fff" d="M6.838 11.69h9.013M12.432 7.96l3.73 3.73-3.73 3.729" />
								</svg>
							</a>
						<?php endif ?>
					</div>
				</div>
				<div class="error-404__contacts">
					<?php $first_item = true;
					while (have_rows('contacts_list', 'options')) : the_row();
						$image = get_sub_field('contacts_icon');
						$link = get_sub_field('contacts_icon_link');
						$text = get_sub_field('contacts_name');
						$file_path = get_attached_file($image);
						$svg_content = file_get_contents($file_path);
					?>
						<li>
							<a href="<?= $link ?>">
								<?php if ($svg_content !== false) {
									echo $svg_content;
								} ?>

								<?php if ($first_item && $text) : ?>
									<span><?= $text ?></span>
								<?php endif; ?>
							</a>
						</li>
					<?php $first_item = false;
					endwhile; ?>
				</div>
			</div>
		</div>
	</section>
</main>

<?php get_template_part('template-parts/success'); ?>

<?php get_template_part('template-parts/popup'); ?>