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
        <a class="footer__logo" href="/">
          <svg viewBox="0 0 94 28">
            <g fill="#fff">
              <path d="M49.556 8.752 46.79 3.71c1.163-1.043 2.613-1.86 4.206-2.431 8.077-2.887 16.89 2.58 17.876 11.086.848 7.306-4.14 13.845-11.427 14.98-7.382 1.15-14.486-4.236-15.329-11.63-.14-1.22-.098-2.474-.366-3.66-.879-3.902-4.62-6.374-8.764-5.9-3.723.428-6.74 3.83-6.783 7.652-.04 3.35 1.851 6.252 4.895 7.521 2.96 1.234 6.37.52 8.693-1.823.095-.097.167-.216.292-.38.444.946.804 1.822 1.256 2.646.449.818.991 1.584 1.559 2.478-.593.418-1.196.902-1.855 1.295-8.142 4.86-18.51.144-20.224-9.19-1.401-7.64 4.167-15.03 11.876-15.76 7.15-.677 13.346 3.951 14.673 11.016.215 1.143.162 2.335.298 3.496.453 3.894 3.928 6.85 7.973 6.813 3.86-.034 7.299-3.135 7.702-6.947.373-3.526-1.468-6.799-4.616-8.208-3.158-1.413-6.756-.638-9.144 1.97-.025.029-.066.041-.025.018ZM71.682 26.856V1.188c.152-.02.264-.05.377-.05 3.163.019 6.334-.092 9.488.09 6.066.348 10.553 4.288 11.546 9.75.73 4.013.282 7.839-2.323 11.162-2.08 2.652-4.879 4.178-8.194 4.494-2.692.256-5.42.167-8.131.22-.91.017-1.823.002-2.763.002Zm5.48-5.16c1.258 0 2.47.06 3.672-.011 3.298-.196 5.625-2.085 6.399-5.146.369-1.46.403-2.946.137-4.42-.486-2.692-1.934-4.622-4.602-5.477-1.821-.585-3.707-.311-5.61-.366.003 5.159.003 10.249.003 15.42Z" />
              <path d="m18.849 19.832 2.858 4.777c-4.306 3.685-12.125 4.272-17.484-.815-5.344-5.072-5.643-13.543-.742-18.862C8.65-.68 16.81-.668 21.69 3.346L18.84 8.14c-2.006-1.74-4.411-2.452-7.132-1.858-1.84.402-3.332 1.392-4.495 2.876-2.322 2.963-2.193 7.216.344 10.088 1.48 1.677 3.376 2.566 5.61 2.66 2.207.094 4.12-.686 5.683-2.073Z" />
            </g>
            <defs>
              <clipPath>
                <path fill="#fff" d="M0 .5h93.409v27H0z" />
              </clipPath>
            </defs>
          </svg>
        </a>

        <div class="footer__contents">
          <div class="footer__socials">

            <?php while (have_rows('socials_list', 'options')) : the_row();
              $image = get_sub_field('socials_icon');
              $link = get_sub_field('socials_link') ?? '';
            ?>
              <a class="footer__icon" href="<?= $link; ?>" target="_blank">
                <?php if ($image) {
                  echo file_get_contents($image);
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
            ?>

              <a href="<?= $link; ?>" target="_blank">
                <?php if ($image) {
                  echo file_get_contents($image);
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