<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pointer_theme
 */

$title = get_field('footer_title', 'options') ?? '';
$subtitle = get_field('footer_subtitle', 'options') ?? '';
$button_text = get_field('footer_button', 'options') ?? '';
?>

<footer class="footer">
  <div class="container">
    <div class="footer__wrapper">

      <div class="footer__inner">
        <h2 class="footer__title"><?php echo $title ?></h2>
        <p class="footer__text"><?= $subtitle ?></p>
        <div class="footer__button button button--contacts">
          <span><?= $button_text ?></span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24" fill="none">
            <circle cx="11.5" cy="12" r="11.5" fill="#368B3C" />
            <path stroke="#fff" d="M6.838 11.69h9.013M12.432 7.96l3.73 3.73-3.73 3.729" />
          </svg>
        </div>
      </div>

      <div class="footer__box">
        <?= the_custom_logo(); ?>

        <div class="footer__contents">
          <div class="footer__socials">

            <?php while (have_rows('socials_list', 'options')) : the_row();
              $image = get_sub_field('socials_icon');
              $link = get_sub_field('socials_link') ?? '';
              $file_path = get_attached_file($image);
              $svg_content = file_get_contents($file_path);
            ?>
              <a class="footer__icon" href="<?= $link; ?>" target="_blank">
                <?php if ($svg_content !== false) {
                  echo $svg_content;
                } ?>
              </a>
            <?php endwhile; ?>
          </div>

          <div class="footer__contacts">
            <?php
            $i = 1;
            while (have_rows('contacts_list', 'options')) : the_row();
              $image = get_sub_field('contacts_icon');
              $link = get_sub_field('contacts_icon_link') ?? '';
              $name = get_sub_field('contacts_name') ?? '';
              $file_path = get_attached_file($image);
              $svg_content = file_get_contents($file_path);
            ?>

              <a href="<?= $link; ?>" target="_blank">
                <?php if ($svg_content !== false) {
                  echo $svg_content;
                } ?>
                <?php if ($i == 1 && $name) : ?>
                  <span><?= $name; ?></span>
                <?php endif; ?>
              </a>
            <?php $i++;
            endwhile; ?>
          </div>

        </div>
      </div>
    </div>
  </div>
</footer>

</div>
<?php wp_footer(); ?>
</body>

</html>